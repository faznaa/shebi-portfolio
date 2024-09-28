import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const Carousel = ({ images }:{ images: string[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden">
      <div className="relative w-full h-[500px]">
        <AnimatePresence >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover rounded-lg"
          />
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
        {images.map((_, index) => (
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

export default Carousel;
