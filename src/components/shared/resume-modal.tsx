"use client";

import React, { useEffect, useState, useCallback } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { sound } from "@/lib/sound";

export function openResumeModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-resume-modal"));
  }
}

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    sound.playOpen();
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sound.playClick();
  }, []);

  useEffect(() => {
    const onOpenEvent = () => handleOpen();
    window.addEventListener("open-resume-modal", onOpenEvent);
    return () => window.removeEventListener("open-resume-modal", onOpenEvent);
  }, [handleOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Blurred Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 animate-in zoom-in-95 dark:border-white/10 dark:bg-zinc-900/95">
        {/* macOS-style Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-200/80 px-4 py-3 dark:border-white/10">
          <div className="flex items-center gap-2">
            {/* Window Traffic Lights */}
            <div className="flex items-center gap-1.5 pr-2">
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="h-3 w-3 rounded-full bg-red-500/80 transition-transform hover:scale-110 active:scale-95"
              />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <FileText className="h-4 w-4 text-zinc-500 shrink-0 dark:text-zinc-400" />
              <span
                id="resume-modal-title"
                className="truncate font-mono text-[12.5px] font-medium text-zinc-800 dark:text-zinc-200"
              >
                MD Robin Mia - Resume.pdf
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="Open in new tab"
              className="apple-btn flex items-center gap-1.5 rounded-lg bg-zinc-100/80 px-2.5 py-1.5 font-mono text-[11px] font-medium text-zinc-600 transition-all hover:bg-zinc-200 hover:text-zinc-950 active:scale-95 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <a
              href="/resume.pdf"
              download="MD_Robin_Mia_Resume.pdf"
              onClick={() => sound.playSuccess()}
              title="Download PDF"
              className="apple-btn-primary flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 font-mono text-[11px] font-medium text-white shadow-2xs transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="apple-btn ml-1 flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* PDF Document Viewer Frame */}
        <div className="relative flex-1 w-full bg-zinc-100/50 dark:bg-zinc-950/50">
          <iframe
            src="/resume.pdf#view=FitH&toolbar=0"
            className="h-full w-full border-0"
            title="Resume PDF Preview"
          />

          {/* Mobile Fallback bar */}
          <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center sm:hidden">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto apple-btn-primary flex items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2 font-mono text-[12px] font-medium text-white shadow-lg backdrop-blur-md dark:bg-white/90 dark:text-zinc-950"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open Fullscreen PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

