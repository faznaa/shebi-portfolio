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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className="bg-black min-h-screen">
    <Navbar/>
    {/* <div className="h-screen bg-black mt-32"></div> */}
    <Intro/>
    <Description/>
    <Skills/>
    <Testimonials/>
    <Blogs/>
    <ContactUs/>
    <Thanks/>
   </div>
  );
}
