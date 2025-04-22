"use client";

import EnglishIdioms from "@/components/EnglishIdiom";
import Explore from "@/components/Explore";
import { englishBio, englishTips } from "@/constants/english";
import Link from "next/link";

export default function EnglishPage() {
  return (
    <main className="px-6 py-12 mx-auto space-y-20 max-w-screen-xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Learn English with Tania</h1>
        <p className="text-lg max-w-2xl mx-auto mt-4">{englishBio.intro}</p>
        <p className="text-lg max-w-2xl mx-auto mt-2 text-gray-600">{englishBio.outro}</p>
      </section>

      {/* YouTube Videos */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">English Learning Videos</h2>
        <div className="space-y-4">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${englishBio.youtube.embedId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
        <p className="mt-4 text-gray-500">
          Subscribe to my channel 👉{" "}
          <Link
            href={englishBio.youtube.link}
            target="_blank"
            className="underline text-blue-600"
          >
            {englishBio.youtube.channelName}
          </Link>
        </p>
      </section>

      {/* TikTok Feed */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">TikTok English Tips</h2>
        <div className="space-y-4">{/* TikTok embeds go here */}</div>
        <p className="mt-4 text-gray-500">
          Follow on TikTok 👉{" "}
          <Link
            href={englishBio.tiktok.link}
            target="_blank"
            className="underline text-blue-600"
          >
            {englishBio.tiktok.username}
          </Link>
        </p>
      </section>

      <EnglishIdioms/>

      <Explore currentPage="english" />
    </main>
  );
}
