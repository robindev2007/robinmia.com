"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_ITEMS = [
  { label: "About", href: "/#top" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "People", href: "/network" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const glassMapRef = useRef<SVGFEImageElement>(null);

  const close = () => setOpen(false);

  // Click outside to close mobile menu
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (headerRef.current && !headerRef.current.contains(target)) {
        close();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  // Liquid glass map updater & scroll detection
  useEffect(() => {
    let mapTimer: NodeJS.Timeout;
    const generateMap = () => {
      if (!navRef.current || !glassMapRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      const w = Math.max(rect.width, 100);
      const h = Math.max(rect.height, 40);

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const grad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.max(w, h) / 2
      );
      grad.addColorStop(0, "#808080");
      grad.addColorStop(0.7, "#909090");
      grad.addColorStop(1, "#a0a0a0");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      glassMapRef.current.setAttribute("href", canvas.toDataURL());
    };

    const scheduleGlassMap = () => {
      clearTimeout(mapTimer);
      mapTimer = setTimeout(generateMap, 100);
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && navRef.current) {
      resizeObserver = new ResizeObserver(scheduleGlassMap);
      resizeObserver.observe(navRef.current);
    }

    const condenseOn = 70;
    const condenseOff = 25;
    let isCondensed = false;
    let ticking = false;

    const handleScroll = () => {
      ticking = false;
      const y = window.scrollY;
      if (!isCondensed && y > condenseOn) {
        isCondensed = true;
        setCondensed(true);
        scheduleGlassMap();
      } else if (isCondensed && y < condenseOff) {
        isCondensed = false;
        setCondensed(false);
        scheduleGlassMap();
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(mapTimer);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleGlassMap);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Keyboard escape & resize handlers
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 991px)");
    const closeOnDesktop = () => {
      if (!mql.matches) close();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    mql.addEventListener("change", closeOnDesktop);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      mql.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const navLinks = (
    <>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={close}
          className="flex items-center justify-center py-1.5 text-xs font-medium tracking-wide text-zinc-600 transition-colors duration-200 hover:text-zinc-950 sm:text-sm dark:text-zinc-300/80 dark:hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  const socialLinks = (
    <div className="flex items-center gap-2">
      <Link
        href="https://github.com/robindev2007"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="apple-btn flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-zinc-600 transition-all duration-200 hover:scale-105 hover:bg-zinc-100 hover:text-zinc-950 active:scale-95 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
      >
        <GithubIcon className="h-4 w-4" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/robin2007/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="apple-btn flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-zinc-600 transition-all duration-200 hover:scale-105 hover:bg-blue-500/15 hover:text-blue-500 active:scale-95 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-blue-500/15 dark:hover:text-blue-400"
      >
        <LinkedinIcon className="h-4 w-4" />
      </Link>

      <Link
        href="mailto:robindev2007@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Robin"
        className="apple-btn flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-zinc-600 transition-all duration-200 hover:scale-105 hover:bg-emerald-500/15 hover:text-emerald-500 active:scale-95 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-emerald-500/15 dark:hover:text-emerald-400"
      >
        <Mail className="h-4 w-4" />
      </Link>

      <Link
        href="https://drive.google.com/file/d/1EWkgK6_jYxNCpK0hV3oBWIqGzW5UMe31/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        className="apple-btn hidden sm:flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 transition-all duration-200 hover:scale-105 hover:text-zinc-950 active:scale-95 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:text-white"
      >
        <FileText className="h-3.5 w-3.5" />
        <span>Resume</span>
        <ArrowUpRight className="h-3 w-3 opacity-60" />
      </Link>

      {/* Theme Toggle Button */}
      <ThemeToggle />
    </div>
  );

  const renderNavContent = () => (
    <div className="flex items-center justify-between gap-4 px-3 py-1 sm:px-4">
      {/* Brand Logo & Name */}
      <Link href="/" className="flex shrink-0 items-center gap-2.5 py-1">
        <div className="apple-btn relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-zinc-100 shadow-2xs dark:bg-zinc-800">
          <Image
            src="/robin.jpg"
            alt="Robin Mia"
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
        <span className="font-sans text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
          Robin Mia
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav
        aria-label="Main Navigation"
        className="hidden items-center gap-5 md:flex xl:gap-6"
      >
        {navLinks}
      </nav>

      {/* Desktop Right Social/Contact Options */}
      <div className="hidden items-center md:flex">{socialLinks}</div>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.25 border-0 bg-transparent p-0 focus:outline-hidden md:hidden"
      >
        <div
          className={`h-0.5 w-5 rounded-full bg-zinc-800 dark:bg-white transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <div
          className={`h-0.5 w-5 rounded-full bg-zinc-800 dark:bg-white transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`h-0.5 w-5 rounded-full bg-zinc-800 dark:bg-white transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-2.5 transition-all duration-300 md:px-8"
      >
        {/* SVG Liquid Glass Filter Definition with Chromatic Aberration Split */}
        <svg
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          style={{ position: "absolute", width: 0, height: 0 }}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter id="nav-liquid-glass" colorInterpolationFilters="sRGB">
              <feImage
                ref={glassMapRef}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                result="map"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                xChannelSelector="R"
                yChannelSelector="B"
                scale="-50"
                result="dispRed"
              />
              <feColorMatrix
                in="dispRed"
                type="matrix"
                values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                result="red"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                xChannelSelector="R"
                yChannelSelector="B"
                scale="-47"
                result="dispGreen"
              />
              <feColorMatrix
                in="dispGreen"
                type="matrix"
                values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
                result="green"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                xChannelSelector="R"
                yChannelSelector="B"
                scale="-44"
                result="dispBlue"
              />
              <feColorMatrix
                in="dispBlue"
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
                result="blue"
              />
              <feBlend in="red" in2="green" mode="screen" result="rg" />
              <feBlend in="rg" in2="blue" mode="screen" result="output" />
              <feGaussianBlur in="output" stdDeviation="0.7" />
            </filter>
          </defs>
        </svg>

        <div className="relative mx-auto w-full max-w-[1040px]">
          {/* Crystal Liquid Glass Bar on Scroll */}
          <div
            ref={navRef}
            className={`relative border-0 transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
              condensed
                ? "rounded-full bg-zinc-900/[0.04] px-2 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.03)] dark:bg-white/[0.05] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_16px_48px_rgba(0,0,0,0.25)]"
                : "rounded-none bg-transparent shadow-none"
            }`}
            style={
              condensed
                ? {
                    WebkitBackdropFilter:
                      "url(#nav-liquid-glass) blur(8px) saturate(1.4)",
                    backdropFilter:
                      "url(#nav-liquid-glass) blur(8px) saturate(1.4)",
                  }
                : {
                    WebkitBackdropFilter: "none",
                    backdropFilter: "none",
                  }
            }
          >
            {renderNavContent()}
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <div className="animate-in fade-in-0 zoom-in-95 absolute top-full right-0 left-0 z-50 mt-2 duration-200 md:hidden">
              <nav
                aria-label="Mobile Navigation"
                className="flex flex-col gap-3 rounded-2xl border-0 bg-white/80 p-5 shadow-[0_16px_48px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.06)] dark:bg-white/[0.06] dark:shadow-[0_16px_48px_rgba(0,0,0,0.75),0_8px_24px_rgba(0,0,0,0.4)]"
                style={{
                  WebkitBackdropFilter:
                    "url(#nav-liquid-glass) blur(12px) saturate(1.5)",
                  backdropFilter:
                    "url(#nav-liquid-glass) blur(12px) saturate(1.5)",
                }}
              >
                <div className="flex flex-col gap-1">
                  {navLinks}
                </div>

                <div className="mt-1 flex items-center justify-center pt-2">
                  {socialLinks}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;

