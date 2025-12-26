'use client'
import Image from 'next/image';
import { Carousel, 
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, type CarouselApi, } from '@/components/ui/carousel';
import { useState, useEffect, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay"  
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "Vaib Project Limited delivered exceptional procurement and supply services for our recent farm and storage facilities expansion. Their ability to source high-quality materials at competitive costs, coupled with reliable and timely delivery, kept our project on schedule and within budget. Their professionalism and attention to detail in supply chain management are truly commendable.",
    author: "Mr Vijay Goyal",
    company: "Senior Manager QA/QC, Atlantic Shrimpers Ltd.",
    image: "/images/user.png",
    icon: <FaQuoteLeft  />,
  },
  // {
  //   quote: "Vaib Project are good in design, material cost, engineering and quality delivery of project. We engaged the at Iroko close, Osborn offshore estate project for the designing and development of our real estate project and they delivered to quality.",
  //   author: "Mr Ayo Odusanya",
  //   company: "Founder, VCL Properties Ltd",
  //   image: "/images/user.png",
  //   icon: <FaQuoteLeft  />,
  // },
  {
    quote: "Vaib Project Limited managed the full scope of our phase 4 warehouse complex—from construction to material procurement and supply. Their team ensured seamless coordination, high-quality materials were delivered on schedule, and the final build exceeded our expectations in both finish and budget management. A truly reliable partner from start to finish.",
    author: "Mr Majd",
    company: "Director, Dalal Steel Ltd(Nigeria)",
    image: "/images/user.png",
    icon: <FaQuoteLeft  />,
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="bg-testimonial bg-purple-900 relative z-0 overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <div data-aos="zoom-in-down" className="flex shrink flex-col md:flex-row">
          <div className="mx-8 pt-8 sm:pt-20 text-start text-white pb-12 md:w-1/2 lg:border-l-white lg:border-l-2">
            <h2 className="text-sm font-bold text-[#050F20] mb-3 uppercase">Read Testimonials</h2>
            <h3 className="text-5xl md:text-6xl font-bold">It's always a joy to hear that the work we do has positive reviews</h3>
          </div>

          <div data-aos="zoom-in" className="bg-[#050F20] md:mx-8 px-8 pt-8 sm:pt-20 flex flex-col md:w-1/2 lg:border-r-white lg:border-r-2">
            <Carousel 
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full max-w-4xl" 
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="">
                    <div className="bg-[#050F20] shadow-md h-full">
                      <div className="flex justify-between items-end relative">
                        <Image 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            width={60} 
                            height={60} 
                            className="rounded-full mr-4 object-cover"
                          />
                          <span className='flex justify-center items-center absolute -bottom-2 left-10 rounded-full bg-purple-900 h-[30px] w-[30px] text-white'>{testimonial.icon}</span>
                        
                        <div>
                          <p className="text-gray-300 mb-8 text-md md:text-xl md:w-40 lg:w-full">"{testimonial.quote}"</p>
                          <p className="font-bold text-white">{testimonial.author}</p>
                          <span className="text-sm text-purple-900">{testimonial.company}</span>
                        </div>
                      </div>
                          <div className="text-muted-foreground py-2 text-start text-[10px] mt-4 text-white">
                            {current} of {count}
                          </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
            </Carousel>
            
          </div>
        </div>
        
        

      </div>
    </section>
  );
};

export default Testimonials;