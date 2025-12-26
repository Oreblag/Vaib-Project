import { Suspense } from 'react';
import DelayedSuspense from '@/components/DelayedSuspense';
import Image from "next/image";
import CTA from "@/components/CTA";
import Promo from "@/components/Promo";
import About from "@/components/About";
import type { Metadata } from "next";
import { FaChevronRight } from "react-icons/fa";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: 'About Us | Vaib Project Limited',
  description: 'With over 10 years of excellence in construction and engineering, we deliver innovative building solutions. Learn about our commitment to quality, safety, and sustainable construction practices.',
  keywords: 'construction company about, building contractors, engineering firm history, construction expertise, building company team, construction experience, engineering professionals, construction management, building solutions, construction quality, construction safety, sustainable building',
  openGraph: {
    title: 'About Our Construction Company',
    description: 'Leading building and engineering construction experts with decades of experience in delivering quality projects.',
    type: 'website',
  },
};

const teams = [
  { 
    image: {
      src: "/images/oni.jpg",
      
    },
    
    name: "Oluwole Oni",
    position: "Co-Founder/Construction Manager",
    description:
      "A Talented and Goal Driven, target oriented executive with systematic approach and more than ten (10) years of Experience in Construction Management and International trade/Logistics management. He Possesses an excellent cross functional management skill including a superior grasp on technical areas of Building and civil engineering work.",
  },
  {
    image: {
      src: "/images/segun.jpg",
      
    },
    
    name: "Oluwasegun Olawumi",
    position: "Co-Founder/Snr. Project Engineer",
    description:
      "Segun Olawumi is a Civil Engineer with 9 years’ construction experience in building technology, earthworks, and construction management.Have been involved in remarkable sand dredging and land reclamation project around the world. Currently a Project Planner at PCL Construction, Winnipeg; and also a member of Engineers and Geoscientists Manitoba.",
  },
  {
    image: {
      src: "/images/solomon.jpg",
      
    },
    
    name: "Solomon Orepitan",
    position: "Co-Founder/Project Manager/QS",
    description:
      "Quantity Surveyor and Certified Project Manager with nearly 10 years’ experience across consulting, construction, and banking sector, shows strong expertise in cost management, project delivery, and commercial leadership. University of Lagos graduate; full member of NIQS, MQSi, PMI, and Associate Member of RICS.",
  },
  {
    image: {
      src: "/images/coker.jpg",
      
    },
    
    name: "Coker Oladiran",
    position: "Co-Founder/Structural Engineer",
    description:
      "Passionate and Goal-driven individual with 9+ years’ of experience in construction management, techniques and international trade/logistics, with strong cross-functional leadership and technical expertise in building and civil engineering.",
  },
  {
    image: {
      src: "/images/user.png",
      
    },
    
    name: "Architect",
    position: "Partner/Lead Project Architect",
    description:
      "Passionate and Goal-driven individual with 9+ years’ of experience in construction management, techniques and international trade/logistics, with strong cross-functional leadership and technical expertise in building and civil engineering.",
  },
  
];


const AboutUs = () => {
    return (

      <DelayedSuspense delay={4000}>
        <Suspense fallback={null}>
          <main className="bg-black">
              <section className="bg-hero-pages h-[500px] text-white w-full overflow-hidden">
                  <div className="container mx-auto px-8 relative">
                      <div data-aos="fade-right" className="flex flex-col gap-5 absolute top-90">
                          <div className="flex gap-5 text-md uppercase font-bold text-gray-300">
                              <a href="/home" className="flex">Home <span className="mt-[3px]"><FaChevronRight /></span></a>
                              <a href="#" className="flex">About Us <span className="mt-[3px]"><FaChevronRight /></span></a>
                          </div>
                          <h2 className="text-5xl text-gray-200 uppercase font-bold">About Us</h2>
                      </div>
                  </div>
              </section>
          </main>
          <main>    
              <About />
              <Promo />
              <CTA  />
              <section>
                  <div className="container mx-auto px-8 mb-20 overflow-hidden">
                      <div className="text-center pt-8 mt-20">
                          <p data-aos="fade-up" className="uppercase text-sm text-purple-900 mb-5  text-center font-bold">Our Team</p>
                          <h2 data-aos="fade-down" className="text-xl md:text-2xl lg:text-3xl text-center mb-10 text-black font-bold">Our Team</h2>
                          <div className="p-4 bg-white">
                              <div className="flex flex-wrap shrink justify-center items-center gap-5">
                                  {teams.map((team, index) => (
                                      <div data-aos="fade-down" className="flip-card cursor-pointer"
                                          key={index}>
                                          <div className="flip-card-inner">
                                              <div className="flip-card-front " style={{ backgroundImage: `url(${team.image.src})`, backgroundSize: "cover", backgroundPosition: "center",
                                              backgroundRepeat: "no-repeat"  }}>
                                                  <div className="text-start absolute bottom-0 left-0 ms-2 sm:ms-5 md:ms-5 mb-5">
                                                      <h4 className="text-md font-bold text-gray-100">{team.name}</h4>
                                                      <p className="text-[14px] text-gray-100">{team.position}</p>
                                                  </div>
                                              </div>
                                              <div className="flip-card-back bg-purple-900 px-3">
                                                  <p className="text-sm sm:text-[8px] md:text-[14px] lg:text-[13px] xl:text-[14px]">{team.description}</p>
                                                  <div className="flex gap-3 mt-8">
                                                      <Image 
                                                      src={team.image.src}
                                                      alt={team.name}
                                                      width={50} 
                                                      height={50}
                                                      className="object-cover rounded-sm" />
                                                      <div className="text-start">
                                                          <h4 className="text-md font-bold text-gray-100">{team.name}</h4>
                                                          <p className="text-[14px] text-gray-100">{team.position}</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                              
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <Testimonials />
          </main>
          
        </Suspense>
      </DelayedSuspense>

    );
};

export default AboutUs;