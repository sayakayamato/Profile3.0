// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, } from "react-router-dom";

// Import Swiper styles
import "swiper/css";

import "./css/Slider.css";

export function QuestionSlider() {
  return (
    <>
    
      <Swiper className="mySwiper"
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
      >
        <SwiperSlide className="q_category"><Link to="/QuestionDetailPage">おすすめ質問</Link></SwiperSlide>
        <SwiperSlide>就活</SwiperSlide>
        <SwiperSlide>恋愛</SwiperSlide>
        <SwiperSlide>遊び</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    
    </>
  );
}