import { Suspense } from 'react';
import DelayedSuspense from '@/components/DelayedSuspense';
import Image from "next/image";
import type { Metadata } from "next";
import { FaChevronRight } from "react-icons/fa";

export const metadata = {
  title: 'Our Team | Vaib Project Limited',
  description: 'Meet the talented team behind Vaib Project Limited. Learn about our experts, leadership, and the people driving innovation forward.',
  keywords: 'team, employees, leadership, experts, staff, professionals, company team, about us',
  authors: [{ name: 'Vaib Project Limited' }],
  openGraph: {
    title: 'Our Team | Vaib Project Limited',
    description: 'Meet the talented team behind Vaib Project Limited. Get to know our experts and leadership.',
    url: 'https://vaibproject.com/teams',
    siteName: 'Vaib Project Limited',
    images: [
      {
        url: '/images/team-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Vaib Project Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Vaib Project Limited',
    description: 'Meet the talented team behind Vaib Project Limited.',
    images: ['/images/team-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


const teams = [
  { 
    image: {
      src: "https://ontopbuilders.com/images/services-1.jpg",
      
    },
    
    name: "Olusaola Mathew Orikoku",
    position: "Managing Director",
    description:
      "A Goal Driven and target oriented executive with systematic approach and more than fiften (15) years of Experience in Construction Management and International trade/Logistics management. He Possesses an excellent cross functional management skill including a superior grasp on technical areas of Building and civil engineering work.",
  },
  {
    image: {
      src: "https://ontopbuilders.com/images/services-2.jpg",
      
    },
    
    name: "Salawudee Kayum Adeshola",
    position: "Managing Director",
    description:
      "A Goal Driven and target oriented executive with systematic approach and more than fiften (15) years of Experience in Construction Management and International trade/Logistics management. He Possesses an excellent cross functional management skill including a superior grasp on technical areas of Building and civil engineering work.",
  },
  {
    image: {
      src: "https://ontopbuilders.com/images/services-3.jpg",
      
    },
    
    name: "Olusaola Mathew Orikoku",
    position: "Managing Director",
    description:
      "A Goal Driven and target oriented executive with systematic approach and more than fiften (15) years of Experience in Construction Management and International trade/Logistics management. He Possesses an excellent cross functional management skill including a superior grasp on technical areas of Building and civil engineering work.",
  },
  {
    image: {
      src: "https://ontopbuilders.com/images/services-4.jpg",
      
    },
    
    name: "Olusaola Mathew Orikoku",
    position: "Managing Director",
    description:
      "A Goal Driven and target oriented executive with systematic approach and more than fiften (15) years of Experience in Construction Management and International trade/Logistics management. He Possesses an excellent cross functional management skill including a superior grasp on technical areas of Building and civil engineering work.",
  },
  {
    image: {
      src: "https://ontopbuilders.com/images/services-5.jpg",
      
    },
    
    name: "Olusaola Mathew Orikoku",
    position: "Managing Director",
    description:
      "A Goal Driven and target oriented executive with systematic approach and more than fiften (15) years of Experience in Construction Management and International trade/Logistics management. He Possesses an excellent cross functional management skill including a superior grasp on technical areas of Building and civil engineering work.",
  },
  {
    image: {
      src: "https://ontopbuilders.com/images/services-6.jpg",
      
    },
    
    name: "Olusaola Mathew Orikoku",
    position: "Managing Director",
    description:
      "A Goal Driven and target oriented executive with systematic approach and more than fiften (15) years of Experience in Construction Management and International trade/Logistics management. He Possesses an excellent cross functional management skill including a superior grasp on technical areas of Building and civil engineering work.",
  },
];




const Teams = () => {
    return (

      <DelayedSuspense delay={4000}>
        <Suspense fallback={null}>
          <main className="bg-black">
              <section className="bg-hero-pages h-[500px] text-white w-full overflow-hidden">
                  <div className="container mx-auto px-8 relative">
                      <div data-aos="fade-right" className="flex flex-col gap-5 absolute top-90">
                          <div className="flex gap-5 text-md uppercase font-bold text-gray-300">
                              <a href="/home" className="flex">Home <span className="mt-[3px]"><FaChevronRight /></span></a>
                              <a href="#" className="flex">Our Team <span className="mt-[3px]"><FaChevronRight /></span></a>
                          </div>
                          <h2 className="text-5xl text-gray-200 uppercase font-bold">Our Team</h2>
                      </div>
                  </div>
              </section>

              <section className='bg-white'>
                  <div className="container mx-auto px-8 pb-20 overflow-hidden">
                      <div className="text-center pt-8 mt-20">
                          <p data-aos="fade-up" className="uppercase text-sm text-purple-900 mb-5  text-center font-bold">Our Team</p>
                          <h2 data-aos="fade-down" className="text-xl md:text-2xl lg:text-3xl text-center mb-10 text-black font-bold">Our Team</h2>
                          <div className="p-4 bg-white">
                              <div className="flex flex-wrap shrink justify-center items-center gap-5">
                                  {teams.map((team, index) => (
                                      <div data-aos="fade-down" className="flip-card"
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
                                                  <p className="text-sm sm:text-[17px] md:text-[17px] lg:text-[13px] xl:text-[17px]">{team.description}</p>
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

          </main>
          
        </Suspense>
      </DelayedSuspense>

    );
};

export default Teams;