
import { blogData } from "@/constants/blog";
import React from "react";

const BlogPage = () => {
  return (
    <main className="px-6 py-12 mx-auto max-w-screen-xl">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          Explore my thoughts, experiences, and insights on various topics.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        <div className="space-y-4">
          {/* Loop through the blogData constants to generate blog links */}
          {blogData.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border p-4 rounded-lg hover:bg-gray-100 transition-all"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-lg mt-2">{post.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;