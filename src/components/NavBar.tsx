"use client";

import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import { Tab, Tabs } from "@heroui/tabs";

export default function NavBar() {
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
          <p className="text-over-gradient text-3xl">HeroUI</p>
          <Chip size="sm" className="mb-1">
            chat
          </Chip>
        </div>
      </NavbarBrand>

      <NavbarContent justify="center">
        <Tabs size="lg" radius="full">
          <Tab title="Home" />
          <Tab title="About" />
          <Tab title="Contact" />
        </Tabs>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button radius="full">Get started</Button>
      </NavbarContent>
    </Navbar>
  );
}
