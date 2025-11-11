import { Suspense } from 'react';
import DelayedSuspense from '@/components/DelayedSuspense';
import type { Metadata } from "next";
import Projects from "@/components/Projects";
import { FaChevronRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Our Projects | Construction Portfolio & Engineering Achievements',
  description: 'Explore our portfolio of successful construction projects including commercial buildings, residential complexes, infrastructure development, and engineering marvels. See our quality workmanship in action.',
  keywords: 'construction projects, building portfolio, engineering projects, completed constructions, commercial buildings, residential projects, infrastructure development, construction gallery, project showcase, building achievements, engineering marvels, construction case studies, project portfolio',
  openGraph: {
    title: 'Construction Projects Portfolio',
    description: 'Browse our extensive portfolio of successful construction and engineering projects across various sectors.',
    type: 'website',
  },
};

const VaibProjects = () => {
    return (
        <DelayedSuspense delay={4000}>
        <Suspense fallback={null}>
            <main>
                <section className="bg-hero-pages h-[500px] text-white w-full overflow-hidden">
                    <div className="container mx-auto px-8 relative">
                        <div data-aos="fade-right" className="flex flex-col gap-5 absolute top-90">
                            <div className="flex gap-5 text-md uppercase font-bold text-gray-300">
                                <a href="/home" className="flex">Home <span className="mt-[3px]"><FaChevronRight /></span></a>
                                <a href="#" className="flex">Projects <span className="mt-[3px]"><FaChevronRight /></span></a>
                            </div>
                            <h2 className="text-5xl text-gray-200 uppercase font-bold">Projects</h2>
                        </div>
                    </div>
                </section>
                <Projects />
            </main>
            
        </Suspense>
        </DelayedSuspense>
    );
};

export default VaibProjects;