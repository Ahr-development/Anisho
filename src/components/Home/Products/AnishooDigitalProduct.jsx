
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // افکت Coverflow اگر خواستی
import { useEffect, useState } from "react";

const Card = ({ image, logo, title, price, isActive }) => {
    return (
        <>
        
                <div
            className={`bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 max-w-500:block hidden ${
                isActive ? "scale-[100%]" : "scale-90 max-w-500:opacity-80"
            }`}
        >
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            </div>

            <div className="bg-gray-100 p-4 flex max-w-500:block  max-w-500:justify-items-center items-center gap-3" dir="rtl">
                <img src={logo} alt="logo" className="w-10 h-10 " />
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-600 text-sm">
                        شروع قیمت از <span className="font-bold">{price}</span>
                    </p>
                </div>
            </div>
        </div>
        

        <div className="bg-white rounded-2xl overflow-hidden shadow-md max-w-500:hidden">
            {/* تصویر اصلی */}
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            </div>

            {/* اطلاعات کارت */}
            <div className="bg-gray-100 p-4 flex items-center gap-3" dir="rtl">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <div >
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-600 text-sm">شروع قیمت از <span className="font-bold">{price}</span></p>
                </div>
            </div>
        </div>
        
        </>

    );
};

const AnishooDigitalProduct = () => {
    const cards = [
        {
            image: "/img/ye.jpg",
            logo: "/assets/img/windows.png",
            title: "ویندوز 11 پرو",
            price: "۳,999,710",
        },
        {
            image: "/img/ye.jpg",
            logo: "/assets/img/windows.png",
            title: "ویندوز 11 پرو",
            price: "۳,999,710",
        },
        {
            image: "/img/ye.jpg",
            logo: "/assets/img/windows.png",
            title: "ویندوز 11 پرو",
            price: "۳,999,710",
        },
        {
            image: "/img/ye.jpg",
            logo: "/assets/img/windows.png",
            title: "ویندوز 11 پرو",
            price: "۳,999,710",
        },
        {
            image: "/img/ye.jpg",
            logo: "/assets/img/windows.png",
            title: "ویندوز 11 پرو",
            price: "۳,999,710",
        },
        {
            image: "/img/ye.jpg",
            logo: "/assets/img/windows.png",
            title: "ویندوز 11 پرو",
            price: "۳,999,710",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
                100: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                    spaceBetween: 1,
                },
                300: {
                    slidesPerView: 2.5,
                    centeredSlides: true,
                    spaceBetween: 1,
                },
                500: {
                    slidesPerView: 2.5,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,

                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
                1500: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
            }}
            className="my-5"
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index}>
                    <Card {...card} isActive={index === activeIndex} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AnishooDigitalProduct;
