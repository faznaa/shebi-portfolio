import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/ui/FadeIn';
import ServiceCard from './ServiceCardSingle';


// Define the structure of a service object
interface ServiceType {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  video: string;
  bg: string;
  fg: string;
  gradientBg: string;
}

interface ServicesProps {
  services: any[]; // Array of services passed dynamically
  offsets: number[]; // Array of offsets dynamically passed to control scroll position
  rangeStart: number; // Start of range for scroll-based animations
  rangeEnd: number; // End of range for scroll-based animations
}

const ServiceCardStack: React.FC<ServicesProps> = ({ services, offsets, rangeStart, rangeEnd }) => {
  const [selectedId, setSelectedId] = useState('service-1');
  const container = useRef(null);
  const [scrollPro, setScrollPro] = useState(0);
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(() => {
      setScrollPro(scrollYProgress.get());

      // Dynamically determine which service is selected based on scroll position
      for (let i = 0; i < offsets.length; i++) {
        if (scrollYProgress.get() > offsets[i] && scrollYProgress.get() <= offsets[i + 1]) {
          setSelectedId(`service-${i + 1}`);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, offsets]);

  const scrollToId = (id: string) => {
    setSelectedId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-neutral-950 text-white py-40 h-auto" ref={container}>
      

      <motion.div
        className="sticky top-[10%]  tracking-tight z-10"
        style={{ opacity }}
      >
        <FadeIn>
        <h1 className="text-4xl sm:text-6xl text-center font-bold my-16 pb-20 text-white">Services <span className="text-blue-500">I offer</span></h1>
        </FadeIn>
      
      {/* <div className='flex w-full items-center justify-center gap-x-6 uppercase text-sm'>
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => scrollToId(`service-${index + 1}`)}
            className={`uppercase font-semibold text-[16px] px-4 py-2 rounded-2xl text-white hover:bg-gray-500
              ${selectedId === `service-${index + 1}` ? 'text-red-500  bg-gray-200' : ''}`}
          >
            {service.title}
          </button>
        ))}
        </div> */}
      </motion.div>

      <motion.div className="h-[500vh] relative" style={{ opacity }}>
        {services.map((service, index) => {
          const targetScale = 1 - ((services.length - index) * 0.05); // Dynamically calculate scaling based on the number of services
          return (
            <ServiceCard
            path={service.path}
              key={index}
              index={index}
              bg={service.bg}
              textColor={service.fg}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              src={service.image}
              progress={scrollYProgress}
              range={[rangeStart + index * 0.25, rangeEnd]}
              targetScale={targetScale}
              gradientBg={service.gradientBg}
            />
          );
        })}
        {/* Dynamic service IDs */}
        {services.map((_, index) => (
          <div key={index} id={`service-${index + 1}`} className="h-[100vh]" />
        ))}
      </motion.div>

      {/* <div className="relative z-30 top-36">
        <TrustedByLeaders />
      </div> */}
    </section>
  );
};

export default ServiceCardStack;
