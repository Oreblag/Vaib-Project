import { Button } from "@/components/ui/button";
import Form from "@/components/Form"

const Hero = () => {
  return (
    <section className="bg-hero bg-cover bg-center h-[410px] md:h-[600px] flex items-center text-white overflow-hidden">
      <div data-aos="zoom-in-up" className="container mx-auto px-8 md:text-left overflow-hidden">
        <h1 className="text-3xl/[33px] lg:text-6xl font-extrabold uppercase md:mt-1 lg:ms-1">
          We build projects <br />
          that defy limitations
        </h1>
        <p className="mt-5 text-md md:text-lg max-w-2xl mx-auto md:mx-0 text-zinc-300">
          We have considerable experience in delivering outstanding services in Real Estate Development, Civil Engineering Services and Engineering Project Management.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-2">
          <Button className="bg-purple-900 w-40 md:w-auto h-9 text-white font-bold rounded-md uppercase px-8 py-3 cursor-pointer hover:bg-white hover:text-purple-900">
            <a href="#services">Our Services</a>
          </Button>
          <div className="border-white bg-white text-black rounded-md px-8 py-1.5 uppercase font-bold hover:bg-black hover:text-purple-900 hover:border-purple-900 w-50 h-9 relative">
            <span className="text-sm">
              Request A Quote
            </span>
            <span className="form-btn-sp absolute top-0 bottom-0 left-0 right-0 w-10">
              <Form />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;