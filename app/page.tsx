import { Suspense } from 'react';
import DelayedSuspense from '@/components/DelayedSuspense';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Promo from "@/components/Promo";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}