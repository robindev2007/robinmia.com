import React from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface SkillItem {
  name: string;
  icon: string;
  invertInDark?: boolean;
  invertInLight?: boolean;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: "Shakil Education Group - SEG",
    role: "Software Engineer, Backend Focused",
    period: "Dec 2025 - Present",
    logo: "/companies/seg.png",
  },
  {
    company: "SM Technology - Betopia Group",
    role: "Software Engineer, Team Lead",
    period: "Apr 2024 - Dec 2025",
    logo: "/companies/smt.png",
  },
  {
    company: "IRD Foundation - IRDF",
    role: "Full Stack Software Engineer",
    period: "Jan 2024 - Apr 2024",
    logo: "/companies/irdf.png",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Resumix",
    description:
      "Client-side Next.js resume builder with live multi-template preview, AI copilot assistance, and pixel-perfect A4 PDF export.",
    image: "/projects/resumix.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Copilot", "jsPDF"],
    githubUrl: "https://github.com/robindev2007/resumix",
  },
  {
    title: "Video Call App",
    description:
      "Real-time peer-to-peer video conferencing application with WebRTC, Socket.IO signaling, low-latency stream management, and screen sharing.",
    image: "/projects/videocall.png",
    tags: ["React", "Node.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/robindev2007/video-call",
  },
  {
    title: "Zanime",
    description:
      "High-performance anime streaming platform featuring dynamic episode indexing, fast search filtering, schedule tracking, and custom video controls.",
    image: "/projects/zanime.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/robindev2007",
  },
  {
    title: "Keeper Workspace",
    description:
      "Minimalist collaborative note-taking and task organization workspace with rich Markdown support, tag categorization, and cloud persistence.",
    image: "/projects/keeper.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/robindev2007/keeper-app",
  },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Python", icon: "/icons/python.svg" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg", invertInDark: true },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: "/icons/express.svg", invertInDark: true },
      { name: "Nest.js", icon: "/icons/nestjs.svg" },
    ],
  },
  {
    title: "CSS Preprocessors",
    skills: [
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "shadcn/ui", icon: "/icons/shadcn.svg", invertInDark: true },
      { name: "Redux", icon: "/icons/redux.svg" },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "TanStack Router", icon: "/icons/tanstack.svg" },
      { name: "TanStack Query", icon: "/icons/tanstack.svg" },
      { name: "Zod", icon: "/icons/zod.svg" },
      { name: "Vite", icon: "/icons/vite.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
      { name: "Cursor", icon: "/icons/cursor.svg", invertInDark: true },
      { name: "Zed", icon: "/icons/zed.svg", invertInDark: true },
      { name: "FramerMotion", icon: "/icons/framer.svg", invertInDark: true },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express.js", icon: "/icons/express.svg", invertInDark: true },
      { name: "Nest.js", icon: "/icons/nestjs.svg" },
      { name: "Laravel", icon: "/icons/laravel.svg" },
      { name: "Elysia.js", icon: "/icons/elysia.svg" },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Supabase", icon: "/icons/supabase.svg" },
      { name: "Neon", icon: "/icons/neon.svg" },
      { name: "Prisma ORM", icon: "/icons/prisma.svg", invertInDark: true },
      { name: "Drizzle ORM", icon: "/icons/drizzle.svg", invertInDark: true },
      { name: "Sequelize", icon: "/icons/sequelize.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
    ],
  },
  {
    title: "Hosting",
    skills: [
      { name: "Vercel", icon: "/icons/vercel.svg", invertInDark: true },
      { name: "Render", icon: "/icons/render.svg", invertInDark: true },
      { name: "Netlify", icon: "/icons/netlify.svg" },
      { name: "Hostinger", icon: "/icons/hostinger.svg" },
      { name: "Digital Ocean", icon: "/icons/digitalocean.svg" },
    ],
  },
  {
    title: "Coder Related",
    skills: [
      { name: "Antigravity", icon: "/icons/antigravity.svg" },
      { name: "Copilot", icon: "/icons/copilot.svg", invertInDark: true },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Deep Seek", icon: "/icons/deepseek.svg" },
      { name: "Claude", icon: "/icons/claude.svg" },
    ],
  },
  {
    title: "Designer Related",
    skills: [{ name: "Figma", icon: "/icons/figma.svg" }],
  },
];

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="top" className="relative z-10 w-full max-w-3xl px-4 py-8 sm:px-8 sm:py-16 scroll-mt-24">
      <div className="flex flex-col items-start justify-start gap-6 sm:flex-row sm:gap-10">
        {/* Avatar & Identity */}
        <BlurFade delay={BLUR_FADE_DELAY} yOffset={8} blur="6px">
          <div className="flex w-full shrink-0 flex-row items-center gap-4 sm:w-auto sm:flex-col sm:items-start">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-zinc-100 shadow-md ring-1 ring-zinc-200 sm:h-32 sm:w-32 dark:bg-zinc-900 dark:ring-zinc-800/80">
              <Image
                src="/robin.jpg"
                alt="Robin Mia"
                fill
                priority
                sizes="(max-width: 640px) 80px, 128px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-start">
              <h1 className="font-sans text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                Robin Mia
              </h1>
              <span className="mt-0.5 font-mono text-[11px] font-medium tracking-wide text-zinc-500 uppercase sm:mt-1 dark:text-zinc-400">
                Based in Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Bio, Socials & Buttons */}
        <div className="flex min-w-0 w-full flex-col justify-start pt-1">
          <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={8} blur="6px">
            <h2 className="font-sans text-base font-semibold tracking-tight text-zinc-900 sm:text-lg md:text-xl dark:text-zinc-100">
              Full-Stack Engineer &amp; Product Builder
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3} yOffset={8} blur="6px">
            <p className="mt-3 text-left font-sans text-[14px] leading-relaxed tracking-wide text-zinc-600 sm:mt-4 sm:text-justify dark:text-zinc-400">
              I design and engineer end-to-end web applications with a focus on
              high performance, clean architecture, and fluid user experiences.
              Specialized in TypeScript, React, Next.js, and Node/Nest.js —
              bridging thoughtful interface design with scalable backend
              systems.
            </p>
          </BlurFade>

          {/* Socials & Action Buttons */}
          <BlurFade delay={BLUR_FADE_DELAY * 4} yOffset={8} blur="6px">
            <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              {/* Social Icons */}
              <div className="flex items-center gap-2 overflow-x-auto py-1 sm:gap-2.5">
                {/* GitHub */}
                <a
                  href="https://github.com/robindev2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn shrink-0 rounded-lg bg-white/60 p-2.5 text-zinc-500 shadow-2xs transition-all hover:text-zinc-950 active:scale-95 sm:p-2 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-white"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0 1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/robin2007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn shrink-0 rounded-lg bg-white/60 p-2.5 text-zinc-500 shadow-2xs transition-all hover:text-zinc-950 active:scale-95 sm:p-2 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-4 w-4"
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
                </a>

                {/* Email */}
                <a
                  href="mailto:robindev2007@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn shrink-0 rounded-lg bg-white/60 p-2.5 text-zinc-500 shadow-2xs transition-all hover:text-zinc-950 active:scale-95 sm:p-2 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-white"
                  aria-label="Email"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>

              {/* Resume & Get in Touch buttons */}
              <div className="flex w-full items-center gap-3 sm:w-auto">
                <a
                  href="https://drive.google.com/file/d/1EWkgK6_jYxNCpK0hV3oBWIqGzW5UMe31/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn flex-1 rounded-xl bg-white px-4 py-2 text-center text-[13px] font-medium tracking-wide text-zinc-800 shadow-2xs transition-all hover:bg-zinc-50 hover:text-zinc-950 active:scale-95 sm:flex-initial dark:bg-[#151516] dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  className="apple-btn-primary flex-1 rounded-xl bg-zinc-900 px-4 py-2 text-center text-[13px] font-medium tracking-wide text-white shadow-2xs transition-all hover:bg-zinc-800 active:scale-95 sm:flex-initial dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Work Experience Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 5} yOffset={8} blur="6px">
        <div id="experience" className="mt-14 flex w-full flex-col gap-5 scroll-mt-20">
          <h3 className="font-sans text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
            Work Experience
          </h3>

          <div className="flex flex-col gap-3">
            {WORK_EXPERIENCES.map((exp, expIdx) => (
              <BlurFade
                key={exp.company}
                delay={BLUR_FADE_DELAY * 6 + expIdx * 0.04}
                yOffset={6}
                blur="4px"
              >
                <div className="apple-experience group flex items-center justify-between gap-4 rounded-xl bg-white/40 p-3.5 transition-all duration-200 hover:bg-white/80 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/50">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-zinc-200/80 bg-white p-1 shadow-2xs dark:border-zinc-800 dark:bg-zinc-950">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="truncate font-sans text-[14px] font-semibold text-zinc-900 dark:text-zinc-100">
                        {exp.company}
                      </span>
                      <span className="truncate font-sans text-[13px] text-zinc-500 dark:text-zinc-400">
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-500">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Skills & Tools Grouped Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 8} yOffset={8} blur="6px">
        <div id="skills" className="mt-14 flex w-full flex-col gap-6 scroll-mt-20">
          <h3 className="font-sans text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
            Skills &amp; Tools
          </h3>

          <div className="flex flex-col gap-5">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <BlurFade
                key={category.title}
                delay={BLUR_FADE_DELAY * 9 + catIdx * 0.03}
                yOffset={6}
                blur="4px"
              >
                <div className="grid grid-cols-1 gap-2 border-b border-zinc-200/40 pb-4 sm:grid-cols-12 sm:items-start sm:gap-4 dark:border-zinc-800/40 last:border-b-0 last:pb-0">
                  <div className="sm:col-span-4">
                    <h4 className="font-mono text-[13px] font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:col-span-8">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="apple-skill flex cursor-default items-center gap-2 rounded-lg bg-white/60 px-2.5 py-1 shadow-2xs transition-all duration-200 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98] dark:bg-zinc-900/40 dark:hover:bg-zinc-800/60"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={14}
                          height={14}
                          className={`h-3.5 w-3.5 object-contain shrink-0 ${
                            skill.invertInDark ? "dark:invert" : ""
                          }`}
                        />
                        <span className="font-mono text-[11px] tracking-tight text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Featured Projects Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 12} yOffset={8} blur="6px">
        <div id="projects" className="mt-14 flex w-full flex-col gap-5 scroll-mt-20">
          <div className="flex items-center justify-between">
            <h3 className="font-sans text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
              Featured Projects
            </h3>
            <a
              href="https://github.com/robindev2007"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 font-mono text-[12px] text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              <span>View github</span>
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PROJECTS.map((proj, projIdx) => (
              <BlurFade
                key={proj.title}
                delay={BLUR_FADE_DELAY * 13 + projIdx * 0.04}
                yOffset={6}
                blur="4px"
              >
                <div className="apple-card group flex h-full flex-col overflow-hidden rounded-xl bg-white/40 transition-all duration-300 hover:bg-white/80 hover:shadow-md dark:bg-zinc-900/20 dark:hover:bg-zinc-900/50">
                  {/* Project Image Preview */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-900">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-sans text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                          {proj.title}
                        </h4>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                              aria-label={`${proj.title} Source Code`}
                            >
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </a>
                          )}
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                              aria-label={`${proj.title} Live Demo`}
                            >
                              <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="mt-2 font-sans text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {proj.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="apple-skill rounded-md bg-zinc-100/80 px-2 py-0.5 font-mono text-[10px] tracking-tight text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

export default HeroSection;

