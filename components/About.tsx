import Image from 'next/image';
import CraneIcon from './icons/CraneIcon';
import HammerIcon from './icons/HammerIcon';

const About = () => {
  return (
    <section className="py-30 bg-white md:pt-20 lg:pt-40 overflow-hidden">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-14 items-center md:items-start lg:items-center overflow-hidden">
        <div data-aos="fade-right" className="about-wr relative z-0 bg-[url('/images/project-lekki2.jpg')] bg-cover bg-center bg-no-repeat w-full h-[200px] lg:h-[600px]">
          <div className="bg-purple-900 mr-0 flex justify-center items-center absolute top-[20%] right-0 w-[90px] h-[120px] shadow-lg lg:top-[40%] lg:mr-[-45px]">
            <CraneIcon fill="white" />
          </div>
        </div>

        <div data-aos="fade-left" className='md:mt-18 lg:h-full'>
          <h2 className="text-sm font-bold text-purple-900 uppercase mb-2 lg:mt-10 xl:mt-27">Welcome Vaib</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">Vaib - Construction & Project Management Company</h3>
          <div className="flex wrap gap-3 mb-4">
            <div className="w-[100px]">
              <HammerIcon fill="#581c87" />
            </div>
            <p className="text-gray-600 font-bold md:text-2xl mb-3">
              We deliver high-quality construction and project management solutions that exceed limitations through the application of advanced engineering standards and industry best practices.
            </p>
          </div>
          <p className="text-zinc-400 text-md lg:text-md">
            We are committed to becoming a leading construction and project management company within our community and beyond, delivering exceptional projects with consistency and excellence. Our focus is on developing affordable, functional, and economically viable solutions through professional, innovative, and client-focused services across all market segments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;