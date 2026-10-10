export interface DeveloperPeer {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  category: "Full-Stack" | "Frontend" | "Backend / DevOps" | "AI & Product" | "Open Source";
  relationship: string;
  bio: string;
  skills: string[];
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
