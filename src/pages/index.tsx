import Image from "next/image";
import { Inter } from "next/font/google";
import { LampContainer, LampDemo } from "@/ui/lamp";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Skills from "@/components/Skills";
import { Thanks } from "@/components/Thanks";
import ContactUs from "@/components/ContactUs";
import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import MainService from "@/components/Services/MainService";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className="bg-neutral-950 min-h-screen w-screen overflow-hidden h-full">
    <Navbar/>
    {/* <div className="h-screen bg-black mt-32"></div> */}
    <Intro/>
    <Description/>
    <MainService/>
    <Projects/>
    {/* <Skills/> */}
    <Testimonials/>
    {/* <Blogs/> */}
    <ContactUs/>
    <Thanks/>
   </div>
  );
}
