export interface DeveloperPeer {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  category: "Full-Stack" | "Frontend" | "Backend / DevOps" | "Mobile App" | "Product & Engineering" | "Open Source" | "UI/UX Design";
  relationship: string;
  bio: string;
  skills: string[];
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    dribbble?: string;
  };
}

