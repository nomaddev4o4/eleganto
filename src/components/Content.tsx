import React from "react";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Link from "next/link";

// Unified animation variants for consistency
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Consistent transition settings
const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
};

const springTransition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94],
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export default function Content() {
  return (
    <motion.div
      className="flex min-h-screen w-full flex-col justify-between bg-gradient-to-b from-slate-900/95 to-black/95 px-4 py-8 sm:px-8 md:px-12 lg:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col gap-8 md:gap-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <FooterHeader />
        <FooterNav />
      </motion.div>
      <FooterBottom />
    </motion.div>
  );
}

const FooterHeader = () => {
  return (
    <motion.div
      className="flex flex-col gap-6 md:gap-8"
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: 0.2 }}
    >
      <div className="flex flex-col gap-2 md:gap-4">
        <motion.h2
          className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
          variants={fadeInUp}
          transition={{ ...springTransition, delay: 0.3 }}
        >
          Ready to Create
        </motion.h2>
        <motion.h2
          className="bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
          variants={fadeInUp}
          transition={{ ...springTransition, delay: 0.4 }}
        >
          Something Amazing?
        </motion.h2>
      </div>
      <motion.p
        className="max-w-2xl text-base text-white/70 md:text-lg"
        variants={fadeInUp}
        transition={{ ...defaultTransition, delay: 0.5 }}
      >
        Transform your ideas into stunning UIs with AI. Join thousands of
        creators who are already building the future of web.
      </motion.p>
      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        variants={fadeInScale}
        transition={{ ...defaultTransition, delay: 0.6 }}
      >
        <motion.div
          whileHover={{
            y: -4,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
        >
          <Button
            as={Link}
            href="https://heroui.chat/"
            radius="full"
            size="lg"
            color="primary"
            className="border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            Start Generating
          </Button>
        </motion.div>
        <motion.div
          whileHover={{
            y: -4,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
        >
          <Button
            radius="full"
            variant="flat"
            size="lg"
            className="border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            as={Link}
            href="#community"
          >
            See Examples
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FooterNav = () => {
  return (
    <motion.div
      className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
    >
      <NavSection
        title="Product"
        links={[
          { text: "AI Generator", href: "https://heroui.chat/" },
          {
            text: "Component Library",
            href: "https://www.heroui.com/docs/guide/introduction",
          },
          { text: "Templates", href: "https://www.heroui.pro/components" },
          { text: "Pricing", href: "#pricing" },
        ]}
        index={0}
      />
      <NavSection
        title="Features"
        links={[
          { text: "Smart Generation", href: "https://heroui.chat/" },
          { text: "Code Export", href: "https://heroui.chat/" },
          { text: "Team Collaboration", href: "https://heroui.chat/" },
          { text: "Custom Domains", href: "https://heroui.chat/" },
        ]}
        index={1}
      />
      <NavSection
        title="Resources"
        links={[
          {
            text: "Documentation",
            href: "https://www.heroui.com/docs/guide/introduction",
          },
          { text: "Examples", href: "https://www.heroui.pro/components" },
          { text: "Tutorials", href: "https://heroui.chat/" },
          {
            text: "API Reference",
            href: "https://www.heroui.com/docs/guide/introduction",
          },
        ]}
        index={2}
      />
      <NavSection
        title="Community"
        links={[
          { text: "Discord", href: "https://discord.com/invite/9b6yyZKmH4" },
          { text: "GitHub", href: "https://github.com/heroui-inc/heroui" },
          { text: "Twitter", href: "https://x.com/hero_ui" },
          { text: "Support", href: "https://heroui.chat/" },
        ]}
        index={3}
      />
    </motion.div>
  );
};

const NavSection = ({
  title,
  links,
  index,
}: {
  title: string;
  links: { text: string; href: string }[];
  index: number;
}) => {
  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: index * 0.3, duration: 0.8 }}
    >
      <motion.h3
        className="border-b border-white/10 pb-2 text-sm font-semibold uppercase tracking-wider text-white/90"
        variants={staggerItem}
        transition={{ ...defaultTransition, duration: 0.8 }}
      >
        {title}
      </motion.h3>
      <motion.div
        className="flex flex-col gap-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {links.map((link, linkIndex) => (
          <motion.a
            key={linkIndex}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-sm text-white/60 transition-colors duration-200 hover:text-white/90"
            variants={staggerItem}
            transition={{
              ...defaultTransition,
              delay: linkIndex * 0.1,
              duration: 0.7,
            }}
            whileHover={{
              x: 4,
              transition: { duration: 0.2 },
            }}
          >
            {link.text}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

const FooterBottom = () => {
  return (
    <motion.div
      className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:mt-0 md:flex-row md:gap-8 md:pt-8"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ ...defaultTransition, delay: 1.0 }}
    >
      <motion.div
        className="flex flex-col items-center gap-4 md:flex-row md:gap-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center gap-2"
          variants={staggerItem}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <span className="text-xl font-bold text-white">HeroUI Chat</span>
        </motion.div>
        <motion.p
          className="text-center text-sm text-white/50 md:text-left"
          variants={staggerItem}
        >
          © 2024 HeroUI Chat. Powered by AI, built for creators.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row md:gap-6"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SocialLinks />
        <motion.div
          className="flex gap-4 text-sm text-white/50 md:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="transition-colors hover:text-white/80"
            variants={staggerItem}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            Privacy
          </motion.a>
          <motion.a
            href="#"
            className="transition-colors hover:text-white/80"
            variants={staggerItem}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            Terms
          </motion.a>
          <motion.a
            href="#"
            className="transition-colors hover:text-white/80"
            variants={staggerItem}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            AI Ethics
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SocialLinks = () => {
  const socials = [
    {
      name: "X (Twitter)",
      url: "https://x.com/hero_ui",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/heroui-inc/heroui",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      url: "https://discord.com/invite/9b6yyZKmH4",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      className="flex gap-3"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all duration-150 hover:border-white/20 hover:bg-white/10 hover:text-white/90"
          title={social.name}
          variants={staggerItem}
          whileHover={{
            scale: 1.05,
            y: -1,
            transition: { duration: 0.1, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.05 },
          }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};
