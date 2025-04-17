// components/SocialMediaLinks.tsx
'use client';

import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/socialLinks";

const SocialMediaLinks = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-6">Connect with Me</h2>
      <div className="flex flex-wrap justify-center gap-6 text-3xl">
        {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="hover:text-gray-700 transition-all"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaLinks;
