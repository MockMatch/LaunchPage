// src/components/SignupSection.tsx
'use client';

import TallyForm from './TallyForm';

export default function SignupSection() {
  return (
    <section id="signup" className="container mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-6">Sign Up for Updates</h2>
      <p className="text-gray-700 mb-8">
        Enter your email to receive updates on MockMatch and be notified about our launch.
      </p>
      <div className="w-full max-w-lg mx-auto">
        <TallyForm />
      </div>
    </section>
  );
}
