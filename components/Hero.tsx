'use client';

import { heroContent } from '@/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const TypingEffect = ({ words, typeSpeed = 100, deleteSpeed = 50, delay = 1000 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loop % words.length];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop((prev) => prev + 1);
      }
    };

    const typingSpeed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, words, loop, typeSpeed, deleteSpeed, delay]);

  return <span>{text}|</span>;
};

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-lavender-100 rounded-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient blur-2xl opacity-20"></div>

      <div className="relative z-10 max-w-4xl p-9">
        {/* Title with Glow Effect */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TypingEffect words={[heroContent.title, 'Frontend Developer', 'Creative Coder']} />
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {heroContent.description}
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="px-4 py-2 bg-lavender-200 text-gray-900 rounded-full shadow-md text-sm font-medium">
            React.js
          </span>
          <span className="px-4 py-2 bg-lavender-200 text-gray-900 rounded-full shadow-md text-sm font-medium">
            Next.js
          </span>
          <span className="px-4 py-2 bg-lavender-200 text-gray-900 rounded-full shadow-md text-sm font-medium">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-lavender-200 text-gray-900 rounded-full shadow-md text-sm font-medium">
            Framer Motion
          </span>
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/tech"
            className="px-6 py-3 bg-lavender-300 text-gray-900 rounded-xl shadow-lg hover:bg-lavender-200 transform hover:scale-105 transition-all"
          >
            {heroContent.cta1}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-lavender-300 text-lavender-300 rounded-xl hover:bg-lavender-300 hover:text-gray-900 transform hover:scale-105 transition-all"
          >
            {heroContent.cta2}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;