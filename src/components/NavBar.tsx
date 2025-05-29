"use client";

import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";

export default function NavBar() {
  const navItems = [
    {
      label: "About",
      href: "https://x.com/hero_ui/status/1894466374900019270",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
  ];

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

      <NavbarContent justify="center" className="gap-11">
        {navItems.map((item) => (
          <NavbarItem
            as={Link}
            href={item.href}
            key={item.label}
            className="cursor-pointer text-white/70 transition-colors hover:text-white/90"
          >
            {item.label}
          </NavbarItem>
        ))}
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
