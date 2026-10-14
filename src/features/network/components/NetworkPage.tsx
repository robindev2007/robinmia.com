"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  ArrowLeft,
  Search,
  Globe,
  Sparkles,
  Users,
  MessageSquarePlus,
  X,
} from "lucide-react";
import { DeveloperPeer } from "../types";

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

function TwitterIcon({ className }: { className?: string }) {
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
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.5 2.5c3.75 4.5 5.5 10.5 5.5 19" />
    </svg>
  );
}

function PeerAvatar({ name, avatar }: { name: string; avatar: string }) {
  const [hasError, setHasError] = useState(false);

  const initials = useMemo(() => {
    return name
      .split(" ")
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }, [name]);

  if (hasError || !avatar) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-200 to-zinc-300 font-mono text-[12px] font-semibold text-zinc-700 select-none dark:from-zinc-800 dark:to-zinc-700 dark:text-zinc-200">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={avatar}
      alt={name}
      fill
      sizes="44px"
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

const PEERS_DATA: DeveloperPeer[] = [
  {
    id: "1",
    name: "Jubayer Shikder",
    role: "Backend Engineer",
    avatar: "https://avatars.githubusercontent.com/u/97081979?v=4",
    category: "Backend / DevOps",
    relationship: "Teammate",
    bio: "Specializing in core backend infrastructure, scalable server APIs, and database engineering that power complex client web systems.",
    skills: ["Node.js", "Express", "Nest.js", "MongoDB", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/jubayers-r",
      twitter: "https://x.com/jubayers_r",
    },
  },
  {
    id: "2",
    name: "Md Tahmid Alam",
    role: "Frontend Engineer",
    avatar: "https://avatars.githubusercontent.com/u/103018071?v=4",
    category: "Frontend",
    relationship: "Teammate",
    bio: "Crafting modern, accessible, and high-performance user interfaces and responsive client dashboards with React and Next.js.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "UI/UX"],
    links: {
      github: "https://github.com/tahmid122",
      website: "https://tahmidalam.vercel.app/",
    },
  },
  {
    id: "3",
    name: "Apu Sutra Dhar",
    role: "Full-Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/101419595?v=4",
    category: "Full-Stack",
    relationship: "Collaborator",
    bio: "Full-stack developer architecting end-to-end web applications, server APIs, and integrated database solutions.",
    skills: ["Node.js", "React", "Express", "MongoDB", "JavaScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/apucsd",
      website: "https://apusutradhar.online",
    },
  },
  {
    id: "4",
    name: "Irfan Ekon",
    role: "Mobile Application Developer",
    avatar: "https://avatars.githubusercontent.com/u/96953316?v=4",
    category: "Mobile App",
    relationship: "Collaborator",
    bio: "Mobile app developer at SM Technology specializing in cross-platform mobile experiences and seamless API integrations.",
    skills: ["React Native", "Flutter", "JavaScript", "Mobile UI", "REST APIs"],
    links: {
      github: "https://github.com/irfanekon04",
      website: "https://irfanekon.vercel.app",
    },
  },
  {
    id: "5",
    name: "MD. Shahriar Nur",
    role: "Mobile & Frontend Developer",
    avatar: "https://avatars.githubusercontent.com/u/95541859?v=4",
    category: "Mobile App",
    relationship: "Collaborator",
    bio: "Engineering performant cross-platform mobile apps and modern front-end interfaces with clean architecture.",
    skills: ["Flutter", "React Native", "React", "JavaScript", "Mobile Development"],
    links: {
      github: "https://github.com/shahriarnur03",
      website: "https://www.shahriarnur.com/",
    },
  },
  {
    id: "6",
    name: "Parvej Mahmud",
    role: "Mobile App Developer (Flutter)",
    avatar: "https://avatars.githubusercontent.com/u/90233130?v=4",
    category: "Mobile App",
    relationship: "Collaborator",
    bio: "Specializing in Flutter mobile development, state management, and reliable backend service integration.",
    skills: ["Flutter", "Dart", "Firebase", "Mobile Architecture", "REST APIs"],
    links: {
      github: "https://github.com/ParvejMahmud01",
    },
  },
  {
    id: "7",
    name: "Junayet Alam",
    role: "Backend Developer",
    avatar: "https://avatars.githubusercontent.com/u/138348590?v=4",
    category: "Backend / DevOps",
    relationship: "Collaborator",
    bio: "Backend developer specializing in scalable Node.js & Express architectures, PostgreSQL database design, and API performance optimization.",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "TypeScript", "REST APIs"],
    links: {
      github: "https://github.com/JunayetAlam",
      linkedin: "https://www.linkedin.com/in/junayet-alam/",
      website: "https://www.junayetalam.me",
    },
  },
  {
    id: "8",
    name: "Abu Saiyed Joy",
    role: "Full-Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/153846355?v=4",
    category: "Full-Stack",
    relationship: "Collaborator",
    bio: "Full-stack developer specializing in the MERN stack and Next.js, building scalable, responsive web applications and secure API backends.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/abusaiyedjoy",
      linkedin: "https://www.linkedin.com/in/abusaiyedjoy/",
      website: "https://abusaiyedjoy.vercel.app",
    },
  },
  {
    id: "9",
    name: "MD Nurullah Bhuiyan",
    role: "Full-Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/121657120?v=4",
    category: "Full-Stack",
    relationship: "Collaborator",
    bio: "Full-stack developer crafting scalable web applications with MERN stack, TypeScript, and modern component systems.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Redux"],
    links: {
      github: "https://github.com/nurullah91",
      linkedin: "https://linkedin.com/in/nurullahbhuiyan91",
      twitter: "https://x.com/BMNurullah",
      website: "https://www.nurullahbhuiyan.com",
    },
  },
  {
    id: "10",
    name: "Tanvir Hossain",
    role: "Full-Stack Developer",
    avatar: "https://avatars.githubusercontent.com/u/87421998?v=4",
    category: "Full-Stack",
    relationship: "Collaborator",
    bio: "Full-stack and Node.js-focused engineer building fast, clean, and accessible web solutions from ideas to interfaces and the cloud.",
    skills: ["TypeScript", "Next.js", "React", "Node.js", "Prisma", "Express"],
    links: {
      github: "https://github.com/tanvir1017",
      twitter: "https://x.com/tanvir1017",
      website: "https://tanvircodes.com",
    },
  },
  {
    id: "11",
    name: "Walid Khan",
    role: "UI/UX & Product Designer",
    avatar: "/walid.jpg",
    category: "UI/UX Design",
    relationship: "Designer",
    bio: "UI/UX designer with a software engineering background, crafting clean, intuitive digital experiences, mobile platforms, and scalable design systems.",
    skills: ["UI/UX Design", "Figma", "Design Systems", "Mobile UI", "Web Design", "Prototyping"],
    links: {
      dribbble: "http://dribbble.com/walid_K02013",
    },
  },
  {
    id: "12",
    name: "Md. Abdus Salam",
    role: "UI/UX Designer",
    avatar: "/salam.jpg",
    category: "UI/UX Design",
    relationship: "Designer",
    bio: "UI/UX designer with 2+ years of experience designing user-centric web and mobile interfaces, product workflows, and modern visual design.",
    skills: ["UI/UX Design", "Figma", "Product Design", "User Research", "Wireframing", "Web Design"],
    links: {
      linkedin: "https://www.linkedin.com/in/salam2396/",
    },
  },
];

const CATEGORIES = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend / DevOps",
  "Mobile App",
  "UI/UX Design",
] as const;

export function NetworkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPeers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PEERS_DATA.filter((peer) => {
      const matchesCategory =
        selectedCategory === "All" || peer.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!q) return true;

      return (
        peer.name.toLowerCase().includes(q) ||
        peer.role.toLowerCase().includes(q) ||
        (peer.company && peer.company.toLowerCase().includes(q)) ||
        peer.relationship.toLowerCase().includes(q) ||
        peer.category.toLowerCase().includes(q) ||
        peer.bio.toLowerCase().includes(q) ||
        peer.skills.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-3xl pb-24">
      {/* Top Breadcrumb Navigation */}
      <BlurFade delay={0.04} yOffset={6} blur="4px">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="apple-btn group inline-flex items-center gap-2 rounded-full bg-white/60 px-3.5 py-1.5 font-mono text-[12px] font-medium text-zinc-600 shadow-2xs transition-all hover:bg-white hover:text-zinc-950 active:scale-95 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            <Users className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
            <span>
              {searchQuery || selectedCategory !== "All"
                ? `${filteredPeers.length} of ${PEERS_DATA.length}`
                : PEERS_DATA.length}{" "}
              Collaborators
            </span>
          </div>
        </div>
      </BlurFade>

      {/* Hero Header */}
      <BlurFade delay={0.08} yOffset={8} blur="6px">
        <div className="flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-100/80 px-2.5 py-1 text-[11px] font-medium text-zinc-700 backdrop-blur-xs dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300">
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>SM Technology &amp; Peer Network</span>
          </div>

          <h1 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            People &amp; Collaborators
          </h1>

          <p className="font-sans text-[14.5px] leading-relaxed text-zinc-600 sm:text-[15.5px] dark:text-zinc-300/90">
            Talented engineers, teammates, and builders I&apos;ve collaborated with across
            45+ production repositories, client applications, and backend systems at SM Technology.
          </p>
        </div>
      </BlurFade>

      {/* Filter Tabs & Search Bar */}
      <BlurFade delay={0.12} yOffset={6} blur="4px">
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filter Pills (Scrollable on small mobile screens) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 cursor-pointer rounded-lg px-2.5 py-1 text-[11.5px] font-medium transition-all active:scale-95 ${
                    isActive
                      ? "apple-btn-primary bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                      : "apple-skill bg-white/60 text-zinc-600 hover:bg-white hover:text-zinc-950 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box with Clear Button */}
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search peers, skills..."
              className="h-9 w-full rounded-xl border border-zinc-200/80 bg-white/70 pl-8.5 pr-8 text-[12.5px] text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-zinc-400 focus:bg-white focus:outline-hidden dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-white/20 dark:focus:bg-zinc-900"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer p-0.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </BlurFade>

      {/* Peer Cards Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filteredPeers.map((peer, idx) => (
          <BlurFade
            key={peer.id}
            delay={0.16 + Math.min(idx * 0.03, 0.2)}
            yOffset={6}
            blur="4px"
          >
            <div className="apple-card group flex h-full flex-col justify-between rounded-2xl bg-white/50 p-4.5 shadow-xs transition-all duration-200 hover:bg-white/85 hover:shadow-md dark:bg-zinc-900/30 dark:hover:bg-zinc-900/60">
              <div>
                {/* Header: Avatar, Name & Relations */}
                <div className="flex items-start gap-3">
                  <div className="apple-btn relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <PeerAvatar name={peer.name} avatar={peer.avatar} />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="truncate font-sans text-[14.5px] font-semibold text-zinc-900 dark:text-zinc-100">
                        {peer.name}
                      </span>
                    </div>

                    <span className="truncate font-sans text-[12.5px] text-zinc-500 dark:text-zinc-400">
                      {peer.role}
                    </span>

                    <span className="mt-0.5 inline-block font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                      {peer.relationship}
                    </span>
                  </div>
                </div>

                {/* Short Bio */}
                <p className="mt-3 font-sans text-[12.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {peer.bio}
                </p>
              </div>

              {/* Footer: Skills and Social Links */}
              <div className="mt-4 pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <div className="flex flex-wrap gap-1 mb-3">
                  {peer.skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => setSearchQuery(skill)}
                      title={`Filter by ${skill}`}
                      className="apple-skill cursor-pointer rounded-md bg-zinc-100/70 px-1.5 py-0.5 font-mono text-[9.5px] text-zinc-600 transition-all hover:bg-zinc-200/80 hover:text-zinc-950 active:scale-95 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-700/60 dark:hover:text-white"
                    >
                      {skill}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                    {peer.category}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {peer.links.github && (
                      <a
                        href={peer.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-btn flex h-7 w-7 items-center justify-center rounded-lg bg-white/60 text-zinc-500 hover:text-zinc-950 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:text-white"
                        aria-label={`${peer.name} GitHub`}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {peer.links.linkedin && (
                      <a
                        href={peer.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-btn flex h-7 w-7 items-center justify-center rounded-lg bg-white/60 text-zinc-500 hover:text-blue-500 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:text-blue-400"
                        aria-label={`${peer.name} LinkedIn`}
                      >
                        <LinkedinIcon className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {peer.links.twitter && (
                      <a
                        href={peer.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-btn flex h-7 w-7 items-center justify-center rounded-lg bg-white/60 text-zinc-500 hover:text-zinc-950 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:text-white"
                        aria-label={`${peer.name} Twitter / X`}
                      >
                        <TwitterIcon className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {peer.links.website && (
                      <a
                        href={peer.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-btn flex h-7 w-7 items-center justify-center rounded-lg bg-white/60 text-zinc-500 hover:text-zinc-950 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:text-white"
                        aria-label={`${peer.name} Website`}
                      >
                        <Globe className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {peer.links.dribbble && (
                      <a
                        href={peer.links.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-btn flex h-7 w-7 items-center justify-center rounded-lg bg-white/60 text-zinc-500 hover:text-pink-500 dark:bg-zinc-800/60 dark:text-zinc-400 dark:hover:text-pink-400"
                        aria-label={`${peer.name} Dribbble`}
                      >
                        <DribbbleIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {filteredPeers.length === 0 && (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 p-8 text-center dark:border-zinc-800">
          <Users className="h-8 w-8 text-zinc-400" />
          <h4 className="mt-2 font-sans text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            No collaborators found
          </h4>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Try adjusting your search query or selected category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="apple-btn mt-4 inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white shadow-2xs hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Want to connect / build together card */}
      <BlurFade delay={0.24} yOffset={8} blur="6px">
        <div className="apple-card mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-white/60 p-6 shadow-xs sm:flex-row sm:items-center sm:p-7 dark:bg-zinc-900/40">
          <div className="flex flex-col gap-1">
            <h3 className="font-sans text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Have we built together or want to collaborate?
            </h3>
            <p className="max-w-md font-sans text-[13px] text-zinc-600 dark:text-zinc-400">
              Let&apos;s get connected. I&apos;m always looking to meet passionate
              engineers, founders, and open-source contributors.
            </p>
          </div>

          <a
            href="mailto:robindev2007@gmail.com"
            className="apple-btn-primary flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-[13px] font-medium text-white shadow-2xs transition-all hover:bg-zinc-800 active:scale-95 shrink-0 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            <MessageSquarePlus className="h-4 w-4" />
            <span>Say Hello</span>
          </a>
        </div>
      </BlurFade>
    </div>
  );
}

export default NetworkPage;
