import Explore from "@/components/Explore";
import TechProjectCard from "@/components/TechProjectCard";
import { projects } from "@/constants/tech";


export default function TechPage() {
  return (
    <main className="px-6 py-20 max-w-6xl mx-auto space-y-20">
      <h1 className="text-4xl font-bold text-center mb-12">Tech Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <TechProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Explore currentPage="tech" />
    </main>
  );
}
