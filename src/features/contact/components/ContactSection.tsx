"use client";

import React, { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { toast } from "sonner";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  FileText,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

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

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "robindev2007@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      description: email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mt-16 w-full max-w-3xl pb-16">
      <BlurFade delay={BLUR_FADE_DELAY * 15} yOffset={8} blur="6px">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-md sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          {/* Subtle glow accent in corner */}
          <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-zinc-200/40 blur-3xl dark:bg-zinc-800/30" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-semibold tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                Let&apos;s Connect
              </span>
              <h3 className="font-sans text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                Get In Touch
              </h3>
              <p className="max-w-xl font-sans text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                Whether you have an exciting full-stack opportunity, want to
                collaborate on an open-source project, or simply want to say hi —
                my inbox is always open.
              </p>
            </div>

            {/* Email Copy Card & Quick Links */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
              {/* Copy Email Pill Button */}
              <button
                onClick={handleCopyEmail}
                className="group flex flex-1 items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-left shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-900/90 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase dark:text-zinc-500">
                      Email Address
                    </span>
                    <span className="truncate font-mono text-[13px] font-medium text-zinc-900 dark:text-zinc-100">
                      {email}
                    </span>
                  </div>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-50 text-zinc-500 transition-colors group-hover:border-zinc-300 group-hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:text-white">
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </div>
              </button>

              {/* Direct Send Mail Button */}
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-[13px] font-medium tracking-wide text-white shadow-2xs transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Send Message</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <span className="mr-1 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                Elsewhere:
              </span>

              <a
                href="https://github.com/robindev2007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200/60 bg-white/50 px-3 py-1.5 font-mono text-[11px] text-zinc-600 transition-all hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
              >
                <GithubIcon className="h-3 w-3" />
                <span>GitHub</span>
                <ArrowUpRight className="h-2.5 w-2.5 text-zinc-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/robin2007/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200/60 bg-white/50 px-3 py-1.5 font-mono text-[11px] text-zinc-600 transition-all hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
              >
                <LinkedinIcon className="h-3 w-3" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-2.5 w-2.5 text-zinc-400" />
              </a>

              <a
                href="https://drive.google.com/file/d/1EWkgK6_jYxNCpK0hV3oBWIqGzW5UMe31/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200/60 bg-white/50 px-3 py-1.5 font-mono text-[11px] text-zinc-600 transition-all hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
              >
                <FileText className="h-3 w-3" />
                <span>Resume</span>
                <ArrowUpRight className="h-2.5 w-2.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            © 2026 Robin Mia. Crafted with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for projects
            </span>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

export default ContactSection;
