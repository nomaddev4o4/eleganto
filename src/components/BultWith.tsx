import ComponentsGroup from "./ui/ComponentsGroup";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BultWith() {
  return (
    <div className="relative mx-auto h-screen max-w-screen-xl">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <h1 className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-4xl font-bold text-transparent drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
          Built on top
        </h1>
        <h2 className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-4xl font-bold text-transparent drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
          HeroUI
        </h2>
        <p className="text-over-gradient mt-4 bg-gradient-to-b from-white/80 to-white/40 bg-clip-text text-lg font-medium text-transparent drop-shadow-lg sm:text-xl md:text-2xl">
          Open source UI library
        </p>
        <motion.div
          className="mx-auto mt-6 w-fit"
          whileHover={{
            y: -4,
            scale: 1.02,
            transition: {
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.15 },
          }}
        >
          <Button
            as={Link}
            target="_blank"
            href="https://heroui.com"
            radius="full"
            size="lg"
            color="primary"
            className="w-fit border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            Check out the library
          </Button>
        </motion.div>
      </div>
      <ComponentsGroup />
    </div>
  );
}
