"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import CustomAccordion from "../custom-heroui-components/CusotmAccordion";
import CustomCheckboxGroup from "../custom-heroui-components/CustomCheckboxGroup";
import { Chip } from "@heroui/chip";
import { DatePicker } from "@heroui/date-picker";
import { Pagination } from "@heroui/pagination";
import CustomProgressBar from "../custom-heroui-components/CustomProgressBar";
import CustomCircularProgressBar from "../custom-heroui-components/CustomCircularProgressBar";
import { Snippet } from "@heroui/snippet";
import { Spinner } from "@heroui/spinner";
import { Switch } from "@heroui/switch";
import { Tab, Tabs } from "@heroui/tabs";
import { addToast } from "@heroui/toast";
import Link from "next/link";
import { User } from "@heroui/user";

// Animation variants for different components
const animations = {
  float: "animate-[float_3s_ease-in-out_infinite]",
  floatDelay1: "animate-[float_3s_ease-in-out_infinite_0.5s]",
  floatDelay2: "animate-[float_3s_ease-in-out_infinite_1s]",
  floatDelay3: "animate-[float_3s_ease-in-out_infinite_1.5s]",
  floatDelay4: "animate-[float_3s_ease-in-out_infinite_2s]",
  bounce: "animate-[bounce_2s_ease-in-out_infinite]",
  bounceDelay1: "animate-[bounce_2s_ease-in-out_infinite_0.3s]",
  bounceDelay2: "animate-[bounce_2s_ease-in-out_infinite_0.6s]",
  pulse: "animate-[pulse_2.5s_ease-in-out_infinite]",
  pulseDelay1: "animate-[pulse_2.5s_ease-in-out_infinite_0.8s]",
} as const;

// Position type definition
interface Position {
  top: string;
  left?: string;
  right?: string;
  animation: string;
}

// Component positioning configurations
const componentPositions: Position[] = [
  // Top row - scattered across width
  { top: "8%", left: "5%", animation: animations.float }, // Card image
  { top: "12%", left: "50%", animation: animations.floatDelay1 }, // Button
  { top: "26%", left: "55%", animation: animations.bounceDelay1 }, // Chip

  // Second row - more spread out
  { top: "55%", right: "0%", animation: animations.bounce }, // Accordion
  { top: "32%", right: "25%", animation: animations.pulseDelay1 }, // Circular Progress
  { top: "65%", left: "65%", animation: animations.floatDelay2 }, // Spinner

  // Third row - center and sides
  { top: "10%", left: "25%", animation: animations.pulse }, // Checkbox Group
  { top: "20%", left: "28%", animation: animations.floatDelay3 }, // Snippet
  { top: "42%", right: "12%", animation: animations.bounceDelay2 }, // Switch (inline)

  // Fourth row - lower section
  { top: "22%", right: "10%", animation: animations.floatDelay4 }, // Date Picker
  { top: "12%", right: "15%", animation: animations.floatDelay1 }, // Toast Button (inline)
  { top: "55%", left: "5%", animation: animations.bounceDelay1 }, // Progress Bar

  // Bottom row - final elements
  { top: "38%", left: "12%", animation: animations.pulseDelay1 }, // Pagination
  { top: "75%", right: "28%", animation: animations.floatDelay1 }, // User (inline)
  { top: "68%", left: "10%", animation: animations.bounce }, // Tabs
];

// Reusable positioned component wrapper
interface PositionedComponentProps {
  position: Position;
  children: React.ReactNode;
  className?: string;
}

const PositionedComponent = ({
  position,
  children,
  className = "",
}: PositionedComponentProps) => (
  <div
    className={`absolute ${position.animation} ${className}`}
    style={{
      top: position.top,
      left: position.left,
      right: position.right,
    }}
  >
    {children}
  </div>
);

export default function ComponentsGroup() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.02);
          }
        }
      `}</style>

      <div className="relative min-h-screen w-full overflow-hidden">
        <PositionedComponent position={componentPositions[0]}>
          <Card isFooterBlurred className="w-fit border-none" radius="lg">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://heroui.com/images/hero-card.jpeg"
              width={200}
            />
            <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="bg-black/20 text-tiny text-white"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </PositionedComponent>

        <PositionedComponent position={componentPositions[1]}>
          <Button size="lg" color="primary">
            Hola Amigo
          </Button>
        </PositionedComponent>

        <PositionedComponent position={componentPositions[2]}>
          <Chip>Astalavista</Chip>
        </PositionedComponent>

        <PositionedComponent position={componentPositions[3]}>
          <CustomAccordion />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[4]}>
          <CustomCircularProgressBar />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[5]}>
          <Spinner />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[6]}>
          <CustomCheckboxGroup />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[7]}>
          <Snippet color="primary">npm install @heroui/react</Snippet>
        </PositionedComponent>

        <PositionedComponent position={componentPositions[8]}>
          <Switch defaultSelected aria-label="Automatic updates" />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[9]}>
          <DatePicker
            showMonthAndYearPickers
            label="Birth Date"
            variant="bordered"
            color="primary"
            className="w-[200px]"
          />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[10]}>
          <Button
            color="primary"
            variant="shadow"
            onPress={() =>
              addToast({
                title: "Toast title",
                description: "Toast displayed successfully",
                color: "primary",
              })
            }
          >
            Get a fresh toast
          </Button>
        </PositionedComponent>

        <PositionedComponent position={componentPositions[11]}>
          <CustomProgressBar />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[12]}>
          <Pagination initialPage={1} total={10} />
        </PositionedComponent>

        <PositionedComponent position={componentPositions[13]}>
          <User
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
            description={<Link href="https://x.com/jrgarciadev">@theceo</Link>}
            name="Junior Garcia"
          />
        </PositionedComponent>

        <PositionedComponent
          position={componentPositions[14]}
          className="max-w-md"
        >
          <Tabs aria-label="Options" variant="underlined" color="primary">
            <Tab key="photos" title="Photos">
              <Card isBlurred>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  laboris nisi ut aliquip ex ea commodo.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card isBlurred>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card isBlurred>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </PositionedComponent>
      </div>
    </>
  );
}
