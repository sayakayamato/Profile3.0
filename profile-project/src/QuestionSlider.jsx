
// 9月21日（水）
// スライダーの作成、微調整が必要と思うが...


import { Swiper, SwiperSlide } from "swiper/react";
// import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom"

// Import Swiper styles
import "swiper/css";

import "./css/Slider.css";

export function QuestionSlider() {

  const navigate = useNavigate()

    const WhatCategory = (e) => {    
      console.log(e.target.innerText)
      const clickCategory = e.target.innerText
      navigate("/QuestionDetailPage", {state: clickCategory})
    }

    //テストデータ
    const questioncategory = ["おすすめ質問", "就活", "恋愛", "遊び", "カテゴリ5", "カテゴリ6", "カテゴリ7"]

    //9月22日(木)ベタガキをループにした
    const categorylist = [];
    for(let i = 0; i<questioncategory.length; i++){
      categorylist.push(<SwiperSlide key={categorylist}><button onClick={WhatCategory}>{questioncategory[i]}</button></SwiperSlide>)
    }


  return (
    <>
    
      <Swiper className="mySwiper"
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
      >

        {categorylist}
        
      </Swiper>
    
    </>
  );
}