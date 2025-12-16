import Image from 'next/image';
import CraneIcon from './icons/CraneIcon';
import HammerIcon from './icons/HammerIcon';

const About = () => {
  return (
    <section className="py-30 bg-white md:pt-20 lg:pt-40 overflow-hidden">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-14 items-center md:items-start lg:items-center overflow-hidden">
        <div data-aos="fade-right" className="about-wr relative z-0 bg-[url('/images/about-1.jpeg')] bg-cover bg-center bg-no-repeat w-full h-[200px] lg:h-[600px]">
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
              We're in this business to deliver construction projects that defy all limitations through the application of improved standard engineering practices
            </p>
          </div>
          <p className="text-zinc-400 text-md lg:text-md">
            We are dedicated to our vision of becoming the leading construction and project management within our community and globally, delivering excellent projects all the way. <br />
            Our goal is to create affordable, functional and economical homes through excellent and professional services for all classes of people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;