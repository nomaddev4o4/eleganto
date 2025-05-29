"use client";

import ComponentsGroup from "./ui/ComponentsGroup";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BultWith() {
  return (
    <div className="relative mx-auto h-screen max-w-screen-xl">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <motion.h1
          className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-4xl font-bold text-transparent drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          Powered by
        </motion.h1>
        <motion.h2
          className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-4xl font-bold text-transparent drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.3,
          }}
        >
          HeroUI
        </motion.h2>
        <motion.p
          className="text-over-gradient mt-4 bg-gradient-to-b from-white/80 to-white/40 bg-clip-text text-lg font-medium text-transparent drop-shadow-lg sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.6,
          }}
        >
          The modern React UI library trusted by thousands
        </motion.p>
        <motion.div
          className="mx-auto mt-6 w-fit"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.9,
          }}
          whileHover={{
            y: -4,
            scale: 1.02,
            transition: {
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.15 },
          }}
        >
          <Button
            as={Link}
            target="_blank"
            href="https://heroui.com"
            radius="full"
            size="lg"
            color="primary"
            className="w-fit border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            Explore HeroUI
          </Button>
        </motion.div>
      </div>
      <ComponentsGroup />
    </div>
  );
}
