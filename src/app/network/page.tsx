import type { Metadata } from "next";
import { FlickeringGridHeader } from "@/components/ui/flickering-grid";
import { Header } from "@/components/shared/header";
import { NetworkPage } from "@/features/network";

export const metadata: Metadata = {
  title: "People & Teammates | Robin Mia",
  description:
    "Talented engineers, product builders, designers, and creators I've had the privilege of working with, building alongside, or learning from.",
};

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-background font-sans overflow-x-clip">
      <FlickeringGridHeader />
      <Header />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-start pt-16 sm:pt-20 px-4 sm:px-8">
        <NetworkPage />
      </main>
    </div>
  );
}

