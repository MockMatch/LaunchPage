// src/app/signup/page.tsx
'use client';

import { useEffect } from 'react';

export default function SignupPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-screen h-screen">
      <iframe
        data-tally-src="https://tally.so/r/n9Jl1K?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="MockMatch Product Interest"
      ></iframe>
    </div>
  );
}
