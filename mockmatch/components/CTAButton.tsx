// src/components/SignupSection.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function CtaButton({buttonText}) {

  const router = useRouter();

  const handleSignupRedirect = () => {
    router.push('/signup');
  };

  return (
    <div className='flex flex-col items-center'>
        <button type='submit' onClick={handleSignupRedirect} className="bg-[#FF761F] text-white py-3 px-6 rounded hover:bg-[#2E9BFF]">
            {buttonText}
        </button>
    </div>
  );
}
