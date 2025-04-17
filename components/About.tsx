import { aboutContent } from "@/constants";
import Image from "next/image";


const About = () => {
  return (
    <section className="text-center">
      <div className="flex justify-center mb-6">
        <Image
          src={aboutContent.imageSrc}
          alt={aboutContent.imageAlt}
          width={128}
          height={128}
          className="rounded-full border-4 border-gray-200 object-cover"
        />
      </div>
      <p className="text-lg max-w-2xl mx-auto">
        {aboutContent.text}
      </p>
    </section>
  );
};

export default About;
