import { explorePages } from "@/constants";
import Link from "next/link";

interface ExploreProps {
  currentPage: string;
}

const Explore = ({ currentPage }: ExploreProps) => {

  // Filter out the current page from the links
  const filteredPages = explorePages.filter((page) => page.toLowerCase() !== currentPage.toLowerCase());

  return (
    <section className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Explore</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredPages.map((item) => (
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
  );
};

export default Explore;
