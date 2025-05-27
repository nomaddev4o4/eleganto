import { motion } from "framer-motion";
import { ThreeDMarquee } from "./ui/ThreeDMarquee";

export default function CommunityUseCases() {
  const useCases = [
    {
      image: "./images/image1.png",
      link: "https://x.com/jrgarciadev/status/1924469908005323175",
    },
    {
      image: "./images/image2.png",
      link: "https://www.heroui.com/",
    },
    {
      image: "./images/image3.png",
      link: "https://heroui-chat-five.vercel.app/",
    },
    {
      image: "./images/image10.png",
      link: "https://x.com/inkko44/status/1924126088210366470",
    },
    {
      image: "./images/image5.png",
      link: "https://x.com/hero_ui/status/1909407579320860774",
    },
    {
      image: "./images/image6.png",
      link: "https://www.coderabbit.ai/",
    },
    {
      image: "./images/image7.png",
      link: "https://www.mochii.ai/",
    },
    {
      image: "./images/image8.png",
      link: "https://lowdefy.com/",
    },
    {
      image: "./images/image9.png",
      link: "https://chartbrew.com/",
    },
    {
      image: "./images/image10.png",
      link: "https://www.likn.co/en",
    },
    {
      image: "./images/image11.png",
      link: "https://www.encur.me/",
    },
    {
      image: "./images/image12.png",
      link: "https://heroui.chat/",
    },
    {
      image: "./images/image1.png",
      link: "https://x.com/jrgarciadev/status/1924469908005323175",
    },
    {
      image: "./images/image2.png",
      link: "https://www.heroui.com/",
    },
    {
      image: "./images/image3.png",
      link: "https://heroui-chat-five.vercel.app/",
    },
    {
      image: "./images/image10.png",
      link: "https://x.com/inkko44/status/1924126088210366470",
    },
    {
      image: "./images/image5.png",
      link: "https://x.com/hero_ui/status/1909407579320860774",
    },
    {
      image: "./images/image6.png",
      link: "https://www.coderabbit.ai/",
    },
    {
      image: "./images/image7.png",
      link: "https://www.mochii.ai/",
    },
    {
      image: "./images/image8.png",
      link: "https://lowdefy.com/",
    },
    {
      image: "./images/image9.png",
      link: "https://chartbrew.com/",
    },
    {
      image: "./images/image10.png",
      link: "https://www.likn.co/en",
    },
    {
      image: "./images/image11.png",
      link: "https://www.encur.me/",
    },
    {
      image: "./images/image12.png",
      link: "https://heroui.chat/",
    },
    {
      image: "./images/image1.png",
      link: "https://x.com/jrgarciadev/status/1924469908005323175",
    },
    {
      image: "./images/image2.png",
      link: "https://www.heroui.com/",
    },
    {
      image: "./images/image3.png",
      link: "https://heroui-chat-five.vercel.app/",
    },
    {
      image: "./images/image10.png",
      link: "https://x.com/inkko44/status/1924126088210366470",
    },
    {
      image: "./images/image5.png",
      link: "https://x.com/hero_ui/status/1909407579320860774",
    },
    {
      image: "./images/image6.png",
      link: "https://www.coderabbit.ai/",
    },
    {
      image: "./images/image7.png",
      link: "https://www.mochii.ai/",
    },
    {
      image: "./images/image8.png",
      link: "https://lowdefy.com/",
    },
    {
      image: "./images/image9.png",
      link: "https://chartbrew.com/",
    },
    {
      image: "./images/image10.png",
      link: "https://www.likn.co/en",
    },
    {
      image: "./images/image11.png",
      link: "https://www.encur.me/",
    },
    {
      image: "./images/image12.png",
      link: "https://heroui.chat/",
    },
  ];

  const stats = [
    { number: "50K+", label: "Developers" },
    { number: "10K+", label: "Projects Built" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="relative py-20">
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
              Community Showcase
            </span>
          </motion.div>

          <motion.h2
            className="text-over-gradient mb-6 bg-gradient-to-b from-white/90 to-white/50 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Loved by developers & designers
          </motion.h2>

          <motion.p
            className="text-over-gradient mx-auto max-w-2xl text-lg text-white/70 sm:text-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Join thousands of creators building amazing experiences with our
            platform. See what&apos;s possible when creativity meets powerful
            tools.
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
            Ready to join our community?{" "}
            <a
              href="#pricing"
              className="text-over-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium text-transparent transition-all duration-300 hover:from-purple-300 hover:to-pink-300"
            >
              Start building today
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            <span>✓ Free to start</span>
            <span>✓ No credit card required</span>
            <span>✓ Join 50K+ developers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
