"use client";

import {
  danceVideos,
  danceMilestones,
  aboutDance,
  youtubeVideoId,
  youtubeChannelUrl,
} from "@/constants/dance";
import Explore from "@/components/Explore";

export default function DancePage() {
  return (
    <main className="px-6 py-12 mx-auto space-y-20 max-w-screen-xl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Dance with Tania</h1>
        <p className="text-lg max-w-2xl mx-auto mt-4">{aboutDance}</p>
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
        <div className="flex flex-wrap justify-center gap-6">
          {danceVideos.map((video) => (
            <div
              key={video.id}
              className="w-full max-w-md rounded-xl overflow-hidden shadow bg-white p-4"
              dangerouslySetInnerHTML={{ __html: video.embed }}
            />
          ))}
        </div>
      </section>

      {/* Dance Journey */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">My Dance Journey</h2>
        <div className="space-y-4">
          {danceMilestones.map((item) => (
            <div key={item.id} className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Explore currentPage="dance" />
    </main>
  );
}
