import slide1 from '../../assets/slide1.svg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import { Carousel } from "flowbite-react";

const CarouselDef = () => {
  const slides = [slide1, slide2, slide3];
  const labels = ['A', 'B', 'C'];

  return (
    <div className="h-80 sm:h-96 xl:h-96 2xl:h-128 font-mathernal relative">
      <Carousel slideInterval={5000} className="rounded-none h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img src={slide} alt={'slide${labels[index]}'} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-9xl font-bold">
              <span>
                Slide {labels[index]}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-negro-azabache"></div>
    </div>
  );
};

export default CarouselDef;
