import Hero from "@/components/Hero";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import About from "@/components/About";
import Highlight from "@/components/Highlight";

export default function HomePage() {
  return (
    <main className="px-6 py-12 mx-auto space-y-20 max-w-5xl">
      <Hero />
      <About />
      <Highlight />
      <SocialMediaLinks />
    </main>
  );
}
