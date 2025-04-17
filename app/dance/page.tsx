"use client";

import Link from "next/link";
import {
  danceVideos,
  danceMilestones,
  aboutDance,
  youtubeVideoId,
  youtubeChannelUrl,
} from "@/constants/dance";

export default function DancePage() {
  return (
    <main className="px-6 py-12 mx-auto space-y-20 max-w-screen-xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Dance with Tania</h1>
        <p className="text-lg max-w-2xl mx-auto mt-4">{aboutDance.intro}</p>
      </section>

      {/* YouTube Highlight Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Featured YouTube Video</h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-4">
          Watch more on my{" "}
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            YouTube channel
          </a>
        </p>
      </section>

      {/* Dance Reels */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Dance Reels</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {danceVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs border rounded-lg overflow-hidden shadow"
            >
              <div className="aspect-w-9 aspect-h-16">
                <div className="bg-gray-200 flex items-center justify-center h-64 text-gray-500">
                  {video.platform}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Dance Journey */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">My Dance Journey</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">{aboutDance.journey}</p>
        <div className="space-y-4">
          {danceMilestones.map((item) => (
            <div key={item.id} className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore More */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/tech"
            className="px-6 py-2 bg-gray-100 rounded-xl hover:bg-gray-200"
          >
            Tech
          </Link>
          <Link
            href="/english"
            className="px-6 py-2 bg-gray-100 rounded-xl hover:bg-gray-200"
          >
            English
          </Link>
        </div>
      </section>
    </main>
  );
}
