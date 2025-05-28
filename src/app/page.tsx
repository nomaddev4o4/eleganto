// "use client";

import BultWith from "@/components/BultWith";
import CommunityUseCases from "@/components/CommunityUseCases";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
// import { features } from "./features.constants";
// import { Card } from "@heroui/card";
// import { cn } from "@heroui/theme";
// import { Button } from "@heroui/button";
// import useMousePosition from "@/hooks/useMousePosition";
// import useIsMobile from "@/hooks/useIsMobile";
// import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { useState } from "react";

export default function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  // const { x, y } = useMousePosition();
  // const isMobile = useIsMobile();
  // const size = isHovered ? 400 : 40;

  // const container = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "start start"],
  // });

  // const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <>
      <HeroSection />
      <Features />
      <BultWith />
      <CommunityUseCases />
      <TestimonialSection />
      <PricingSection />
      <Footer />

      {/* <main className="h-screen">
        {!isMobile && (
          <motion.div
            className="absolute z-[100] flex h-full w-full cursor-default items-center justify-center bg-[#ec4e39] text-[64px] leading-[66px] text-[#afa18f] [mask-image:url('/mask.svg')] [mask-repeat:no-repeat]"
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut" }}
          >
            <p
              className="w-[1000px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              A visual designer - with skills that haven&apos;t been replaced by
              A.I (yet) - making good shit only if the paycheck is equally good.
            </p>
          </motion.div>
        )}

        <div className="flex h-full w-full cursor-default items-center justify-center text-[64px] leading-[66px] text-[#afa18f]">
          <p className="w-[1000px]">
            I&apos;m a{" "}
            <span className="text-[#ec4e39]">selectively skilled</span> product
            designer with strong focus on producing high quality & impactful
            digital experiences.
          </p>
        </div>
      </main> */}
    </>
  );
}
