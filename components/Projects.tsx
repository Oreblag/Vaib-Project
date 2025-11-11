'use client'
import Image from 'next/image';
import { MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const projects = [
  {
    image: {
      src: "https://ext.same-assets.com/3457767499/257645877.jpeg"
    },
    category: 'Church Building',
    title: 'RCCG Destiny Sanctuary',
    icon: <MapPin size={13} fill='#581c87'/>,
    location: 'Egbeda, Lagos, Nigeria',
  },
  {
    image: {
      src: "https://ext.same-assets.com/3457767499/4269802378.jpeg"
    },
    category: 'Supermarket',
    title: 'De Prince Supermarket',
    icon: <MapPin size={15} fill='#581c87'/>,
    location: 'Lekki, Lagos, Nigeria',
  },
  {
    image: {
      src: "https://ext.same-assets.com/3457767499/3288026530.jpeg"
    },
    category: 'School Building',
    title: 'Maryland Catholic Sec. School',
    icon: <MapPin size={15} fill='#581c87'/>,
    location: 'Maryland, Lagos, Nigeria',
  },
  {
    image: {
      src: "https://ext.same-assets.com/3457767499/2808532192.jpeg"
    },
    category: 'Supermarket',
    title: 'Prince Ebeano Supermarket',
    icon: <MapPin size={15} fill='#581c87'/>,
    location: 'Lekki, Lagos, Nigeria',
  },
  {
    image: {
      src: "https://ext.same-assets.com/3457767499/2656573388.jpeg"
    },
    category: 'Supermarket',
    title: 'Magboro Mall',
    icon: <MapPin size={15} fill='#581c87'/>,
    location: 'Magboro, Ogun State, Nigeria',
  },
  {
    image: {
      src: "https://ext.same-assets.com/3457767499/2327935262.jpeg"
    },
    category: 'Church Building',
    title: 'RCCG Maryland',
    icon: <MapPin size={15} fill='#581c87'/>,
    location: 'Maryland, Lagos, Nigeria',
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 mb-10 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div data-aos="fade-down" className="text-center mb-20">
          <h2 className="text-sm text-purple-900 font-bold text-primary mb-2 uppercase">Our Work catalog</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Recent Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative w-full h-[250px] bg-amber-600 text-start py-3 px-2 mb-8 cursor-pointer"
              style={{ 
                backgroundImage: `url(${project.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              onClick={() => openModal(index)}
              data-aos="fade-down"
            >
              {/* Pop-up button */}
              <Button 
                className="flex mx-auto text-white text-4xl font-bold justify-center items-center mt-20 w-[70px] h-[70px] rounded-[2%] bg-purple-900 shadow-2xl hover:bg-purple-800 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => {
                  e.stopPropagation(); 
                  openModal(index);
                }}
              >
                +
              </Button>
              
              {/* Description card */}
              <div 
                className="descr-card absolute left-0 right-0 bottom-[-75px] mx-auto bg-white w-[80%] p-4 shadow-lg rounded-[2%] group-hover:bg-purple-900 group-hover:text-white transition-colors duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.closest('.group')?.classList.add('force-hover');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.closest('.group')?.classList.remove('force-hover');
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <h1 className='text-purple-900 text-sm font-bold rounded-[2%] p-2 mb-2 bg-zinc-200 w-fit group-hover:bg-white group-hover:text-purple-900 transition-colors duration-300'>
                  {project.category}
                </h1>
                <h4 className="text-sm font-bold text-gray-800 mb-2 mx-auto uppercase break-word group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h4>
                <div className="flex gap-1 justify-start items-center">
                  <span className="group-hover:text-white transition-colors duration-300">
                    <MapPin size={15} fill='#581c87' className="group-hover:fill-white transition-colors duration-300" />
                  </span>
                  <p className="text-gray-600 text-[12px] group-hover:text-white transition-colors duration-300">
                    {project.location}
                  </p>
                </div>
              </div>

              <style jsx>{`
                .group.force-hover .opacity-0 {
                  opacity: 100;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-gray-800">
                {projects[currentProjectIndex].title}
              </h3>
              <Button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full"
                variant="ghost"
              >
                <X size={24} />
              </Button>
            </div>
            
            {/* Carousel */}
            <div className="relative">
              <div className="relative h-96 w-full">
                <Image
                  src={projects[currentProjectIndex].image.src}
                  alt={projects[currentProjectIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnail navigation */}
            <div className="p-4">
              <div className="flex gap-2 overflow-x-auto py-2">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`shrink-0 w-20 h-20 relative rounded-md overflow-hidden ${
                      index === currentProjectIndex ? 'ring-2 ring-purple-900' : 'opacity-60'
                    } hover:opacity-100 transition-all duration-200`}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Project info in modal */}
              <div className="mt-4">
                <div className="flex gap-1 items-center mb-2">
                  <MapPin size={13} fill='#581c87'/>
                  <p className="text-gray-600 text-sm">
                    {projects[currentProjectIndex].location}
                  </p>
                </div>
                <span className="text-purple-900 text-sm font-bold rounded-[2%] p-2 bg-zinc-200 w-fit">
                  {projects[currentProjectIndex].category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;