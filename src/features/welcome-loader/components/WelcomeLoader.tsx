"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const GREETINGS = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "Olá",
  "Salam",
  "नमस्ते",
  "Welcome",
];

interface WelcomeLoaderProps {
  onComplete?: () => void;
}

// Modern cinematic bezier curves
const SMOOTH_EXPAND_EASE = [0.19, 1, 0.22, 1] as const;
const HUMAN_EASE = [0.22, 1, 0.36, 1] as const;

export function WelcomeLoader({ onComplete }: WelcomeLoaderProps) {
  const [index, setIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const isFinalStep = index === GREETINGS.length - 1;

  useEffect(() => {
    if (!isFinalStep) {
      // Natural cadence through greeting translations
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 140);
      return () => clearTimeout(timer);
    } else {
      // Pause slightly on "Welcome" so it registers clearly
      const holdTimer = setTimeout(() => {
        setIsZooming(true);
      }, 350);

      return () => clearTimeout(holdTimer);
    }
  }, [index, isFinalStep]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          key="welcome-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.65,
              ease: HUMAN_EASE,
            },
          }}
          className="bg-background fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle ambient lighting */}
          <motion.div
            animate={
              isZooming
                ? {
                    scale: [1, 2.5],
                    opacity: [0.03, 0.08, 0],
                  }
                : { scale: 1, opacity: 0.03 }
            }
            transition={{ duration: 1.1, ease: SMOOTH_EXPAND_EASE }}
            className="bg-foreground pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-3xl"
          />

          {/* Word display container */}
          <div className="relative flex items-center justify-center">
            <motion.span
              key={isFinalStep ? "welcome-final" : index}
              initial={
                isFinalStep
                  ? { opacity: 0, y: 14, filter: "blur(4px)", scale: 1 }
                  : { opacity: 0, y: 12, filter: "blur(3px)", scale: 1 }
              }
              animate={
                isZooming
                  ? {
                      // Smoothly zooms to fill the screen with expanding letter-spacing, then gracefully dissolves
                      scale: [1, 2.8],
                      letterSpacing: ["-0.03em", "0.06em"],
                      opacity: [1, 1, 0],
                      filter: ["blur(0px)", "blur(0px)", "blur(12px)"],
                      transition: {
                        duration: 1.1,
                        times: [0, 0.55, 1],
                        ease: SMOOTH_EXPAND_EASE,
                      },
                    }
                  : {
                      scale: 1,
                      letterSpacing: "-0.03em",
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: isFinalStep ? 0.3 : 0.14,
                        ease: HUMAN_EASE,
                      },
                    }
              }
              onAnimationComplete={() => {
                if (isZooming) {
                  setIsFinished(true);
                }
              }}
              className="text-foreground origin-center px-6 text-center font-sans text-5xl leading-none font-extrabold whitespace-nowrap will-change-transform sm:text-7xl md:text-8xl"
            >
              {GREETINGS[index]}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
