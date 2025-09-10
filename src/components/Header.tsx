'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark_slate_gray-500/80 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-wheat-500">
          Vivek Patel
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-wheat-500 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:items-center`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="py-2 px-4 text-wheat-500 hover:text-mahogany-400 transition cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="py-2 px-4 text-wheat-500 hover:text-mahogany-400 transition cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="py-2 px-4 text-wheat-500 hover:text-mahogany-400 transition cursor-pointer"
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="py-2 px-4 text-wheat-500 hover:text-mahogany-400 transition cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="py-2 px-4 text-wheat-500 hover:text-mahogany-400 transition cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}