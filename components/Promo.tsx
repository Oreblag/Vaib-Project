import { Button } from "@/components/ui/button";

const Promo = () => {
  return (
    <section className="bg-white py-16 mb-10 overflow-hidden">
      <div className="container mx-auto px-8 text-center overflow-hidden">
        <div data-aos="zoom-in" className="bg-promo w-full p-8 pb-10">
          <h2 className="text-2xl font-bold text-white uppercase mt-4 mb-4">Providing Personalized and High Quality Services</h2>
          <p className="text-lg text-zinc-400 mb-8">We can manage your dream construction projects and deliver the best quality</p>
          <Button className="bg-purple-900 text-white font-bold uppercase rounded-md px-5 py-6 cursor-pointer"><a href="#question">Talk to us</a></Button>
        </div>
      </div>
    </section>
  );
};

export default Promo;