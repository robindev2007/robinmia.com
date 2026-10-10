"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import {
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  FileText,
  Copy,
  Moon,
  Sun,
  Laptop,
  ExternalLink,
  Search,
  ArrowUp,
  Share2,
  Send,
} from "lucide-react";

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

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("robindev2007@gmail.com");
    toast.success("Email copied to clipboard!", {
      description: "robindev2007@gmail.com",
    });
  };

  const copyPortfolioUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Portfolio link copied to clipboard!", {
      description: window.location.href,
    });
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setOpen(true)}
          className="apple-btn group flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-medium text-zinc-600 shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-zinc-950 active:scale-95 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
        >
          <Search className="h-3.5 w-3.5 text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-white" />
          <span>Quick Menu</span>
          <kbd className="flex h-5 items-center gap-0.5 rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
            <span className="text-[11px]">⌘</span>K
          </kbd>
        </button>
      </div>

      {/* Command Dialog */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-2xl transition-transform animate-in zoom-in-95 duration-150 dark:border-zinc-800 dark:bg-[#121212]"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="flex flex-col">
              <div className="flex items-center border-b border-zinc-200/80 px-3.5 dark:border-zinc-800">
                <Search className="mr-2.5 h-4 w-4 shrink-0 text-zinc-400" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="flex h-11 w-full rounded-md bg-transparent py-2.5 text-[13.5px] text-zinc-900 outline-hidden placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                  autoFocus
                />
                <kbd className="hidden rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 sm:inline-block dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-500">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-96 overflow-y-auto p-1.5 outline-hidden">
                <Command.Empty className="py-5 text-center text-[13px] text-zinc-500 dark:text-zinc-400">
                  No results found.
                </Command.Empty>

                {/* Navigation Group */}
                <Command.Group
                  heading="Navigation"
                  className="px-1 py-1 text-[10.5px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-0.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400"
                >
                  <Command.Item
                    onSelect={() => runCommand(() => scrollToSection("top"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <User className="h-4 w-4 text-zinc-400" />
                    <span>Hero &amp; About (Top)</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => scrollToSection("experience"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Briefcase className="h-4 w-4 text-zinc-400" />
                    <span>Work Experience</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => scrollToSection("skills"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Code2 className="h-4 w-4 text-zinc-400" />
                    <span>Skills &amp; Tech Stack</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => scrollToSection("projects"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <FolderGit2 className="h-4 w-4 text-zinc-400" />
                    <span>Featured Projects</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => scrollToSection("contact"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Mail className="h-4 w-4 text-zinc-400" />
                    <span>Contact / Get in touch</span>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="my-1 h-px bg-zinc-100 dark:bg-zinc-800/70" />

                {/* Quick Actions Group */}
                <Command.Group
                  heading="Quick Actions"
                  className="px-1 py-1 text-[10.5px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-0.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400"
                >
                  <Command.Item
                    onSelect={() => runCommand(copyEmail)}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span>Copy Email Address</span>
                    <span className="ml-auto font-mono text-[11px] text-zinc-400">robindev2007@gmail.com</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(copyPortfolioUrl)}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Share2 className="h-4 w-4 text-zinc-400" />
                    <span>Copy Portfolio Link</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() =>
                      runCommand(() => {
                        window.location.href = "mailto:robindev2007@gmail.com";
                      })
                    }
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Send className="h-4 w-4 text-zinc-400" />
                    <span>Send Email directly</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() =>
                      runCommand(() => {
                        window.open(
                          "https://drive.google.com/file/d/1EWkgK6_jYxNCpK0hV3oBWIqGzW5UMe31/view?usp=drive_link",
                          "_blank"
                        );
                      })
                    }
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <FileText className="h-4 w-4 text-zinc-400" />
                    <span>Download / View Resume</span>
                    <ExternalLink className="ml-auto h-3 w-3 text-zinc-400" />
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => scrollToSection("top"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <ArrowUp className="h-4 w-4 text-zinc-400" />
                    <span>Scroll to Top</span>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="my-1 h-px bg-zinc-100 dark:bg-zinc-800/70" />

                {/* Socials Group */}
                <Command.Group
                  heading="Socials &amp; Profiles"
                  className="px-1 py-1 text-[10.5px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-0.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400"
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open("https://github.com/robindev2007", "_blank")
                      )
                    }
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <GithubIcon className="h-4 w-4 text-zinc-400" />
                    <span>GitHub (@robindev2007)</span>
                    <ExternalLink className="ml-auto h-3 w-3 text-zinc-400" />
                  </Command.Item>

                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open(
                          "https://www.linkedin.com/in/robin2007/",
                          "_blank"
                        )
                      )
                    }
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <LinkedinIcon className="h-4 w-4 text-zinc-400" />
                    <span>LinkedIn (/in/robin2007)</span>
                    <ExternalLink className="ml-auto h-3 w-3 text-zinc-400" />
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="my-1 h-px bg-zinc-100 dark:bg-zinc-800/70" />

                {/* Theme Group */}
                <Command.Group
                  heading="Theme Preferences"
                  className="px-1 py-1 text-[10.5px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-0.5 [&_[cmdk-group-heading]]:text-[10.5px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400"
                >
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("light"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Sun className="h-4 w-4 text-zinc-400" />
                    <span>Light Mode</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("dark"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Moon className="h-4 w-4 text-zinc-400" />
                    <span>Dark Mode</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("system"))}
                    className="flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-zinc-700 outline-hidden transition-colors aria-selected:bg-zinc-100 aria-selected:text-zinc-950 dark:text-zinc-300 dark:aria-selected:bg-zinc-800/90 dark:aria-selected:text-white"
                  >
                    <Laptop className="h-4 w-4 text-zinc-400" />
                    <span>System Theme</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
