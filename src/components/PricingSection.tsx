"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    pricing: {
      amount: 9,
      currency: "$",
      period: "month",
      display: "$9",
      periodDisplay: "/month",
    },
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "Basic templates",
      "Community support",
      "1GB storage",
      "Basic analytics",
    ],
    cta: {
      text: "Get Started",
      variant: "outline",
    },
    popular: false,
    badge: null,
  },
  {
    id: "professional",
    name: "Professional",
    pricing: {
      amount: 29,
      currency: "$",
      period: "month",
      display: "$29",
      periodDisplay: "/month",
    },
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Premium templates",
      "Priority support",
      "50GB storage",
      "Advanced analytics",
      "Team collaboration",
      "Custom domains",
    ],
    cta: {
      text: "Get Started",
      variant: "gradient",
    },
    popular: true,
    badge: {
      text: "Most Popular",
      color: "from-purple-500/80 to-pink-500/80",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    pricing: {
      amount: 99,
      currency: "$",
      period: "month",
      display: "$99",
      periodDisplay: "/month",
    },
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 phone support",
      "Advanced security",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: {
      text: "Get Started",
      variant: "outline",
    },
    popular: false,
    badge: null,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-over-gradient mb-6 bg-gradient-to-b from-white/90 to-white/50 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            Simple Pricing
          </h2>
          <p className="text-over-gradient mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
            Choose the perfect plan for your needs. Upgrade or downgrade at any
            time.
          </p>
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
            Need a custom solution?{" "}
            <a
              href="#contact"
              className="text-over-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium text-transparent hover:from-purple-300 hover:to-pink-300"
            >
              Contact our sales team
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
