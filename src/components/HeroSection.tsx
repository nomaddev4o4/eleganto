"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="mt-[120px] flex flex-col">
      <div className="flex flex-col items-center gap-12">
        <div className="text-center text-8xl font-medium">
          <motion.p
            className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-transparent drop-shadow-2xl"
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
            Design.
          </motion.p>
          <motion.p
            className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-transparent drop-shadow-2xl"
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
            Describe.
          </motion.p>
          <motion.p
            className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-transparent drop-shadow-2xl"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.6,
            }}
          >
            Deploy.
          </motion.p>
        </div>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.9,
          }}
        >
          <p className="text-lg leading-relaxed text-white/60">
            Generate fully functional, stunning, <br className="sm:hidden" />
            production-ready websites
          </p>
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 1.2,
          }}
        >
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 400,
                damping: 25,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            <Button
              radius="full"
              size="lg"
              color="primary"
              className="border border-white/20 bg-white/10 backdrop-blur-sm"
              as={Link}
              href="https://heroui.chat/"
              target="_blank"
              disableRipple
            >
              Get Started
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 400,
                damping: 25,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            <Button
              radius="full"
              variant="flat"
              size="lg"
              className="border border-white/10 bg-white/5 backdrop-blur-sm"
              as={Link}
              href="#community"
            >
              See Examples
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
