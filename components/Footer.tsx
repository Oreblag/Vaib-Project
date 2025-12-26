import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

import { FaChevronRight } from "react-icons/fa";
import PrivacyPolicyDialog from './PrivacyPolicyDialog';

const Footer = () => {
  return (
    <footer className="bg-[#1b202d] text-gray-400 pt-12 overflow-hidden">
      <div className="container mx-auto px-8 pt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20 overflow-hidden">
        <div className='mb-8'>
          <h4 className="text-white font-bold text-lg mb-8 uppercase">About</h4>
          <p className="mb-8">We deliver reliable projects without limits.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white h-15 rounded-[50%] p-4 text-center bg-zinc-700 cursor-pointer"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-white h-15 rounded-[50%] p-4 text-center bg-zinc-700 cursor-pointer"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-white h-15 rounded-[50%] p-4 text-center bg-zinc-700 cursor-pointer"><Instagram /></a>
          </div>
        </div>
        <div className='mb-8'>
          <h4 className="text-white font-bold text-lg mb-4 uppercase">Links</h4>
          <ul>
            <li className="flex items-center mb-3 cursor-pointer">
              <FaChevronRight className="mr-2"/>  
              <a href="/projects" className="hover:text-white">Portfolio</a>
            </li>
            <li className="flex items-center mb-3 cursor-pointer">
              <FaChevronRight className="mr-2"/>  
              <a href="/about" className="hover:text-white">About Us</a></li>
            <li className="flex items-center mb-3 cursor-pointer">
              <FaChevronRight className="mr-2"/>  
            <a href="/services" className="hover:text-white">Services</a>
            </li>
            <li className="flex items-center mb-3 cursor-pointer">
              <FaChevronRight className="mr-2"/>  
            <PrivacyPolicyDialog />
            </li>
          </ul>
        </div>
        <div className='mb-8'>
          <h4 className="text-white font-bold text-lg mb-8 uppercase" id="question">Have a Question?</h4>
          <ul>
            <li className="flex items-start mb-3">
              <MapPin className="mr-3 mt-1 shrink-0" />
              <span>25D, Ade Ajayi Street, Zone A4, Ogudu, Lagos Nigeria.</span>
            </li>
            <li className="flex items-center mb-5">
              <Phone className="mr-3" />
              <a href="tel:+2348132684206" className="hover:text-white">+234 813 268 4206</a>
            </li>
            <li className="flex items-center">
              <Mail className="mr-3" />
              <a href="mailto:info@vaibproject.com" className="hover:text-white">info@vaibproject.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid bg-[#1b202d] mx-auto relative z-0  overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-[15px]  mt-16 bg-purple-900 md:bg-[#1b202d]">
            <div className="aside-stretch col-md-6  md:bg-purple-900   relative py-3 px-2 md:px-0 z-0 md:w-1/2 border-none">
              <p className='md:text-[11px] lg:text-[15px] xl:text-[17px]'>Copyright &copy; { new Date().getFullYear()}  All rights reserved | Vaib Project Limited</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;