import React from "react";
import { Button } from "@heroui/button";

export default function Content() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-gradient-to-b from-slate-900/95 to-black/95 px-4 py-8 sm:px-8 md:px-12 lg:py-16">
      <div className="flex flex-col gap-8 md:gap-16">
        <FooterHeader />
        <FooterNav />
      </div>
      <FooterBottom />
    </div>
  );
}

const FooterHeader = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-2 md:gap-4">
        <h2 className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Let&apos;s Build Something
        </h2>
        <h2 className="bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Amazing Together
        </h2>
      </div>
      <p className="max-w-2xl text-base text-white/70 md:text-lg">
        Ready to transform your ideas into reality? Get in touch and let&apos;s
        create something extraordinary.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          radius="full"
          size="lg"
          color="primary"
          className="border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          Start a Project
        </Button>
        <Button
          radius="full"
          variant="flat"
          size="lg"
          className="border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
        >
          View Portfolio
        </Button>
      </div>
    </div>
  );
};

const FooterNav = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
      <NavSection
        title="Company"
        links={["About Us", "Our Mission", "Team", "Careers"]}
      />
      <NavSection
        title="Services"
        links={["Design", "Development", "Consulting", "Support"]}
      />
      <NavSection
        title="Resources"
        links={["Documentation", "Blog", "Case Studies", "Downloads"]}
      />
      <NavSection
        title="Connect"
        links={["Contact", "Newsletter", "Community", "Events"]}
      />
    </div>
  );
};

const NavSection = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="border-b border-white/10 pb-2 text-sm font-semibold uppercase tracking-wider text-white/90">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-sm text-white/60 transition-colors duration-200 hover:text-white/90"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:mt-0 md:flex-row md:gap-8 md:pt-8">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <span className="text-xl font-bold text-white">HeroUI</span>
        </div>
        <p className="text-center text-sm text-white/50 md:text-left">
          © 2024 HeroUI. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row md:gap-6">
        <SocialLinks />
        <div className="flex gap-4 text-sm text-white/50 md:gap-6">
          <a href="#" className="transition-colors hover:text-white/80">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-white/80">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-white/80">
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  const socials = [
    {
      name: "X (Twitter)",
      url: "https://x.com",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex gap-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white/90"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
