import { Button } from "@heroui/button";

export default function HeroSection() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-28">
        <p className="text-over-gradient bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-8xl font-medium text-transparent drop-shadow-2xl">
          Design. <br />
          Describe. <br />
          Deploy.
        </p>
        <div className="flex gap-4">
          <Button
            radius="full"
            size="lg"
            color="primary"
            className="border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            Get Started
          </Button>
          <Button
            radius="full"
            variant="flat"
            size="lg"
            className="border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            Know More
          </Button>
        </div>
      </div>
    </main>
  );
}
