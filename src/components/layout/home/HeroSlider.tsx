// Hooks/Packages
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Data
const slides = [
  {
    key: 1,
    src: "https://image123.azureedge.net/houseofcars/7623325805826178-SLIDER1.webp",
  },
  {
    key: 2,
    src: "https://image123.azureedge.net/houseofcars/20542645725351893-SLIDER2.webp",
  },
  {
    key: 3,
    src: "https://image123.azureedge.net/houseofcars/6039113314609164-SLIDER3.webp",
  },
  {
    key: 4,
    src: "https://image123.azureedge.net/houseofcars/7623325805826178-SLIDER1.webp",
  },
  {
    key: 5,
    src: "https://image123.azureedge.net/houseofcars/6039113314609164-SLIDER3.webp",
  },
];

const HeroSlider = () => {
  return (
    <section className="hero-slider m-0 p-0 position-relative w-100 ">
      <div className="">
        <Swiper>
          {slides.map(({ key, src }) => (
            <SwiperSlide key={key}>
              <div className="hero-slider__slide position-relative">
                <Image
                  src={src}
                  fill
                  className="hero-slider__slide-image w-100 h-100 object-fit-cover"
                  alt="Slide"
                />
                <div className="hero-slider__slide-shadow position-absolute w-100 h-100"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Title */}
      <div className="hero-slider__title position-absolute start-50 top-50 translate-middle d-none d-sm-flex flex-column align-items-center justify-content-center z-3  ">
        <p className="ps-5">WELCOME TO</p>
        <h1 className="fw-bold">House Of Cars</h1>
      </div>
    </section>
  );
};

export default HeroSlider;
