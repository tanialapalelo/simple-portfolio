import Hero from "@/components/Hero";
import HighlightCard from "@/components/HighlightCard";
import Link from "next/link";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import About from "@/components/About";

export default function HomePage() {
  return (
    <main className="px-6 py-12 mx-auto space-y-20 max-w-5xl">
      <Hero />
      <About/>

      {/* Highlights Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <HighlightCard
            title="Zappy Website Builder"
            href="/tech"
            tag="Tech"
            description="A no-code website builder for teachers and creators."
          />
          <HighlightCard
            title="English Tips: Most Used Phrases"
            href="/english"
            tag="English"
            description="Learn the most common English phrases for daily conversations."
          />
          <HighlightCard
            title="IG Dance Reel #17"
            href="/dance"
            tag="Dance"
            description="Watch my latest dance reel on Instagram."
          />
        </div>
      </section>

      {/* Explore Links Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Tech", "English", "Dance"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-6 py-2 bg-gray-100 rounded-xl hover:bg-gray-200"
            >
              {item}
            </Link>
          ))}
        </div>
      </section>
      <SocialMediaLinks />

    </main>
  );
}
