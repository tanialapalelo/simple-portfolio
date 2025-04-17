'use client'

import { heroContent } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="relative z-10">
        {/* Title with animation */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroContent.title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-black max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {heroContent.description}
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/tech"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all"
          >
            {heroContent.cta1}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-black rounded-xl text-black hover:bg-gray-100 transform hover:scale-105 transition-all"
          >
            {heroContent.cta2}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
