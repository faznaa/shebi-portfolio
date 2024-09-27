import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter()
  const items = [
    {
      title: "Home",
      action: () => router.push('/')
    },
    {
      title: "Projects",
      action: () => router.push('/journey')
    },
    {
      title: "Services",
      action: () => router.push('/services')
    },
    {
      title: "Blog",
      action: () => router.push('/journey')

    },
    {
      title: "Journey",
      href: "#",
      action: () => router.push('/journey')
    },
    {
      title: "Contact Me",
      href: "#contact",
      action:() => scrollToId('contact')
    },
  ];
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 0);
    };

    // add scroll event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);

    // clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToId = (id: string) => {
    const path = router.pathname
    if(path=='/') {
      const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    } else {
      router.push('/#contact')
      // hello
    }
    
  };


  return (
    // Transparent Navbar
    <nav
      className={`fixed w-full z-30 transition-colors duration-300 ${
        hasScrolled
          ? "bg-black text-gray-300 hover:text-white shadow-lg border-b-[1px] border-white/45 z-50"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center gap-x-10 h-16">
        {items.map((item) => (
          <button onClick={() =>item?.action()} className="text-white text-sm tracking-normal">
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
