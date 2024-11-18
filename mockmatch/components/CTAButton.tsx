// src/components/SignupSection.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function CtaButton({ buttonText, className }: { buttonText: string, className: string }) {

  const router = useRouter();

  const handleSignupRedirect = () => {
    router.push('/signup');
  };

  return (
    <div className='flex flex-col items-center'>
        <button type='submit' onClick={handleSignupRedirect} className={className}>
            {buttonText}
        </button>
    </div>
  );
}
