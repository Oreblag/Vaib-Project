import { Suspense } from 'react';
import DelayedSuspense from '@/components/DelayedSuspense';
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Promo from "@/components/Promo";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home",
  description: "Building Projects That Defy Limitations.",
  keywords: "study abroad, international education, university applications, visa assistance, scholarships, student placement",
};

const Home = () => {
    return (
        <DelayedSuspense delay={4000}>
        <Suspense fallback={null}>
            <main>
                <Hero />
                <Features />
                <About />
                <Promo />
                <Services />
                <CTA />
                <Projects />
                <Testimonials />
                <Blog />
            </main>
            
        </Suspense>
        </DelayedSuspense>
    );
};

export default Home;
        
        