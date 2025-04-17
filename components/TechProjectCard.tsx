import Image from "next/image";
import Link from "next/link";

type TechProject = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  repoLink?: string;
};

export default function TechProjectCard({
  title,
  description,
  techStack,
  image,
  liveLink,
  repoLink,
}: TechProject) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-white">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-black px-2 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          {liveLink && (
            <Link href={liveLink} className="text-blue-600 hover:underline" target="_blank">
              Live Site
            </Link>
          )}
          {repoLink && (
            <Link href={repoLink} className="text-gray-800 hover:underline" target="_blank">
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
