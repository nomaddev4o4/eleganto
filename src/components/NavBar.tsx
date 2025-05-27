"use client";

import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { useEffect } from "react";

export default function NavBar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      // Update URL hash
      window.history.pushState(null, "", `#${sectionId}`);

      // Get navbar height for offset
      const navbar = document.querySelector('nav[data-slot="base"]');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;

      // Calculate position with offset
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);

      if (hash && (hash === "features" || hash === "pricing")) {
        // Delay to ensure page is loaded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navbar = document.querySelector('nav[data-slot="base"]');
            const navbarHeight = navbar
              ? navbar.getBoundingClientRect().height
              : 80;

            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300); // Increased delay for page load
      }
    };

    // Handle initial load with hash
    handleHashChange();

    // Listen for hash changes (back/forward navigation)
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <Navbar
      maxWidth="xl"
      className="backdrop-blur-navbar"
      classNames={{
        base: "bg-transparent",
        wrapper: "px-4 sm:px-6",
      }}
    >
      <NavbarBrand>
        <div className="flex items-end gap-2">
          <p className="text-over-gradient bg-gradient-to-b from-white/95 to-white/70 bg-clip-text text-3xl font-bold text-transparent drop-shadow-2xl">
            HeroUI
          </p>
          <Chip
            size="sm"
            className="mb-1 border border-white/20 bg-white/10 backdrop-blur-sm"
            classNames={{
              content: "text-white/90 font-medium",
            }}
          >
            chat
          </Chip>
        </div>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem
          as={Link}
          href="https://x.com/hero_ui/status/1894466374900019270"
          target="_blank"
          className="cursor-pointer text-white/70 transition-colors hover:text-white/90"
        >
          About
        </NavbarItem>

        <NavbarItem>
          <button
            onClick={() => scrollToSection("features")}
            className="font-inherit cursor-pointer border-none bg-transparent p-0 text-white/70 transition-colors hover:text-white/90"
          >
            Features
          </button>
        </NavbarItem>

        <NavbarItem>
          <button
            onClick={() => scrollToSection("pricing")}
            className="font-inherit cursor-pointer border-none bg-transparent p-0 text-white/70 transition-colors hover:text-white/90"
          >
            Pricing
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button
          radius="full"
          size="lg"
          className="border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
        >
          Get started
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
