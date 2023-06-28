import React from "react";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../testimonialSlider.css";
import { Autoplay, Pagination } from "swiper";

const TestimonialsSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[ Autoplay, Pagination ]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { text, name, image, position } = item;
          return (
            <SwiperSlide key={index}>
              <div className="relative lg:mt-[2.125rem] before:content-quote p-8">
                <div>
                  <p>{text}</p>
                  <div className="flex items-center mt-[18px] mb-8">
                    <img src={image} alt="" />
                    <div className="ml-4">
                      <h6 className="font-bold">{name}</h6>
                      <p className="text-sm">{position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialsSlider;
