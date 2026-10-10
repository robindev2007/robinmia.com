import { FlickeringGridHeader } from "@/components/ui/flickering-grid";
import { Header } from "@/components/shared/header";
import { HeroSection } from "@/features/hero";
import { ContactSection } from "@/features/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background font-sans overflow-x-clip">
      <FlickeringGridHeader />
      <Header />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-start pt-14 sm:pt-16 px-4 sm:px-8">
        <HeroSection />
        <ContactSection />
      </main>
    </div>
  );
}

