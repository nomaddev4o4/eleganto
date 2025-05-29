"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { motion } from "framer-motion";
import { pricingPlans } from "@/constants";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className="text-over-gradient mb-6 bg-gradient-to-b from-white/90 to-white/50 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl"
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
            Start Creating Today
          </motion.h2>
          <motion.p
            className="text-over-gradient mx-auto max-w-2xl text-lg text-white/70 sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
          >
            Choose your plan and start generating beautiful UIs with AI. From
            prototype to production in minutes.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-6 left-0 right-0 z-10 flex justify-center sm:-top-8">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className={`rounded-full border border-white/20 bg-gradient-to-r ${plan.badge.color} px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2`}
                  >
                    <span className="text-xs font-medium text-white sm:text-sm">
                      {plan.badge.text}
                    </span>
                  </motion.div>
                </div>
              )}

              <Card
                className={`card-over-gradient h-full border border-white/10 bg-black/20 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${
                  plan.popular ? "border-white/20 shadow-2xl lg:scale-105" : ""
                }`}
                as={Link}
                href="https://heroui.chat/"
                target="_blank"
              >
                <CardHeader className="p-6 text-center sm:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Plan Name - Bold and at top */}
                    <h3 className="text-over-gradient bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline justify-center">
                      <span className="text-over-gradient bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                        {plan.pricing.display}
                      </span>
                      <span className="text-over-gradient ml-1 text-base text-white/60 sm:text-lg">
                        {plan.pricing.periodDisplay}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-over-gradient text-sm text-white/60 sm:text-base">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>

                <CardBody className="space-y-6 p-6 pt-0 sm:p-8">
                  {/* CTA Button */}
                  <Button
                    radius="full"
                    size="lg"
                    className={`w-full ${
                      plan.cta.variant === "gradient"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl"
                        : "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    }`}
                  >
                    {plan.cta.text}
                  </Button>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="text-over-gradient text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
                      What&apos;s included
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-over-gradient text-sm text-white/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-over-gradient mb-6 text-white/70">
            Need a custom AI solution?{" "}
            <a
              href="#contact"
              className="text-over-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium text-transparent hover:from-purple-300 hover:to-pink-300"
            >
              Let&apos;s talk about your needs
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            <span>✓ 7-day free trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
