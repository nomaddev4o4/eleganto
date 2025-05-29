"use client";

import { motion } from "framer-motion";
import { ThreeDMarquee } from "./ui/ThreeDMarquee";
import { useCases } from "@/constants";

export default function CommunityUseCases() {
  const stats = [
    { number: "5K+", label: "Projects Built" },
    { number: "10K+", label: "Active Creators" },
    { number: "99.9%", label: "AI Accuracy" },
    { number: "< 30s", label: "Average Generation Time" },
  ];

  return (
    <section id="community" className="relative py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="text-sm font-medium text-white/80">
              Built by the Community
            </span>
          </motion.div>

          <motion.h2
            className="text-over-gradient mb-6 bg-gradient-to-b from-white/90 to-white/50 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            From idea to interface in seconds
          </motion.h2>

          <motion.p
            className="text-over-gradient mx-auto max-w-2xl text-lg text-white/70 sm:text-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Thousands of creators are already using HeroUI Chat to transform
            their prompts into stunning, production-ready components. See
            what&apos;s possible with AI-powered design.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-over-gradient bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {stat.number}
              </div>
              <div className="text-over-gradient mt-2 text-sm text-white/60 sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3D Marquee - Full Width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <ThreeDMarquee useCases={useCases} />
      </motion.div>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-over-gradient mb-6 text-white/70">
            Ready to create your first AI-generated component?{" "}
            <a
              href="#pricing"
              className="text-over-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium text-transparent transition-all duration-300 hover:from-purple-300 hover:to-pink-300"
            >
              Start generating now
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            <span>✓ Free to start</span>
            <span>✓ No prompting experience needed</span>
            <span>✓ Production-ready code</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
