import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Facebook, Twitter, Instagram, Dribbble } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/"><p className="text-gray-800 hover:text-primary">Home</p></Link>
          <Link href="/about"><p className="text-gray-800 hover:text-primary">About</p></Link>
          <Link href="/services"><p className="text-gray-800 hover:text-primary">Services</p></Link>
          <Link href="/projects"><p className="text-gray-800 hover:text-primary">Projects</p></Link>
          <div className="flex justify-around pt-4">
            <a href="#" className="text-gray-600 hover:text-primary"><Facebook size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-primary"><Twitter size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-primary"><Instagram size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-primary"><Dribbble size={24} /></a>
          </div>
          <Button className="bg-primary text-white rounded-full mt-4">Inquire Now</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;