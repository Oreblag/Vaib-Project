import { Suspense } from 'react';
import DelayedSuspense from '@/components/DelayedSuspense';
import type { Metadata } from "next";
import Services from "@/components/Services";
import { FaChevronRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Construction Services | Commercial & Residential Building Solutions',
  description: 'Comprehensive construction services including commercial building, residential construction, engineering solutions, project management, and sustainable building practices. Your trusted construction partner.',
  keywords: 'construction services, commercial building, residential construction, engineering solutions, project management, building contractors, construction company services, industrial construction, civil engineering, structural engineering, building renovation, construction maintenance, sustainable construction, green building',
  openGraph: {
    title: 'Professional Construction Services',
    description: 'End-to-end construction and engineering services for commercial, residential, and industrial projects.',
    type: 'website',
  },
};

const OurServices = () => {
    return (
    <DelayedSuspense delay={4000}>
      <Suspense fallback={null}>
        <main className="bg-black">
            <section className="bg-hero-pages h-[500px] text-white w-full overflow-hidden">
                <div className="container mx-auto px-8 relative">
                    <div data-aos="fade-right" className="flex flex-col gap-5 absolute top-90">
                        <div className="flex gap-5 text-md uppercase font-bold text-gray-300">
                            <a href="/home" className="flex">Home <span className="mt-[3px]"><FaChevronRight /></span></a>
                            <a href="#" className="flex">Services <span className="mt-[3px]"><FaChevronRight /></span></a>
                        </div>
                        <h2 className="text-5xl text-gray-200 uppercase font-bold">Services</h2>
                    </div>
                </div>
            </section>
            <Services />            
        </main>
        
      </Suspense>
    </DelayedSuspense>

    );
};

export default OurServices;