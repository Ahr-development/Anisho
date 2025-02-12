
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import SwiperProduct from "@/components/Home/Products/SwiperProduct";
import Footer from "@/components/shared/Footer";

const GamePage = () => {



    const games = [
        { id: 1, name: "استرو بات | Astro Bot", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$49.99" },
        { id: 2, name: "Game 2", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$39.99" },
        { id: 3, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        // Add more games as needed
        { id: 4, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },

        { id: 5, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 6, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },

        { id: 7, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 8, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 9, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 10, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 11, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 12, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 13, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },
        { id: 14, name: "Game 3", cover: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23MQ7Z/35663ea9322345259df5dd1db26a019b.png/f/astro-bot-nordic.png", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faf1a8888-2b34-4d09-8fff-b7deb0172fca_3840x2160.png", price: "$59.99" },

    ];

    const [activeGame, setActiveGame] = useState(games[0]);
    return (<>



<div class="relative bg-opacity-30 min-w-890:hidden backdrop-blur-md bg-white h-10 rounded-lg flex items-center justify-center m-5 max-w-850:h-[75px] max-w-600:h-[90px]">
            <div class="absolute left-0 flex space-x-4 pl-4">
                <img src="/img/xbox.png" alt="Image 1" class="w-12 h-12 object-cover" />
                <img src="/img/ps.png" alt="Image 2" class="w-12 h-12 object-cover max-w-500:hidden" />
            </div>
            <p class="text-center text-white text-xl max-w-850:w-[50%]">به کاملترین فروشگاه گیمینگ قانونی و ارزان در ایران خوش آمدید</p>
            <div class="absolute right-0 flex space-x-4 pr-4">
                <img src="/img/steam.png" alt="Image 5" class="w-12 h-12 object-cover max-w-500:hidden" />

                <img src="/img/mobilegame.png" alt="Image 4" class="w-12 h-12 object-cover" />
            </div>
        </div>



        <div className="m-5 mt-3 -mb-10">
            {/* بخش اول: تصویر بازی */}
            <div className="relative w-full h-72 overflow-hidden">
                <img
                    src={activeGame.image}
                    alt={activeGame.name}
                    className="w-full h-full object-cover object-center rounded-lg"
                />
            </div>

            {/* بخش دوم: اسلایدر بازی‌ها و اطلاعات بازی */}
            <div className="flex flex-col items-center">
                {/* اسلایدر بازی‌ها */}
                <div className="w-full relative -mt-16 px-5 pb-20">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={9}
                        centeredSlides={true}
                        loop={true}
                        onSlideChange={(swiper) => setActiveGame(games[swiper.realIndex])}
                        breakpoints={{
                            250: {
                                slidesPerView: 3, // 3 slides per view on larger screens
                            },
                            430: {
                                slidesPerView: 4, // 3 slides per view on larger screens
                            },
                            1024: {
                                slidesPerView: 7, // 3 slides per view on larger screens
                            },
                        }}
                    >
                        {games.map((game, index) => (
                            <SwiperSlide key={game.id}>
                                {({ isActive }) => (
                                    <div
                                        className={`transition-all duration-300 ${isActive
                                            ? 'scale-110 h-62 pt-2 pb-2 z-20' // ارتفاع و بزرگ‌نمایی اسلاید فعال
                                            : 'scale-90  z-10'
                                            } flex items-center justify-center`}
                                    >
                                        <img
                                            src={game.cover}
                                            alt={game.name}
                                            className="object-cover rounded-lg shadow-lg cursor-pointer"
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* اطلاعات بازی */}
                <div className="text-center -mt-16">
                    <h2 className="text-3xl font-bold text-white">{activeGame.name}</h2>
                    <p className="text-lg text-gray-700 mb-2">{activeGame.price}</p>
                </div>
            </div>
        </div>


        <SwiperProduct />

        <br />


        <h1 className="text-center text-white text-3xl mt-7 mb-3">پوشش گسترده همه سلیــــــقه ها</h1>

        <div className="w-full  p-5  flex items-center justify-center bg-gray-900">

            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    250: {
                        slidesPerView: 1, // 3 slides per view on larger screens
                    },
                    430: {
                        slidesPerView: 2, // 3 slides per view on larger screens
                    },
                    1024: {
                        slidesPerView: 5, // 3 slides per view on larger screens
                    },
                }}
            >
                <SwiperSlide>
                    <div className="relative bg-green-500  rounded-lg shadow-lg p-6">
                        {/* شخصیت */}
                        <div className="absolute  left-1/2 transform -translate-x-1/2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png" // تصویر شخصیت
                                alt="Xbox Character"
                                className="w-24 h-24 rounded-full border-4 border-white"
                            />
                        </div>
                        {/* محتوای کارت */}
                        <div className="pt-12 flex flex-col items-center">
                            {/* لوگوی ایکس‌باکس */}
                            <div className="relative rounded-full flex items-center justify-center">
                                <img
                                    src="https://www.freeiconspng.com/uploads/halo-png-background-19.png" // لوگوی ایکس‌باکس
                                    alt="Xbox Logo"
                                    className=""
                                />
                            </div>
                            {/* متن زیر لوگو */}
                            <p className="text-white mt-4 text-center text-2xl font-bold">
                                دنیای ایکس باکس
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative bg-blue-500  rounded-lg shadow-lg p-6">
                        {/* شخصیت */}
                        <div className="absolute  left-1/2  transform -translate-x-1/2">
                            <img
                                src="https://www.pngall.com/wp-content/uploads/13/PlayStation-Logo-1.png" // تصویر شخصیت
                                alt="Xbox Character"
                                className="w-24  rounded-full border-4 border-white"
                            />
                        </div>
                        {/* محتوای کارت */}
                        <div className="pt-12 flex flex-col items-center">
                            {/* لوگوی ایکس‌باکس */}
                            <div className="relative  rounded-full flex items-center justify-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/9/96/Ellie_in_The_Last_of_Us_Part_II.png" // لوگوی ایکس‌باکس
                                    alt="Xbox Logo"
                                    className="w-52"
                                />
                            </div>
                            {/* متن زیر لوگو */}
                            <p className="text-white mt-4 text-center text-2xl font-bold">
                                دنیای پلی استیشن
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative bg-[#030712]  rounded-lg shadow-lg p-6">
                        {/* شخصیت */}
                        <div className="absolute  left-1/2 transform -translate-x-1/2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png" // تصویر شخصیت
                                alt="Xbox Character"
                                className="w-24 h-24 rounded-full border-4 border-white"
                            />
                        </div>
                        {/* محتوای کارت */}
                        <div className="pt-12 flex flex-col items-center">
                            {/* لوگوی ایکس‌باکس */}
                            <div className="relative   rounded-full flex items-center justify-center">
                                <img
                                    src="https://pngimg.com/d/batman_PNG18.png" // لوگوی ایکس‌باکس
                                    alt="Xbox Logo"
                                    className="w-[80%]"
                                />
                            </div>
                            {/* متن زیر لوگو */}
                            <p className="text-white mt-4 text-center text-2xl font-bold">
                                دنیای کامپیوتر
                            </p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative bg-[#e11d48] rounded-lg shadow-lg p-6">
                        {/* شخصیت */}
                        <div className="absolute  left-1/2 transform -translate-x-1/2">
                            <img
                                src="https://cdn.icon-icons.com/icons2/2429/PNG/512/nintendo_logo_icon_147258.png" // تصویر شخصیت
                                alt="Xbox Character"
                                className="w-24 h-24 rounded-full border-4 border-white"
                            />
                        </div>
                        {/* محتوای کارت */}
                        <div className="pt-12 flex flex-col items-center">
                            {/* لوگوی ایکس‌باکس */}
                            <div className="relative  rounded-full flex items-center justify-center">
                                <img
                                    src="https://www.nintendo.com/eu/media/images/08_content_images/others_2/characterhubs/supermariohub/MarioHub_Overview_Mario_sideimg_mario.png" // لوگوی ایکس‌باکس
                                    alt="Xbox Logo"
                                    className="w-[62%]"
                                />
                            </div>
                            {/* متن زیر لوگو */}
                            <p className="text-white mt-4 text-center text-2xl font-bold">
                                دنیای نیتندو
                            </p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative bg-[#f59e0b]  rounded-lg shadow-lg p-6">
                        {/* شخصیت */}
                        <div className="absolute  left-1/2 transform -translate-x-1/2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2734/2734739.png" // تصویر شخصیت
                                alt="Xbox Character"
                                className="w-24 h-24 rounded-full border-4 border-white"
                            />
                        </div>
                        {/* محتوای کارت */}
                        <div className="pt-12 flex flex-col items-center">
                            {/* لوگوی ایکس‌باکس */}
                            <div className="relative   rounded-full flex items-center justify-center">
                                <img
                                    src="https://snapdragonproseries.com/wp-content/uploads/2024/02/CODM-Evergreen-Posed-Render.png" // لوگوی ایکس‌باکس
                                    alt="Xbox Logo"
                                    className="w-[49%]"
                                />
                            </div>
                            {/* متن زیر لوگو */}
                            <p className="text-white mt-4 text-center text-2xl font-bold">
                                دنیای موبایل گیمرا
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>



    </>);
}

export default GamePage;