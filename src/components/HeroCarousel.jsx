import { useState, useEffect } from "react";
import { heroCarouselItems } from "../constants";
import Button from "./Button";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % heroCarouselItems.length
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentItem = heroCarouselItems[currentIndex];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-n-8/60 via-n-8/40 to-n-8/20" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-5">
        <h2 className="h2 md:h1 mb-4 text-n-1 font-bold uppercase tracking-wider">
          {currentItem.title}
        </h2>
        <p className="body-1 md:text-2xl mb-8 text-n-2 font-semibold uppercase">
          {currentItem.subtitle}
        </p>
        <a 
          href="#products" 
          className="inline-flex items-center justify-center px-8 py-4 bg-n-4 hover:bg-n-3 text-n-1 font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-lg"
        >
          Click Here
        </a>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroCarouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-color-1"
                : "w-2 bg-n-4 hover:bg-n-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => 
          (prev - 1 + heroCarouselItems.length) % heroCarouselItems.length
        )}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-n-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => 
          (prev + 1) % heroCarouselItems.length
        )}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-n-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;
