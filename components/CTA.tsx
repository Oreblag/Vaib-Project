"use client";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";

const CTA = () => {

   const [count1, setCount1] = useState(0);
   const [count2, setCount2] = useState(0);

    useEffect(() => {
      const interval1 = setInterval(() => {
        setCount1(prevCount => {
          if (prevCount >= 50) {
            clearInterval(interval1);
            return 50;
          }
          return prevCount + 1;
        });
      }, 200);

      const interval2 = setInterval(() => {
        setCount2(prevCount => {
          if (prevCount >= 25) {
            clearInterval(interval2);
            return 25;
          }
          return prevCount + 1;
        });
      }, 390);
      return () => { 
        clearInterval(interval1); 
        clearInterval(interval2);};
    }, []);


    return (
      <section
        className="cta-bg mb-8 md:bg-black bg-cover bg-center text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-8 grid md:grid-cols-2 items-center overflow-hidden">
          <div data-aos="fade-right" className="bg-black px-3 md:px-0 md:border-l-white md:border-l-2 py-20">
            <h2 className="text-sm font-bold uppercase mb-2 text-purple-900">Vaib Project Limited</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Best Provider for Construction Services</h3>
            <p className="mb-6 text-purple-900">
              We pride ourselves in the delivery of industry standard projects. We follow international best practices to make this happen.
            </p>
            <a href="#" className="text-white font-semibold">
              Let's handle your next construction project!
            </a>
          </div>
          <div data-aos="fade-left" className="">
            <div className="flex flex-wrap flex-col gap-2 md:w-60 lg:w-80">
              <div className="flex justify-start items-center bg-purple-900 py-5 md:py-6 px-5 gap-4">
                <span className="">
                  <FaBuildingCircleCheck className="text-white text-[40px] sm:text-[50px]" />
                </span>
                <div className="">
                  <p className="text-xl md:text-3xl font-bold md:mb-2">{count1}+</p>
                  <p className="md:font-semibold uppercase text-[11px]">Project Completed</p>
                </div>
              </div>
              <div className="flex justify-start items-center bg-white py-5 md:py-6 px-5 gap-4">
                  <span className="">
                    <FaPersonCircleCheck className="text-black text-[40px] sm:text-[50px]"  />
                  </span>
                  <div className="">
                    <p className="text-xl md:text-3xl font-bold text-black md:mb-2">{count2}+</p>
                    <p className="md:font-semibold text-zinc-800 uppercase text-[11px]">Happy Customers</p>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
};
  
export default CTA;