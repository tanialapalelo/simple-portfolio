'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { Switch } from '@/components/ui/switch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-pink-200 to-lavender-300 shadow-md dark:from-gray-800 dark:to-gray-900 sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Tania
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-sm font-medium dark:text-gray-200">
        <Link href="/tech">Tech</Link>
        <Link href="/english">English</Link>
        <Link href="/dance">Dance</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Theme Toggle Button */}
      <div className="flex items-center gap-4">
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700"
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl dark:text-gray-200">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col items-center space-y-4 dark:bg-gray-800">
          <Link href="/tech" className="text-sm font-medium dark:text-gray-200">Tech</Link>
          <Link href="/create" className="text-sm font-medium dark:text-gray-200">Create</Link>
          <Link href="/english" className="text-sm font-medium dark:text-gray-200">English</Link>
          <Link href="/dance" className="text-sm font-medium dark:text-gray-200">Dance</Link>
          <Link href="/contact" className="text-sm font-medium dark:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
