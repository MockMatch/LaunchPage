// src/app/page.tsx
'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/signup');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="MockMatch Logo" width={40} height={40} />
            <span className="text-xl font-bold text-[#2E9BFF]">MockMatch</span>
          </a>
          {/* Navigation */}
          <nav className="flex space-x-6">
            <a href="#about" className="text-[#2E9BFF] hover:text-[#FF761F]">
              About
            </a>
            <a href="#signup" className="text-[#2E9BFF] hover:text-[#FF761F]">
              Signup
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-[64px]">
        {/* About Section */}
        <section id="about" className="flex flex-col scroll-mt-16">
          {/* Image 1 */}
          <div className="w-full">
            <img
              src="/about1.png"
              alt="About Image 1"
              className="w-full"
            />
          </div>
          {/* Image 2 */}
          <div className="w-full">
            <img
              src="/about2.png"
              alt="About Image 2"
              className="w-full"
            />
          </div>
          {/* Image 3 */}
          <div className="w-full">
            <img
              src="/about3.png"
              alt="About Image 3"
              className="w-full"
            />
          </div>
        </section>

        {/* Signup Section */}
        <section id="signup" className="flex items-center justify-center py-12 scroll-mt-16">
          <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#2E9BFF]">
              Sign Up for Updates
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Enter your email to receive updates on MockMatch and be notified about our launch.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2E9BFF]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#FF761F] text-white py-2 rounded hover:bg-[#2E9BFF]"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2E9BFF] text-white py-4 text-center">
        <p>&copy; 2024 MockMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}
