'use client';

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const FirstSection = () => {
  const [buttonText, setButtonText] = useState("مشاهده دسته بندی");
  const [buttonColor, setButtonColor] = useState("bg-red-600");
  const [giftCardText, setGiftCardText] = useState("گیفت کارت");
  const [backgroundColor, setBackgroundColor] = useState("bg-red-200");

  const slideData = [
    {
      title: "یوتیوب پریمیوم",
      description: "یوتیوب پریمیوم",
      buttonColor: "bg-red-600",
      bg: "bg-red-200",
      img: "https://cdn-icons-png.freepik.com/256/15707/15707874.png?semt=ais_hybrid"
    },
    {
      title: "محصولات پلی استیشن",
      description: "پلی استیشن",
      buttonColor: "bg-blue-600",
      bg: "bg-blue-200",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/PlayStation_App_Icon.jpg"
    },
    {
      title: "محصولات ایکس باکس",
      description: "گیفت کارت ایکس باکس",
      buttonColor: "bg-green-600",
      bg: "bg-green-200",
      img: "https://cdn.icon-icons.com/icons2/17/PNG/256/microsoft_xbox_xbox360_2158.png"
    },
  ];

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setGiftCardText(slideData[activeIndex].description);
    setButtonColor(slideData[activeIndex].buttonColor);
    setBackgroundColor(slideData[activeIndex].bg);
  };

  return (
    <>
      <div className={`${backgroundColor}`} dir="rtl">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:py-20 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Right Section */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-w-640:mt-6 max-w-640:text-xl">
              سریعترین مکان برای خرید انواع
            </h2>
            <br />
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 max-w-640:-mt-3 max-w-640:text-4xl">
              {giftCardText}
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-x-6">
              <a
                href="#"
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm max-w-640:-mt-4 max-w-640:mb-3 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${buttonColor}`}
              >
                مشاهده دسته بندی
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 mt-4 sm:mt-0 max-w-640:hidden">
                کالاهای برتر
              </a>
            </div>
          </div>

          {/* Left Section: Swiper Cards */}
          <div className="lg:w-1/2 w-full -mt-8">
            <Swiper
              modules={[ Autoplay]}
              spaceBetween={20}
              slidesPerView={3} // For mobile, show one card at a time
              centeredSlides={true} // Enable centering slides
              autoplay={{ delay: 3000 }}
              onSlideChange={handleSlideChange}
              breakpoints={{
                250: {
                    slidesPerView: 2, // 3 slides per view on larger screens
                  },
                  430: {
                    slidesPerView: 4, // 3 slides per view on larger screens
                  },
                1024: {
                  slidesPerView: 3, // 3 slides per view on larger screens
                },
              }}
            >
              {slideData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 border rounded-lg shadow">
                    <img
                      src={slide.img}
                      alt={`Icon ${index + 1}`}
                      className="mb-4 mx-auto rounded-lg"
                    />
                    <h3 className="text-lg font-semibold text-center max-w-640:hidden">{slide.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
