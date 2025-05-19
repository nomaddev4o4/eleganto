import { Button } from "@heroui/button";

export default function HeroSection() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-6xl">
          Craft UI that feels <br /> as good as they look
        </p>
        <div className="flex gap-4">
          <Button radius="full" size="lg">
            Get Started
          </Button>
          <Button radius="full" variant="flat" size="lg">
            Know More
          </Button>
        </div>
      </div>
    </main>
  );
}
