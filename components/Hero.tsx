'use client'

import { Button } from "@/components/ui/button";
import Form from "@/components/Form"
import { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [fade, setFade] = useState(true);

  const images = [
    '/images/project-lekki2.jpg',
    '/images/building-cons4.jpg',
    '/images/project-4.jpg',
    '/images/project-lekki1.jpg',
    '/images/building-cons2.jpg',
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        
        setTimeout(() => {
          setFade(true);
        }, 50);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <section className="bg-hero min-h-[410px] md:h-[600px] flex items-center text-white transition-opacity duration-1000 ease-in-out overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${images[currentIndex]}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        transition: fade ? 'opacity 1s ease-in-out' : 'opacity 0.5s ease-in-out',
        position: 'relative',
    }}>
      {!isMobile && (
        <style jsx>{`
          @media (min-width: 768px) {
            .bg-hero {
              background-attachment: fixed;
            }
          }
        `}</style>
      )}
      <div data-aos="zoom-in-up" className="container mx-auto px-8 md:text-left overflow-hidden">
        {/* <h1 className="text-3xl/[33px] lg:text-6xl font-extrabold uppercase md:mt-1 lg:ms-1">
          We build projects <br />
          that defy limitations
        </h1> */}

        <div className="main-text">
          <h1 className="main-header text-3xl/[33px] lg:text-6xl font-extrabold uppercase">WE BUILD RELIABLE 
            <div className="roller mt-3">
              <span id="rolltext">
                PROJECTS<br/>
                THAT DEFY<br/>
                LIMITATIONS<br/>
                <span id="spare-time">too much spare time?</span><br/>
              </span>
            </div>
          </h1>
            
        </div>

        <p className="mt-5 text-md md:text-lg max-w-2xl mx-auto md:mx-0 text-zinc-300">
          We have considerable experience in delivering outstanding services in Real Estate Development, Civil Engineering Services and Engineering Project Management.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-2">
          <Button className="bg-purple-900 w-40 md:w-auto h-9 text-white font-bold rounded-md uppercase px-8 py-3 cursor-pointer hover:bg-white hover:text-purple-900">
            <a href="#services">Our Services</a>
          </Button>
          <div className="border-white bg-white text-black rounded-md px-8 py-1.5 uppercase font-bold hover:bg-black hover:text-purple-900 hover:border-purple-900 w-50 h-9 relative">
            <span className="text-sm">
              Request A Quote
            </span>
            <span className="form-btn-sp absolute top-0 bottom-0 left-0 right-0 w-2.5">
              <Form />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;