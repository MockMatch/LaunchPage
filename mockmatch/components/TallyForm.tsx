// src/components/TallyForm.tsx
'use client';

import { useEffect } from 'react';

export default function TallyForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative h-[500px] w-full">
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
