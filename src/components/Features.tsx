import { features } from "@/app/features.constants";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import { cn } from "@heroui/theme";

export default function Features() {
  const cardContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={cardContainer} className="relative py-20">
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

function FeatureCard({
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
  const scale = useTransform(progress, range, [1, targetScale]);

  const handleVideoLoad = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      e.currentTarget.playbackRate = 0.75; // Slow down video playback for better performance
    },
    [],
  );

  return (
    <motion.div
      className="sticky top-0 flex h-screen items-center justify-center px-4 will-change-transform sm:px-6 lg:px-8"
      key={title}
      style={{ scale }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "card-over-gradient h-[85vh] w-full max-w-6xl overflow-hidden border border-white/10 shadow-2xl",
          "bg-black/20 backdrop-blur-xl",
        )}
        style={{
          marginTop: index * 80,
        }}
      >
        <CardHeader className="flex flex-col items-center justify-center space-y-4 p-8 text-center">
          <motion.div
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="text-sm font-medium text-white/80">
              Feature {index + 1}
            </span>
          </motion.div>

          <motion.h3
            className="text-over-gradient bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-4xl font-bold text-transparent"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-over-gradient max-w-2xl text-lg text-white/70"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </CardHeader>

        <CardBody className="flex items-center justify-center p-8">
          <motion.div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-20"
              style={{ background: color }}
            />
            <video
              className="relative z-10 h-full w-full rounded-2xl object-cover object-top"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={handleVideoLoad}
            />

            {/* Subtle overlay for better video visibility */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
