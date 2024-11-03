// src/components/SignupSection.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/save-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        // Redirect to the Tally form
        router.push('/signup');
      } else {
        console.error('Failed to save email');
        // Optionally display an error message to the user
      }
    } catch (error) {
      console.error('An error occurred', error);
      // Optionally display an error message to the user
    }
  };

  return (
    <section id="signup" className="container mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-6">Sign Up for Updates</h2>
      <p className="text-gray-700 mb-8">
        Enter your email to receive updates on MockMatch and be notified about our launch.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="flex items-center border-b border-blue-500 py-2">
          <input
            type="email"
            placeholder="Your email"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}
