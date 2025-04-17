'use client';

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons for the hamburger menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold">
        Tania
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/tech">Tech</Link>
        <Link href="/english">English</Link>
        <Link href="/dance">Dance</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col items-center space-y-4">
          <Link href="/tech" className="text-sm font-medium">Tech</Link>
          <Link href="/create" className="text-sm font-medium">Create</Link>
          <Link href="/english" className="text-sm font-medium">English</Link>
          <Link href="/dance" className="text-sm font-medium">Dance</Link>
          <Link href="/contact" className="text-sm font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
}
