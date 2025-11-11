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
                We ensure that all aspects of our operations comply with our clients standards as well as all Government rules and regulations affecting our business and operations.
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
                We understand the Quality Assurance requirements of our clients and are totally committed to quality in completion and cost as primary objectives.
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
                We pay key attention to the protection of the environment during the course of our business and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;