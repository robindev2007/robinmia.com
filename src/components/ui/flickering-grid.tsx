"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useRef } from "react";

export interface FlickeringGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

interface GridState {
  cols: number;
  rows: number;
  squares: Uint8Array;
  dpr: number;
  step: number;
  size: number;
  targetWidth: number;
  targetHeight: number;
}

const NUM_BUCKETS = 8;

function getComputedRgb(
  colorValue?: string,
  themeClass?: string,
): [number, number, number] {
  if (typeof window === "undefined") return [255, 255, 255];

  const isDark =
    themeClass !== undefined
      ? themeClass.includes("dark")
      : document.documentElement.classList.contains("dark");
  const fallback: [number, number, number] = isDark
    ? [255, 255, 255]
    : [24, 24, 27];

  const colorToResolve = colorValue || "var(--foreground)";
  let rawColor = colorToResolve;

  if (colorToResolve.startsWith("var(")) {
    const tempEl = document.createElement("div");
    tempEl.style.color = colorToResolve;
    tempEl.style.position = "absolute";
    tempEl.style.visibility = "hidden";
    document.body.appendChild(tempEl);
    rawColor = window.getComputedStyle(tempEl).color;
    document.body.removeChild(tempEl);
  }

  // Use 1x1 canvas to convert any CSS color function (oklch, hex, hsl, rgb) to true sRGB
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return fallback;

  ctx.fillStyle = rawColor;
  ctx.fillRect(0, 0, 1, 1);
  const data = ctx.getImageData(0, 0, 1, 1).data;

  // In dark mode if color resolved unexpectedly dark, ensure crisp visible white
  if (isDark && data[0] < 50 && data[1] < 50 && data[2] < 50) {
    return [255, 255, 255];
  }

  // In light mode if color resolved unexpectedly light, ensure dark charcoal
  if (!isDark && data[0] > 200 && data[1] > 200 && data[2] > 200) {
    return [24, 24, 27];
  }

  return [data[0], data[1], data[2]];
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color,
  width,
  height,
  className,
  maxOpacity = 0.3,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<GridState | null>(null);
  const isInViewRef = useRef(true);

  const themeClass = React.useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.className,
    () => "",
  );

  const resolvedRgb = useMemo(() => {
    return getComputedRgb(color, themeClass);
  }, [color, themeClass]);

  // Precompute discrete opacity strings so drawing requires 0 string allocations per frame
  const bucketColors = useMemo(() => {
    const [r, g, b] = resolvedRgb;
    return Array.from({ length: NUM_BUCKETS }, (_, i) => {
      const opacity = (i / (NUM_BUCKETS - 1)) * maxOpacity;
      return `rgba(${r}, ${g}, ${b}, ${opacity.toFixed(3)})`;
    });
  }, [resolvedRgb, maxOpacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let resizeRaf: number | null = null;
    let lastTime = 0;

    // Throttle animation to 30 FPS for battery efficiency and zero lag
    const TARGET_FPS = 30;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let lastFrameTimestamp = 0;

    const draw = (
      tw: number,
      th: number,
      cols: number,
      rows: number,
      squares: Uint8Array,
      step: number,
      size: number,
    ) => {
      ctx.clearRect(0, 0, tw, th);

      // Draw all squares bucketed by opacity in only 7 native batch fill calls
      for (let b = 1; b < NUM_BUCKETS; b++) {
        ctx.fillStyle = bucketColors[b];
        ctx.beginPath();
        for (let i = 0; i < cols; i++) {
          const x = Math.round(i * step);
          const colOffset = i * rows;
          for (let j = 0; j < rows; j++) {
            if (squares[colOffset + j] === b) {
              ctx.rect(x, Math.round(j * step), size, size);
            }
          }
        }
        ctx.fill();
      }
    };

    const updateCanvasSize = () => {
      const w = width || container.clientWidth;
      const h = height || container.clientHeight;
      if (w <= 0 || h <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetWidth = Math.round(w * dpr);
      const targetHeight = Math.round(h * dpr);

      const step = (squareSize + gridGap) * dpr;
      const size = Math.max(1, Math.round(squareSize * dpr));

      const cols = Math.floor(targetWidth / step);
      const rows = Math.floor(targetHeight / step);
      if (cols <= 0 || rows <= 0) return;

      const prev = gridRef.current;

      // Check if grid dimensions actually changed
      if (
        prev &&
        canvas.width === targetWidth &&
        canvas.height === targetHeight &&
        prev.cols === cols &&
        prev.rows === rows
      ) {
        draw(targetWidth, targetHeight, cols, rows, prev.squares, step, size);
        return;
      }

      // Preserve existing squares across resize to eliminate resize flashing
      const newSquares = new Uint8Array(cols * rows);
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const idx = c * rows + r;
          if (prev && c < prev.cols && r < prev.rows) {
            newSquares[idx] = prev.squares[c * prev.rows + r];
          } else {
            newSquares[idx] = Math.floor(Math.random() * NUM_BUCKETS);
          }
        }
      }

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      gridRef.current = {
        cols,
        rows,
        squares: newSquares,
        dpr,
        step,
        size,
        targetWidth,
        targetHeight,
      };

      draw(targetWidth, targetHeight, cols, rows, newSquares, step, size);
    };

    updateCanvasSize();

    const animate = (time: number) => {
      if (!isInViewRef.current || document.hidden) return;

      const elapsed = time - lastFrameTimestamp;
      if (elapsed < FRAME_INTERVAL) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimestamp = time - (elapsed % FRAME_INTERVAL);

      if (lastTime === 0) {
        lastTime = time;
      }
      const deltaTime = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const grid = gridRef.current;
      if (grid) {
        const {
          cols,
          rows,
          squares,
          targetWidth,
          targetHeight,
          step,
          size,
        } = grid;
        const total = cols * rows;

        // Number of squares to update this frame
        const changeRate = total * flickerChance * deltaTime;
        const count = Math.min(
          total,
          Math.floor(changeRate) + (Math.random() < changeRate % 1 ? 1 : 0),
        );

        for (let k = 0; k < count; k++) {
          const idx = Math.floor(Math.random() * total);
          squares[idx] = Math.floor(Math.random() * NUM_BUCKETS);
        }

        draw(targetWidth, targetHeight, cols, rows, squares, step, size);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (resizeRaf !== null) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        updateCanvasSize();
        resizeRaf = null;
      });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const wasInView = isInViewRef.current;
        isInViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !wasInView) {
          lastTime = 0;
          lastFrameTimestamp = performance.now();
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0 },
    );

    intersectionObserver.observe(canvas);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (isInViewRef.current) {
        lastTime = 0;
        lastFrameTimestamp = performance.now();
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (isInViewRef.current) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeRaf !== null) cancelAnimationFrame(resizeRaf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [
    bucketColors,
    width,
    height,
    squareSize,
    gridGap,
    maxOpacity,
    flickerChance,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none block h-full w-full"
      />
    </div>
  );
};

export function FlickeringGridHeader({
  className,
  squareSize = 2,
  gridGap = 1,
  maxOpacity = 0.22,
  flickerChance = 0.3,
}: {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  maxOpacity?: number;
  flickerChance?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 z-0 h-80 md:h-96 overflow-hidden",
        className,
      )}
    >
      <FlickeringGrid
        className="h-full w-full"
        squareSize={squareSize}
        gridGap={gridGap}
        maxOpacity={maxOpacity}
        flickerChance={flickerChance}
        style={{
          maskImage:
            "linear-gradient(to bottom, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default FlickeringGrid;
