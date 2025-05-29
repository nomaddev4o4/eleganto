"use client";

import { Card, CardBody } from "@heroui/card";
import { ClientTweetCard } from "./ui/TweetCardClient";
import { motion } from "framer-motion";
import { cn } from "@heroui/theme";
import { tweets } from "@/constants";

export default function TestimonialSection() {
  // Handle card click to open tweet in new tab
  const handleCardClick = (tweetUrl: string) => {
    window.open(tweetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="testimonials" className="mx-auto w-full max-w-7xl p-6 py-16">
      {/* Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="text-over-gradient mb-4 bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-4xl font-bold text-transparent drop-shadow-2xl sm:text-5xl md:text-6xl">
          What People Are Saying
        </h2>
        <p className="text-over-gradient mx-auto max-w-2xl bg-gradient-to-b from-white/80 to-white/40 bg-clip-text text-lg text-transparent sm:text-xl">
          Join thousands of developers who are building amazing things with
          HeroUI
        </p>
      </motion.div>

      {/* Masonry layout with glassmorphism cards */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
        {tweets.map((tweet, index) => (
          <motion.div
            key={tweet}
            className="mb-6 inline-block w-full break-inside-avoid"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
              rotateX: 1,
              rotateY: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 1,
                duration: 0.4,
              },
            }}
            whileTap={{
              scale: 0.99,
              y: -4,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 35,
                mass: 0.8,
                duration: 0.2,
              },
            }}
            // Performance optimizations
            style={{
              willChange: "transform", // Hint browser to optimize for transforms
              transform: "translate3d(0, 0, 0)", // Force hardware acceleration
              transformStyle: "preserve-3d", // Enable 3D transforms
            }}
          >
            <motion.div
              // Add a nested motion div for more complex animations
              whileHover={{
                boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.12)",
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                  duration: 0.5,
                },
              }}
              whileTap={{
                boxShadow: "0 8px 20px -5px rgba(255, 255, 255, 0.08)",
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  duration: 0.3,
                },
              }}
            >
              <Card
                isBlurred
                radius="lg"
                isPressable
                onPress={() => handleCardClick(tweet)}
              >
                <CardBody className="p-0">
                  {/* Custom styled tweet card with fixed image handling */}
                  <motion.div
                    className="relative"
                    whileHover={{
                      scale: 1.01,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                        duration: 0.4,
                      },
                    }}
                    whileTap={{
                      scale: 0.995,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                        duration: 0.2,
                      },
                    }}
                  >
                    <ClientTweetCard
                      id={tweet.split("/").pop() || ""}
                      className={cn(
                        // Override default tweet card styling to match theme
                        "border-none bg-transparent backdrop-blur-none",
                        // Fix image overflow and sizing issues
                        "[&_img]:h-auto [&_img]:max-w-full [&_img]:object-cover",
                        "[&_img]:rounded-lg [&_img]:border [&_img]:border-white/10",
                        // Fix video sizing
                        "[&_video]:h-auto [&_video]:max-w-full [&_video]:rounded-lg",
                        "[&_video]:border [&_video]:border-white/10",
                        // Ensure text is readable over glassmorphism
                        "[&_*]:text-white/90 [&_a:hover]:text-blue-300 [&_a]:text-blue-400",
                        // Fix media container spacing
                        "[&_.media-container]:mb-0 [&_.media-container]:mt-3",
                        // Prevent content overflow
                        "overflow-hidden",
                        // Prevent pointer events on links inside to avoid conflicts
                        "[&_a]:pointer-events-none",
                      )}
                    />

                    {/* Enhanced glassmorphism overlay with animation */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 via-transparent to-transparent"
                      whileHover={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.1), transparent, transparent)",
                        transition: {
                          duration: 0.6,
                          ease: "easeOut",
                        },
                      }}
                    />
                  </motion.div>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Card className="card-over-gradient mx-auto max-w-2xl border border-white/10 bg-black/20 backdrop-blur-xl">
          <CardBody className="p-8 text-center">
            <h3 className="text-over-gradient mb-4 bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-2xl font-bold text-transparent">
              Ready to join the community?
            </h3>
            <p className="text-over-gradient mb-6 bg-gradient-to-b from-white/80 to-white/40 bg-clip-text text-transparent">
              Start building amazing UIs with HeroUI today
            </p>
            <motion.button
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white/20"
              whileHover={{
                y: -3,
                scale: 1.05,
                boxShadow: "0 8px 20px -5px rgba(255, 255, 255, 0.15)",
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  duration: 0.4,
                },
              }}
              whileTap={{
                scale: 0.97,
                y: -1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.2,
                },
              }}
            >
              Get Started Now
            </motion.button>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
