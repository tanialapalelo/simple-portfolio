import React from "react";
import HighlightCard from "./HighlightCard";
import { highlights } from "@/constants";


const Highlight = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-center">Highlights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            title={highlight.title}
            href={highlight.href}
            tag={highlight.tag}
            description={highlight.description}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Highlight;
