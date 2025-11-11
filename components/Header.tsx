import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Dribbble } from "lucide-react";

import { GrSend } from "react-icons/gr";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Image from 'next/image';
import Form from "@/components/Form";

const Header = () => {
  return (
    <header className="bg-white">
        <div className="w-full bg-black">
            <div className="hearder-bar container mx-auto px-8 bg-black flex justify-space-between flex-col gap-2 py-3 sm:flex-row sm:justify-between overflow-x-hidden">
                <div className="flex justify-space-between gap-2 flex-col sm:flex-row sm:gap-4">
                    <div className="flex gap-2 justify-center items-center">
                        <span>
                            <GrSend color="purple" size={25} />
                        </span>
                        <p className="text-slate-100">
                            info@vaibproject.com
                        </p>
                    </div>
                    <div className="flex gap-1 justify-center align-center">
                        <Button className="header-socialbtn rounded-full border bg-slate-700 p-2">
                            <FaFacebookF color="purple" size={18} />
                        </Button>
                        <Button className="header-socialbtn rounded-full border bg-slate-700 p-2">
                            <FaXTwitter color="purple" size={18} />
                        </Button>
                        <Button className="header-socialbtn rounded-full border bg-slate-700 p-2">
                            <FaInstagram color="purple" size={18} />
                        </Button>
                        <Button className="header-socialbtn rounded-full border bg-slate-700 p-2">
                            <FaLinkedin color="purple" size={18} />
                        </Button>
                    </div>
            
                </div>
                <div className="md:w-1/2 lg:justify-self-end lg:ms-64 xl:ms-128 2xl:ms-192">
                    <div className="header-inq-btn p-2 font-bold bg-purple-900 rounded-full md:w-40 h-10 sm:rounded-lg relative">
                        <span className="inq-btn-span absolute text-center top-2 bottom-0 left-18">Inquire Now</span>
                        <Form />
                        <span className="absolute top-0 bottom-0"><Form /></span>
                    </div>

                </div>
            </div>
        </div>

        <div className="bg-white w-full">
            <div className="contact-cont container mx-auto px-8 bg-white flex justify-space-between flex-col gap-2 py-10 sm:flex-row sm:justify-between sm:gap-10">
            
                <div data-aos="fade-right" className="flex mb-3 gap-3 sm:gap-2">
                    <span className="w-14">
                        <Image src="/images/vaib-logo.jpg" alt="vaib-logo" 
                        width={55}
                        height={55}
                        className="sm:h-14 sm:w-14" />
                    </span>
                    <p className="text-purple-900  text-[10px] font-bold sm:whitespace-nowrap">
                        <span className="text-3xl font-extrabold text-slate-900">VAIB</span> <br />
                        PROJECT LIMITED
                    </p>
                </div>
  

                <div data-aos="zoom-in" className="flex gap-5 justify-start mb-3">
                    <span className="border p-2 h-13">
                        <Phone color="purple" size={30} />
                    </span>
                    <p className="text-zinc-500 text-[12px] sm:whitespace-nowrap">
                        <span className="font-bold text-purple-900">
                            For Calls: <span className="font-bold text-black">+234 816 081 7698</span> <br />
                        </span>
                        Call Us Now 24/7 Customer Support
                    </p>
                </div>
                <div data-aos="fade-left" className="flex gap-5 justify-start shrink">
                    <span className="border p-2 h-13">
                        <MapPin color="purple" size={30} />
                    </span>
                    <p className="text-zinc-500 text-[12px]">
                        <span className="font-bold text-black shrink">Our Office</span> <br />
                        25D, Ade Ajayi Street, Zone A4, Ogudu, Lagos, Nigeria.
                    </p>
                </div>

            </div>
        </div>

        <div className="bg-black w-full lg:hidden">
            <div className="container mx-auto px-8 bg-black py-2">
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="text-slate-200">
                                <span>
                                    <Menu color="whitesmoke" size={30} />
                                </span>
                                MENU
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-zinc-900 text-slate-200">
                            <SheetTitle>
                                <NavigationMenu className="text-slate-200">
                                    <NavigationMenuList className="flex flex-col gap-4 mt-4">
                                        <NavigationMenuItem>
                                            <NavigationMenuLink asChild className=''>
                                                <a href="/" className="font-bold text-slate-200  
                                                ">HOME</a>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        
                                        <NavigationMenuItem>
                                            <NavigationMenuLink asChild className="">
                                                <a href="/about">ABOUT</a>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem className="ms-3">
                                            <NavigationMenuLink asChild className="">
                                                <a href="/services" className="font-bold  ms-1">SERVICES</a>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem className="ms-3">
                                            <NavigationMenuLink asChild className="">
                                                <a href="/projects">PROJECTS</a>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </SheetTitle>
                                
                            
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button variant="outline" className="text-slate-200">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>

        <div className="hidden lg:block relative bg-white w-full">
            <div className="container mx-auto bg-black absolute top-[-20] left-9 z-1 w-[93%] xl:left-29 xl:w-[84%] 2xl:left-135 2xl:w-[57.5%]">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className="nav-itm-lnk p-3">
                        <NavigationMenuLink asChild className="font-bold text-slate-200">
                            <Link href="/">HOME</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="nav-itm-lnk ms-3 p-3">
                        <NavigationMenuLink asChild className="font-bold text-slate-200">
                            <Link href="/about">ABOUT</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="nav-itm-lnk ms-3 p-3">
                        <NavigationMenuLink asChild className="font-bold text-slate-200">
                            <Link href="/services">SERVICES</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="nav-itm-lnk ms-3 p-3 block">
                        <NavigationMenuLink asChild className="font-bold text-slate-200">
                            <Link href="/projects">PROJECTS</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
        </div>
    </header>
  );
};

export default Header;