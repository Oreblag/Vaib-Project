import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { FaCalendarAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsFillChatFill } from "react-icons/bs";

import { HiMiniCalendarDateRange } from "react-icons/hi2";

const blogPosts = [
  {
    image: 'https://ext.same-assets.com/3457767499/551293283.jpeg',
    date: 'Sept. 06, 2020',
    author: 'Admin',
    comments: 3,
    title: 'We place high value on safety of life & properties',
  },
  {
    image: 'https://ext.same-assets.com/3457767499/531992198.jpeg',
    date: 'Sept. 06, 2020',
    author: 'Admin',
    comments: 3,
    title: 'Our Quality Control Policy',
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-white mt-10 mb-20 overflow-hidden">
      <div className="container mx-auto px-8">
        <div data-aos="zoom-in-down" className="text-center mb-20">
          <h2 className="text-sm font-bold text-purple-900 mb-2 uppercase">Our Blog</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Latest Updates</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className='relative z-0 pb-10 bg-white shadow-sm' data-aos="fade-down">
              <Image src={post.image} alt={post.title} width={600} height={400} className="rounded-t-sm z-0" />
              <div className="absolute flex items-center text-sm text-gray-200 mb-5 -mt-8.5 ms-2 sm:ms-5 md:ms-10 z-1 bg-purple-900 w-60 sm:w-fit p-2 rounded-[2]">
                <span className='text-[12px]'><HiMiniCalendarDateRange size={16} className="inline mr-1"/></span>
                <span className='text-[12px]'>{post.date}</span>
                <span className="mx-2 text-[12px]">
                  <RiAdminFill size={16} className="inline mr-1"/>
                </span>
                <span className='text-[12px]'>{post.author}</span>
                <span className="mx-2 text-[12px]">|</span>
                <BsFillChatFill size={16} className="inline mr-1" />
                <span className='text-[12px]'>{post.comments}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mt-3 ms-2 sm:ms-5 md:ms-10 mb-5 mr-3 hover:text-primary transition-colors">
                <a href="#">{post.title}</a>
              </h4>
              <a href="#" className="text-white p-3 font-semibold hover:underline bg-black rounded-sm uppercase ms-2 sm:ms-5 md:ms-10">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;