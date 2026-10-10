"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Globe,
  Sparkles,
  Users,
  MessageSquarePlus,
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

const PEERS_DATA: DeveloperPeer[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Senior Full-Stack Engineer",
    company: "Softvence Delta",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    category: "Full-Stack",
    relationship: "Colleague & Co-Builder",
    bio: "Passionate about building resilient distributed web architectures and micro-frontends with Next.js and Nest.js.",
    skills: ["Next.js", "TypeScript", "Nest.js", "PostgreSQL", "Tailwind CSS"],
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
    },
  },
  {
    id: "2",
    name: "Samantha Chen",
    role: "Frontend Architect & Design Systems",
    company: "Freelance",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    category: "Frontend",
    relationship: "Design Systems Collaborator",
    bio: "Obsessed with micro-interactions, fluid animation physics, and building accessible WCAG AAA component libraries.",
    skills: ["React", "Framer Motion", "Tailwind CSS", "Radix UI", "Web Performance"],
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
  {
    id: "3",
    name: "Devon Vance",
    role: "Backend & Cloud Engineer",
    company: "Softvence Agency",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    category: "Backend / DevOps",
    relationship: "Softvence Teammate",
    bio: "Specializing in high-throughput real-time APIs, WebRTC streaming pipelines, and Dockerized edge microservices.",
    skills: ["Node.js", "Express", "Docker", "Redis", "Supabase", "WebSockets"],
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "4",
    name: "Marcus Aurelius Tan",
    role: "AI Product Builder & Full-Stack",
    company: "Open Source Lab",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    category: "AI & Product",
    relationship: "Hackathon Partner",
    bio: "Building multimodal LLM tools, agentic workflows, and intuitive developer tooling in the Next.js ecosystem.",
    skills: ["Python", "LangChain", "Next.js", "FastAPI", "Vector DBs"],
    links: {
      github: "https://github.com",
      twitter: "https://x.com",
      website: "https://example.com",
    },
  },
  {
    id: "5",
    name: "Elena Rostova",
    role: "Open Source Maintainer & Rust Dev",
    company: "Independent",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    category: "Open Source",
    relationship: "OSS Contributor Peer",
    bio: "Core contributor to developer tools, CLI utilities, and fast bundling algorithms in Rust and TypeScript.",
    skills: ["Rust", "TypeScript", "WASM", "Vite", "Node.js"],
    links: {
      github: "https://github.com",
      twitter: "https://x.com",
    },
  },
  {
    id: "6",
    name: "Zubair Ahmed",
    role: "Full-Stack Web3 & Cloud Dev",
    company: "Tech Venture Studio",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    category: "Full-Stack",
    relationship: "Project Collaborator",
    bio: "Focused on scalable distributed applications, serverless architectures, and next-gen web platforms.",
    skills: ["Next.js", "MongoDB", "Tailwind CSS", "Solidity", "AWS"],
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const CATEGORIES = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend / DevOps",
  "AI & Product",
  "Open Source",
] as const;

export function NetworkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPeers = useMemo(() => {
    return PEERS_DATA.filter((peer) => {
      const matchesCategory =
        selectedCategory === "All" || peer.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        peer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        peer.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        peer.relationship.toLowerCase().includes(searchQuery.toLowerCase()) ||
        peer.skills.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-3xl pb-24">
      {/* Top Breadcrumb Navigation */}
      <BlurFade delay={0.05} yOffset={6} blur="4px">
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
            <span>{PEERS_DATA.length} Collaborators</span>
          </div>
        </div>
      </BlurFade>

      {/* Hero Header */}
      <BlurFade delay={0.1} yOffset={8} blur="6px">
        <div className="flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-100/80 px-2.5 py-1 text-[11px] font-medium text-zinc-700 backdrop-blur-xs dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300">
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>Developers &amp; Peers Network</span>
          </div>

          <h1 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            People &amp; Collaborators
          </h1>

          <p className="font-sans text-[14.5px] leading-relaxed text-zinc-600 sm:text-[15.5px] dark:text-zinc-300/90">
            A curated space celebrating talented engineers, product builders,
            designers, and creators I’ve had the privilege of working with,
            building alongside, or learning from in the tech ecosystem.
          </p>
        </div>
      </BlurFade>

      {/* Filter Tabs & Search Bar */}
      <BlurFade delay={0.15} yOffset={6} blur="4px">
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer rounded-lg px-2.5 py-1 text-[11.5px] font-medium transition-all active:scale-95 ${
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

          {/* Search Box */}
          <div className="relative sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search peers or tech..."
              className="apple-skill h-8.5 w-full rounded-lg bg-white/60 pl-8 pr-3 text-[12px] text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden dark:bg-zinc-900/40 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            />
          </div>
        </div>
      </BlurFade>

      {/* Peer Cards Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filteredPeers.map((peer, idx) => (
          <BlurFade
            key={peer.id}
            delay={0.2 + idx * 0.04}
            yOffset={6}
            blur="4px"
          >
            <div className="apple-card group flex h-full flex-col justify-between rounded-2xl bg-white/50 p-4.5 shadow-xs transition-all duration-200 hover:bg-white/85 hover:shadow-md dark:bg-zinc-900/30 dark:hover:bg-zinc-900/60">
              <div>
                {/* Header: Avatar, Name & Relations */}
                <div className="flex items-start gap-3">
                  <div className="apple-btn relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={peer.avatar}
                      alt={peer.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="truncate font-sans text-[14.5px] font-semibold text-zinc-900 dark:text-zinc-100">
                        {peer.name}
                      </span>
                    </div>

                    <span className="truncate font-sans text-[12.5px] text-zinc-500 dark:text-zinc-400">
                      {peer.role} {peer.company ? `• ${peer.company}` : ""}
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
                    <span
                      key={skill}
                      className="apple-skill rounded-md bg-zinc-100/70 px-1.5 py-0.5 font-mono text-[9.5px] text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
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
        </div>
      )}

      {/* Want to connect / build together card */}
      <BlurFade delay={0.4} yOffset={8} blur="6px">
        <div className="apple-card mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-white/60 p-6 shadow-sm sm:flex-row sm:items-center sm:p-7 dark:bg-zinc-900/40">
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
