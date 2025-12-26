import { Shield, Star, Leaf } from 'lucide-react';
import Image from 'next/image';
import EngineerIcon from './icons/EngineerIcon';
import CivilIcon from './icons/CivilIcon';
import ContractorIcon from './icons/ContractorIcon';

const Features = () => {
  return (
    <section className="bg-gray-50 pb-20 lg:mb-50">
      <div className="container mx-auto px-8 lg:relative">
       <div className="flex flex-col lg:flex-row lg:absolute lg:top-[-50] lg:z-1 lg:w-[93.5%] xl:w-[95%] 2xl:w-[95.5%]">
          <div data-aos="flip-down" className="feat-bg bg-zinc-700 flex gap-12 w-full p-4 pb-6 md:pr-8 md:pb-20 lg:pb-20 xl:pb-40 xl:pr-20">
            <div className="w-15">
              <div className=" bg-purple-900 text-white rounded-full w-22 h-22 flex items-center justify-center mx-auto">
                <EngineerIcon fill="white" />
                {/* <Image src="/icons/engineer.svg" alt="engineer" 
                  width={33}
                  height={33}
                /> */}
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-bold mb-2">Standard</h3>
              <p className="text-gray-600">
                We uphold the highest professional standards by ensuring full compliance with client requirements, industry best practices, and all applicable government laws and regulations across our operations.
              </p>
            </div>
          </div>
          <div data-aos="flip-down" className="feat-b2g bg-gray-50 flex gap-12 w-full p-4 pb-6 md:pr-8 md:pb-20 lg:pb-20 xl:pb-40 xl:pr-20">
            <div className="w-15">
              <div className="bg-gray-200 text-white rounded-full w-22 h-22 flex items-center justify-center mx-auto">
                <CivilIcon fill="#581c87" /> 
              </div>
            </div>
            <div className="">
              <h3 className="text-white text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-200">
                We are fully committed to delivering exceptional quality, with timely project completion and cost efficiency as our core objectives, consistently meeting and exceeding client expectations.
              </p>
            </div>
          </div>
          <div data-aos="flip-down" className="feat-bg bg-zinc-700 flex gap-12 w-full p-4 pb-6 md:pr-8 md:pb-20 lg:pb-20 xl:pb-40 xl:pr-20">
            <div className="w-15">
              <div className="bg-purple-900 text-white rounded-full w-22 h-22 flex items-center justify-center mx-auto">
                <ContractorIcon fill='white' />
              </div>
            </div>
            <div className="">
              <h3 className="text-md sm:text-xl font-bold mb-2">Environmental Protection & Sustainability</h3>
              <p className="text-gray-600">
                We are committed to responsible and sustainable operations, actively protecting the environment and minimizing environmental impact across all stages of our business activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;