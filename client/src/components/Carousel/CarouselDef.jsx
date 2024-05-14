import slide1 from '../../assets/slide1.svg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import { Carousel } from "flowbite-react";

const CarouselDef = () => {
  const slides = [slide1, slide2, slide3];

  return (
    <div className="h-100 sm:h-96 xl:h-80 2xl:h-96 font-gurajada relative">
      <Carousel slideInterval={5000} className="rounded-none">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
            <img src={slide} alt={`slide${index + 1}`} className="w-full h-full object-contain" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-6xl font-bold">
              <span>Slide {index + 1}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselDef;
