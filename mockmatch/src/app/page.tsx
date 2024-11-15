// src/app/page.tsx
'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '../../components/CTAButton';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="MockMatch Logo" width={40} height={40} />
            <span className="text-xl font-bold text-[#2E9BFF]">MockMatch</span>
          </Link>
          {/* Navigation */}
          <nav className="flex space-x-6">
            <CTAButton buttonText={"Sign up for updates"}></CTAButton>
            <SpeedInsights />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-[64px]">
        {/* About Section */}
        <section id="about" className="flex items-center justify-center py-12 scroll-mt-16">
          {/* Image All */}
          <div className='flex flex-col items-center mt-16'>
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
              Prepare smarter, speak confidently, and excel with AI-driven feedback.
            </h1>
            <div className='flex flex-col items-center'>
              <h2 className='text-secondary-text text-xl w-5/12 mb-8 text-center'>
              Get tailored behavioural and technical interview questions, personalized advice, and specific insights to help you ace your next tech interview. Build confidence and clarity with intelligent feedback that guides you every step of the way.
              </h2>
            </div>
            <CTAButton buttonText={"Sign up for updates"}></CTAButton>
            <div className='mt-8'>
              <Image src="/about1.png" width={0} height={0} sizes='100vw' style={{width: "100%", height: "auto"}} alt='HERO IMAGE'></Image>
            </div>
          </div>
           <Analytics />
        </section>

        <section id='segue' className="flex items-center justify-center py-12 scroll-mt-16">
          <div className='flex flex-col items-center mt-16' >
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
              Imagine you're in an interview for your dream tech job.
            </h1>
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
              You know exactly how to solve every LeetCode hard they'll throw at you
            </h1>
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
              But now you're struggling to express your ideas and personality.
            </h1>
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
              We'll make sure that never happens.
            </h1>
            </div>
        </section>

        <section id='features1' className="flex items-center justify-center py-12 scroll-mt-16">
          <div className='flex flex-col items-center mt-16' >
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
              Your personalized speaking coach.
            </h1>
            <div className='flex flex-col items-center'>
            </div>
            <div className='mt-8 flex flex-row items-center'>
              <Image src="/about4.png" width={0} height={0} sizes='100vw' 
              style={{width: "32em", 
              height: "auto", 
              border: "2px solid #f3f3f3",
               borderRadius: "16px"}} alt='FEATURE 1'>
               </Image>
               <div className='flex-col items-center ml-16'>
                <h2 className='text-secondary-text text-xl mb-8 text-center max-w-96'>
                  Practice personalized behavioural questions anytime, anywhere.
                </h2>
                <CTAButton buttonText={"Learn more"}>
                </CTAButton>
              </div>
            </div>
            </div>
        </section>

        <section id='features2' className="flex items-center justify-center py-12 scroll-mt-16">
          <div className='flex flex-col items-center mt-16' >
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
              And your personal technical coach.
            </h1>
            <div className='flex flex-col items-center'>
            </div>
            <div className='mt-8 flex flex-row items-center'>
               <div className='flex-col items-center mr-16'>
                <h2 className='text-secondary-text text-xl mb-8 text-center max-w-96'>
                Level up your on-the-spot problem solving skills.                 
                </h2>
                <CTAButton buttonText={"Learn more"}>
                </CTAButton>
              </div>
              <Image src="/about5.png" width={0} height={0} sizes='100vw' 
              style={{width: '32em', 
              height: "auto", 
              border: "2px solid #f3f3f3",
               borderRadius: "16px"}} alt='FEATURE 2'>
               </Image>
            </div>
            </div>
        </section>

        <section id='features3' className="flex items-center justify-center py-12 scroll-mt-16">
          <div className='flex flex-col items-center mt-16' >
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
            Pinpoint every error.
            </h1>
            <div className='flex flex-col items-center'>
            </div>
            <div className='mt-8 flex flex-row items-center'>
              <Image src="/about2.png" width={0} height={0} sizes='100vw' 
              style={{width: '32em', 
              height: "auto", 
              border: "2px solid #f3f3f3",
               borderRadius: "16px"}} alt='FEATURE 2'>
               </Image>
               <div className='flex-col items-center ml-16'>
                <h2 className='text-secondary-text text-xl mb-8 text-center max-w-96'>
                Review each practice session in detail and see your personalized feedback.             
                </h2>
                <CTAButton buttonText={"Learn more"}>
                </CTAButton>
              </div>
            </div>
            </div>
        </section>

        <section id='features4' className="flex items-center justify-center py-12 scroll-mt-16">
          <div className='flex flex-col items-center mt-16' >
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
            Then see what to work on.
            </h1>
            <div className='flex flex-col items-center'>
            </div>
            <div className='mt-8 flex flex-row items-center'>
               <div className='flex-col items-center mr-16'>
                <h2 className='text-secondary-text text-xl mb-8 text-center max-w-96'>
                Tailored and intelligent insights on your overall interview performance.                
                </h2>
                <CTAButton buttonText={"Learn more"}>
                </CTAButton>
              </div>
              <Image src="/about6.png" width={0} height={0} sizes='100vw' 
              style={{width: '32em', 
              height: "auto", 
              border: "2px solid #f3f3f3",
               borderRadius: "16px"}} alt='FEATURE 2'>
               </Image>
            </div>
            </div>
        </section>

        <section id='features5' className="flex items-center justify-center py-12 scroll-mt-16">
          <div className='flex flex-col items-center mt-16' >
            <h1 className='text-primary-text block text-5xl font-semibold w-7/12 mb-8 text-center leading-tight'>
            Be ready for every situation.
            </h1>
            <div className='flex flex-col items-center'>
            </div>
            <div className='mt-8 flex flex-row items-center'>
              <Image src="/about2.png" width={0} height={0} sizes='100vw' 
              style={{width: '32em', 
              height: "auto", 
              border: "2px solid #f3f3f3",
               borderRadius: "16px"}} alt='FEATURE 2'>
               </Image>
               <div className='flex-col items-center ml-16'>
                <h2 className='text-secondary-text text-xl mb-8 text-center max-w-96'>
                Practice with question sets tailored to all your target companies.
                </h2>
                <CTAButton buttonText={"Learn more"}>
                </CTAButton>
              </div>
            </div>
            </div>
        </section>

{/* Signup Section */}
      <section id="signup" className="flex items-center justify-center py-12 scroll-mt-16">
         <CTAButton buttonText={"Sign up for updates"}></CTAButton>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2E9BFF] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} MockMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}
