import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { DATA } from '@/lib/data';
import Link from 'next/link';

const CarouselService = ({ data }:{ data: typeof DATA.services}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden">
      <div className="relative w-full h-[500px]">
        <AnimatePresence >
          
          <div className='w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col rounded-sm p-4'>
            <motion.img src={data[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover rounded-lg" />
            <motion.div className="space-y-4" >
              <h3 className="text-2xl sm:text-4xl font-normal pt-6 sm:pt-0">{data[currentIndex].title}</h3>
              {/* <h4 className='text-2xl font-extralight'>{subtitle}</h4> */}
              <p className="font-light py-4">{data[currentIndex].description.slice(0, 200)}</p>
              <Link target="_blank" href={`/service/${data[currentIndex].path}`} className="px-4 py-2 rounded-3xl bg-gray-100 text-black">
                Know more &#8594;
              </Link>
            </motion.div>

          </div>
        </AnimatePresence>
      </div>
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
        onClick={handlePrev}
      >
                <IconChevronLeft className="w-6 h-6" />

      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
        onClick={handleNext}
      >
        <IconChevronRight className="w-6 h-6" />
      </button>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselService;
