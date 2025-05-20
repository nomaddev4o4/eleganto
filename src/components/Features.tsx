import { features } from "@/app/features.constants";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const cardContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={cardContainer}>
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

  return (
    <motion.div
      className="sticky top-0 flex h-screen items-center justify-center"
      key={title}
      style={{ scale }}
    >
      <Card
        style={{
          background: color,
          marginTop: index * 130,
        }}
        className="h-full w-full"
      >
        <CardHeader className="flex flex-col items-center justify-center">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </CardHeader>
        <CardBody className="flex items-center justify-center">
          <div className="relative aspect-video h-full w-full">
            <video
              className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl object-cover object-top"
              src={src}
              autoPlay
              muted
              loop
            />
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
