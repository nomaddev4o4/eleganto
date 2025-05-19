import { features } from "@/app/features.constants";
import { Card } from "@heroui/card";
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
  progress,
  range,
  targetScale,
}: {
  title: string;
  color: string;
  index: number;
  description: string;
  src: string;
  link: string;
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
          backgroundColor: color,
          marginTop: index * 100,
        }}
        className="h-full w-full"
      >
        {title}
      </Card>
    </motion.div>
  );
}
