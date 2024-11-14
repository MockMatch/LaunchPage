// src/components/SignupSection.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CTAButton({buttonText}) {

  return (
    <div className='flex flex-col items-center'>
        <button type='submit' className="bg-[#FF761F] text-white py-3 px-6 rounded hover:bg-[#2E9BFF]">
            {buttonText}
        </button>
    </div>
  );
}
