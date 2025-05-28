"use client";

import Content from "./Content";
import { Particles } from "./ui/Particles";

export default function Footer() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Content />

      {/* Background particles layer - subtle and slow */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        staticity={30}
        ease={120}
        size={0.3}
        color="#ffffff"
        vx={0.1}
        vy={-0.05}
        refresh
      />

      {/* Mid-layer particles - medium interaction */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={80}
        staticity={60}
        ease={80}
        size={0.6}
        color="#3b82f6"
        vx={-0.05}
        vy={0.02}
        refresh
      />

      {/* Foreground particles - highly interactive */}
      <Particles
        className="absolute inset-0 z-20"
        quantity={30}
        staticity={80}
        ease={40}
        size={1.2}
        color="#8b5cf6"
        vx={0.02}
        vy={-0.08}
        refresh
      />

      {/* Accent particles - floating upward effect */}
      <Particles
        className="z-5 absolute inset-0"
        quantity={25}
        staticity={20}
        ease={150}
        size={0.8}
        color="#06b6d4"
        vx={0}
        vy={-0.15}
        refresh
      />
    </div>
  );
}
