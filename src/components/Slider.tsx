'use client';

import { useState, useEffect } from 'react';

interface SliderProps {
  images: string[];
}

interface SliderState {
  currentIndex: number;
}

function Slider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imagesCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesCount]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesCount - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCount);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden">
        <div className="w-full h-64">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-1/2 h-full"
          />
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 bg-white rounded-full ${
              index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Control buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
      >
        Previous
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Slider;
