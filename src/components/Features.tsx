import React from "react";
import { features } from "@/app/features.constants";
import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useCallback, useState, useEffect, useMemo } from "react";
import { cn } from "@heroui/theme";

// Custom hook for optimized video management
function useOptimizedVideo(shouldPlayVideo: boolean) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = e.currentTarget;
      setVideoLoaded(true);

      // Only play if should play video is true
      if (shouldPlayVideo) {
        video.play().catch(() => {
          // Handle autoplay restrictions gracefully
        });
      }
    },
    [shouldPlayVideo],
  );

  // Handle video play/pause based on visibility
  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      if (shouldPlayVideo) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions gracefully
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [shouldPlayVideo, videoLoaded]);

  return { videoRef, handleVideoLoad, videoLoaded };
}

// Custom hook for intersection observer
function useIntersectionObserver() {
  const [isInView, setIsInView] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Only start playing video when card is 50% visible
            if (entry.intersectionRatio > 0.5) {
              setShouldPlayVideo(true);
            }
          } else {
            setIsInView(false);
            setShouldPlayVideo(false);
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: "100px",
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isInView, shouldPlayVideo, elementRef };
}

export default function Features() {
  const cardContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start start", "end end"],
  });

  return (
    <main id="features" ref={cardContainer} className="relative py-20">
      <div className="mb-20 text-center">
        <h2 className="text-over-gradient mb-6 bg-gradient-to-b from-white/90 to-white/50 bg-clip-text text-6xl font-bold text-transparent">
          Features
        </h2>
        <p className="text-over-gradient mx-auto max-w-2xl text-xl text-white/70">
          Discover the powerful tools and capabilities that make development
          seamless and efficient
        </p>
      </div>

      {features.map((feature, i) => {
        const targetScale = 1 - (features.length - i - 1) * 0.05;
        return (
          <FeatureCard
            key={feature.title}
            {...feature}
            index={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

const FeatureCard = React.memo(function FeatureCard({
  title,
  color,
  index,
  description,
  src,
  progress,
  range,
  targetScale,
}: {
  title: string;
  color: string;
  index: number;
  description: string;
  src: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const { isInView, shouldPlayVideo, elementRef } = useIntersectionObserver();
  const { videoRef, handleVideoLoad } = useOptimizedVideo(shouldPlayVideo);

  // Memoize expensive calculations
  const springConfig = useMemo(
    () => ({
      stiffness: 100,
      damping: 30,
      mass: 1,
    }),
    [],
  );

  // Optimized scale transform with spring physics for smoother animation
  const rawScale = useTransform(progress, range, [1, targetScale]);
  const scale = useSpring(rawScale, springConfig);

  // Memoize card styles
  const cardClassName = useMemo(
    () =>
      cn(
        "card-over-gradient h-[75vh] w-full max-w-6xl overflow-hidden border border-white/10 shadow-2xl",
        "bg-black/20",
        // Reduce backdrop blur when not in view for performance
        isInView ? "backdrop-blur-xl" : "backdrop-blur-sm",
      ),
    [isInView],
  );

  return (
    <motion.div
      ref={elementRef}
      className="sticky top-0 flex h-screen items-center justify-center px-4 will-change-transform sm:px-6 lg:px-8"
      key={title}
      style={{ scale }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card
        className={cardClassName}
        style={{
          marginTop: index * 70,
        }}
      >
        <CardHeader className="flex flex-col items-center justify-center space-y-4 p-6 text-center">
          <motion.h3
            className="text-over-gradient bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-4xl font-bold text-transparent"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-over-gradient max-w-2xl text-lg text-white/70"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </CardHeader>

        <CardBody className="flex items-center justify-center p-6 pt-2">
          <motion.div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-20"
              style={{ background: color }}
            />

            {/* Lazy load video only when in view */}
            {isInView ? (
              <video
                ref={videoRef}
                className="relative z-10 h-full w-full rounded-2xl object-cover object-top"
                src={src}
                muted
                loop
                playsInline
                preload="metadata" // Only load metadata initially
                onLoadedData={handleVideoLoad}
                style={{
                  // Hardware acceleration
                  transform: "translateZ(0)",
                  willChange: "auto",
                }}
              />
            ) : (
              // Placeholder while not in view
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-lg text-white/50">Loading...</div>
              </div>
            )}

            {/* Subtle overlay for better video visibility */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
});
