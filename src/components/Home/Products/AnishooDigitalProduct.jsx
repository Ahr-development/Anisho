
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Card = ({ image, logo, title, price }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
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
        // کارت‌های دیگر را اینجا اضافه کنید
    ];

    return (
        <Swiper
            slidesPerView={4}
            breakpoints={{
                300: {
                    slidesPerView: 1.5,
                },
                550: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3.5,
                },
                1024: {
                    slidesPerView:3.85,
                },
            }} spaceBetween={10} className="my-5">
            {cards.map((card, index) => (
                <SwiperSlide key={index}>
                    <Card {...card} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AnishooDigitalProduct;
