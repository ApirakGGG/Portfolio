"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Skills from "./Skills";
import Detail from "./Detail";
import Contact from "./Contact";

export default function Detail_Swiper() {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <Swiper
        className="mySwiper border rounded-lg"
        spaceBetween={50}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Detail />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
