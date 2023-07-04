// Hooks/Packages
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

//Icons
import { RxAvatar } from "react-icons/rx";

// data
const testimonial = [
  {
    key: 1,
    name: "Mohamad Haqnegahdar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium fuga consequuntur esse alias quam a suscipit facere.",
  },
  {
    key: 2,
    name: "Mohamad Haqnegahdar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium fuga consequuntur esse alias quam a suscipit facere.",
  },
  {
    key: 3,
    name: "Mohamad Haqnegahdar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium fuga consequuntur esse alias quam a suscipit facere.",
  },
  {
    key: 4,
    name: "Mohamad Haqnegahdar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium fuga consequuntur esse alias quam a suscipit facere.",
  },
  {
    key: 5,
    name: "Mohamad Haqnegahdar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium fuga consequuntur esse alias quam a suscipit facere.",
  },
  {
    key: 6,
    name: "Mohamad Haqnegahdar",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusantium fuga consequuntur esse alias quam a suscipit facere.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial p-0 m-0 row w-100 justify-content-start align-items-center py-3 pb-5 bg-black">
      <div className="testimonial__container ">
        {/* Heading */}
        <div className="row align-items-center mb-3">
          <div className="col-12 col-md-6 p-0 m-0 px-3 py-3">
            <h3 className=" ">Hear what our customers say:</h3>
          </div>
          <div className="col-12 col-md-6 p-0 m-0 px-3 pt-3">
            <button className="btn btn-danger rounded-0 p-0 m-0  px-4 py-1">
              Read More at Google
            </button>
          </div>
        </div>
        {/* Slider */}
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            574: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          className="  testimonial-slider me-md-5 "
        >
          {testimonial.map(({ key, name, text }) => (
            <SwiperSlide key={key}>
              <div className="testmonial-slider__slide slide m-0 p-3 pt-5 w-100 d-flex flex-column justify-content-center align-items-start bg-white text-black position-relative">
                <RxAvatar
                  size={60}
                  className="slide__profile position-absolute "
                />
                <h6 className="slide__title slide__title--max-line fw-bold h5  pb-1 ">
                  {name}{" "}
                </h6>
                <p className="slide__text slide__text--max-line">{text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
