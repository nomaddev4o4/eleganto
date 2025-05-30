"use client";

import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      label: "Community",
      href: "#community",
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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      className="sticky top-0 z-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <Navbar
        maxWidth="xl"
        className="backdrop-blur-navbar"
        classNames={{
          base: "bg-transparent",
          wrapper: "px-4 sm:px-6",
        }}
        position="sticky"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <motion.div
              className="flex items-end gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
              }}
            >
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
            </motion.div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center" className="hidden gap-11 sm:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3 + index * 0.1,
              }}
            >
              <NavbarItem
                as={Link}
                href={item.href}
                className="cursor-pointer text-white/70 transition-colors hover:text-white/90"
              >
                {item.label}
              </NavbarItem>
            </motion.div>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
            whileHover={{
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
              className="border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
              as={Link}
              href="https://heroui.chat/"
              target="_blank"
            >
              Get started
            </Button>
          </motion.div>
        </NavbarContent>

        <NavbarMenu className="gap-9 pt-10">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <p className="text-5xl">
                <Link
                  className="w-full"
                  href={item.href}
                  onClick={handleMenuItemClick}
                >
                  {item.label}
                </Link>
              </p>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
