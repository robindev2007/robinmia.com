"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`apple-btn flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-zinc-600 dark:bg-white/[0.05] dark:text-zinc-200 ${className || ""}`}
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`apple-btn flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-zinc-600 transition-all duration-200 hover:scale-105 hover:bg-zinc-100 hover:text-zinc-950 active:scale-95 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white ${className || ""}`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

