import Link from "next/link";

export default function HighlightCard({ title, href, tag, description }: { title: string; href: string; tag: string; description: string }) {
  return (
    <div className="border p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <Link href={href} className="text-blue-500 mt-4 inline-block">
        View More
      </Link>
      <p className="text-sm text-gray-500 mt-2">{tag}</p>
    </div>
  );
}
