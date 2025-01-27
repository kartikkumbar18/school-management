import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/puducherry-school-reopening-date-postponed-315858572-1x1.jpg?VersionId=ISLMnBo_DKbu8cUg1OtdwBbwH8l2oZgV',
      title: 'First Slide Title',
      description: 'This is the first slide description.',
    },
    {
      id: 2,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/021/592/930/small_2x/children-going-to-school-cartoon-vector.jpg',
      title: 'Second Slide Title',
      description: 'This is the second slide description.',
    },
    {
      id: 3,
      image: 'https://www.news10.com/wp-content/uploads/sites/64/2022/08/classroom_1542034403442_61914801_ver1.0.jpg?strip=1',
      title: 'Third Slide Title',
      description: 'This is the third slide description.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slides */}
      <div className="overflow-hidden rounded-lg shadow-lg relative h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
