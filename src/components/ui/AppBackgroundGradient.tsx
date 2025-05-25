"use client";
import { cn } from "@heroui/theme";
import { useEffect, useRef, useState, useCallback } from "react";

export const AppBackgroundGradient = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  interactive = true,
  className,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  interactive?: boolean;
  className?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Use refs for animation values to avoid re-renders
  const curX = useRef<number>(0);
  const curY = useRef<number>(0);
  const tgX = useRef<number>(0);
  const tgY = useRef<number>(0);

  // Set CSS custom properties on the container instead of document.body
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.setProperty(
        "--gradient-background-start",
        gradientBackgroundStart,
      );
      container.style.setProperty(
        "--gradient-background-end",
        gradientBackgroundEnd,
      );
      container.style.setProperty("--first-color", firstColor);
      container.style.setProperty("--second-color", secondColor);
      container.style.setProperty("--third-color", thirdColor);
      container.style.setProperty("--fourth-color", fourthColor);
      container.style.setProperty("--fifth-color", fifthColor);
      container.style.setProperty("--pointer-color", pointerColor);
      container.style.setProperty("--size", size);
      container.style.setProperty("--blending-value", blendingValue);
    }
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // Animation loop using requestAnimationFrame
  const animate = useCallback(() => {
    if (!interactiveRef.current) {
      return;
    }

    curX.current = curX.current + (tgX.current - curX.current) / 20;
    curY.current = curY.current + (tgY.current - curY.current) / 20;

    interactiveRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`;

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  // Start animation loop
  useEffect(() => {
    if (interactive) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, interactive]);

  // Global mouse move handler for the entire window
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        tgX.current = event.clientX - rect.left;
        tgY.current = event.clientY - rect.top;
      }
    };

    // Add event listener to the window to capture all mouse movements
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Fixed positioning to cover entire viewport without affecting document flow
        "fixed inset-0 -z-10",
        // Background gradient using CSS custom properties
        "bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        // Allow pointer events to pass through to content
        "pointer-events-none",
        className,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]",
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_1)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`,
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`,
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `-left-1/2 -top-1/2 h-full w-full [mix-blend-mode:var(--blending-value)]`,
              `opacity-70`,
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
