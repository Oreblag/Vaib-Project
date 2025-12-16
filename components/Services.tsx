
import Image from "next/image";
import RealEstateIcon from "./icons/RealEstateIcon";
import WorkerIcon from "./icons/WorkerIcon";
import ArchitectIcon from "./icons/ArchitectIcon";
import CivilIcon from "./icons/CivilIcon";
import ContractorIcon from "./icons/ContractorIcon";
import EngineerIcon from "./icons/EngineerIcon";
import CraneIcon from "./icons/CraneIcon";
import HammerIcon from "./icons/HammerIcon";

const services = [
  { 
    image: {
      src: "/images/building-cons1.jpg",
      width: 30,
      height: 30,
    },
    icon: <ArchitectIcon fill="#581c87" />,
    title: "Building Construction",
    description:
      "We follow best practices in all our building projects. We can handle any kind of projects regardless of the size.",
  },
  {
    image: {
      src: "/images/services-2.jpg",
      width: 30,
      height: 30,
    },
    icon: <ContractorIcon fill="#581c87" />,
    title: "Architecture & Structural Designs",
    description:
      "Production of working drawings for buildings, factories, office blocks, residential apartments, hotels...",
  },
  {
    image: {
      src: "/images/services-3.jpg",
      width: 30,
      height: 30,
    },
    icon: <CraneIcon fill="#581c87" />,
    title: "Infrastructure & Civil Engineering",
    description:
      "Our team of professionals are experts in designing and developing quality infrastructures and engineering works",
  },
  {
    image: {
      src: "/images/services-4.jpg",
      width: 30,
      height: 30,
    },
    icon: <ArchitectIcon fill="#581c87" />,
    title: "Project Management",
    description:
      "Our project management and project approach is second to none in the industry",
  },
  {
    image: {
      src: "/images/services-5.jpg",
      width: 30,
      height: 30,
    },
    icon: <CraneIcon fill="#581c87" />,
    title: "General Supplies & Procurement",
    description:
      "General Supplies and Procurement delivering quality products and efficient procurement solutions for construction and infrastructure projects and businesses across mutiple sectors",
  },
  {
    image: {
      src: "/images/building-cons6.jpg",
      width: 30,
      height: 30,
    },
    icon: <RealEstateIcon fill="#581c87" />,
    title: "Real Estates Development",
    description:
      "We pride ourselves with our robust knowledge in the Real Estate sector to develop quality projects",
  },
];

const Services = () => {
  return (
    <section className="bg-services py-20 bg-white relative overflow-hidden" id="services">
      <div className="container mx-auto px-8 overflow-hidden">
        <div data-aos="fade-up" className="text-center mb-25">
          <h2 className="text-sm font-bold text-purple-900 mb-2 uppercase">Our Services</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 whitespace-nowrap">
            Services We Offer 
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15 p-2 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card relative rounded-sm"
              data-aos="fade-down"
            >
              <div className="bg-white mb-8 px-2 pt-3 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-[200px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${service.image.src})` }}
                >
                </div>
                <div className="w-full text-center py-3 px-2 relative">
      
                    <div className="mx-auto mt-[-65px] text-primary flex justify-center items-center mb-4 w-[90px] h-[90px] rounded-[50%] bg-white shadow-2xl hover:bg-purple-900 hover:fill-white cursor-pointer">{service.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 mx-auto break-word whitespace-pre-wrap">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-center text-xl mb-10 px-2">{service.description}</p>
                    <div className="absolute left-0 right-0 bottom-[-15px] mx-auto">
                      <a
                        href="#"
                        className="bg-zinc-900 rounded-sm text-white font-semibold w-[80%] mx-auto py-4 px-10 uppercase shadow-lg hover:bg-purple-900"
                      >
                        Read more
                      </a>

                    </div>

                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
