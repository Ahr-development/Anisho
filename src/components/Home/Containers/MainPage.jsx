
'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogSwiper from "@/components/Home/Contents/BlogSwiper";
import VideoContentSwiper from "@/components/Home/Contents/VideoContentSwiper";

const MainPage = () => {

    const slides = [
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/cbdaf940aa005a0207ac6706fd7a0b49273bf625_1736934231.jpg?x-oss-process=image/quality,q_95/format,webp",
        "https://via.placeholder.com/600x400?text=Slide+2",
        "https://via.placeholder.com/600x400?text=Slide+3",
      ];
    return ( <>
    
    <div className="w-full flex justify-center items-center">
      <Swiper

        spaceBetween={30}
        slidesPerView={1}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
<VideoContentSwiper/>
    <BlogSwiper/>
    
    </> );
}
 
export default MainPage;