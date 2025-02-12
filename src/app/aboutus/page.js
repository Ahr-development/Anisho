
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import SwiperProduct from "@/components/Home/Products/SwiperProduct";
import MainPage from "@/components/Home/Containers/MainPage";
import GamePage from "@/components/Home/Containers/GamePage";
import SoftwarePage from "@/components/Home/Containers/SoftwarePage";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
const AboutUs = () => {

    const [page, setPage] = useState(0);
    const [container, setContainer] = useState(null);

    useEffect(() => {
        switch (page) {
            case 0:
                setContainer(<MainPage />)
                break;
            case 1:
                setContainer(<SoftwarePage />)
                break;
            case 2:
                setContainer(<GamePage />)
                break;

            default:
                break;
        }
    }, [])

    const handleSetPage = (page) => {
        switch (page) {
            case 0:
                setContainer(<MainPage />)
                setPage(0)
                break;
            case 1:
                setContainer(<SoftwarePage />)
                setPage(1)

                break;
            case 2:
                setContainer(<GamePage />)
                setPage(2)

                break;

            default:
                break;
        }
    }


    const slides = [
        "https://via.placeholder.com/600x400?text=Slide+1",
        "https://via.placeholder.com/600x400?text=Slide+2",
        "https://via.placeholder.com/600x400?text=Slide+3",
      ];


    return (<div className={page == 1 ? "bg-white" : page == 2 ? "bg-gray-900" : "bg-amber-50"}>


        <Navbar />
        <div className="relative h-16 w-full flex items-center overflow-hidden max-w-767:hidden">
            {/* پس‌زمینه سمت چپ (سیاه با کجی) */}
            <div
                className="absolute inset-0"
                style={{
                    background: "black",
                    clipPath: "polygon(0 0, 48% 0, 52% 100%, 0% 100%)",
                }}
            ></div>

            {/* پس‌زمینه سمت راست (قرمز با کجی) */}
            <div
                className="absolute inset-0"
                style={{
                    background: "#ed4539",
                    clipPath: "polygon(48% 0, 100% 0, 100% 100%, 52% 100%)",
                }}
            ></div>

            {/* محتوای اصلی */}
            <div className="relative flex w-full items-center z-10">
                {/* بخش سمت چپ */}
                <button onClick={() => handleSetPage(1)} className="basis-1/2 flex flex-col items-center group relative overflow-hidden">
                    <h1 className="text-white text-2xl relative z-20">دنیای نرم افزار</h1>
                    {/* آیکون‌ها */}
                    <div className="absolute bottom-[-50px] flex space-x-4 opacity-0 group-hover:bottom-10 group-hover:opacity-60 transition-all duration-700 ease-out">
                        <i className="text-white text-3xl">🖥️</i>
                        <i className="text-white text-3xl">💻</i>
                        <i className="text-white text-3xl">📱</i>
                    </div>
                </button>

                {/* لوگو */}
                <div className="basis-1/4 flex justify-center relative z-20">
                    <img
                        src="/img/logo.png"
                        className="w-24"
                        style={{
                            background: "transparent",
                        }}
                    />
                </div>

                {/* بخش سمت راست */}
                <button onClick={() => handleSetPage(2)} className="basis-1/2 flex flex-col items-center group relative overflow-hidden">
                    <h1 className="text-white text-2xl relative  z-20">دنیای گیمینگ</h1>
                    {/* آیکون‌ها */}
                    <div className="absolute bottom-[-50px] flex space-x-4 opacity-0 group-hover:bottom-10 group-hover:opacity-60 transition-all duration-700 ease-out">
                        <i className="text-white text-3xl">🎮</i>
                        <i className="text-white text-3xl">🕹️</i>
                        <i className="text-white text-3xl">🎲</i>
                    </div>
                </button>

            </div>
        </div>



        <div className="fixed bottom-0 left-1/2 max-w-640:bottom-[56px] z-10 max-w-767:block hidden transform -translate-x-1/2 h-16 w-3/4 flex items-center overflow-hidden">
            {/* پس‌زمینه سمت چپ (سیاه با کجی) */}
            <div
                className="absolute inset-0"
                style={{
                    background: "black",
                    clipPath: "polygon(0 0, 48% 0, 52% 100%, 0% 100%)",
                }}
            ></div>

            {/* پس‌زمینه سمت راست (قرمز با کجی) */}
            <div
                className="absolute inset-0"
                style={{
                    background: "#ed4539",
                    clipPath: "polygon(48% 0, 100% 0, 100% 100%, 52% 100%)",
                }}
            ></div>

            {/* محتوای اصلی */}
            <div className="relative flex w-full items-center z-10">
                {/* متن سمت چپ */}
                <div onClick={() => handleSetPage(1)} className="basis-1/2 flex justify-center">
                    <h1 className="text-white text-sm">دنیای نرم افزار</h1>
                </div>

                {/* لوگو */}
                <div className="basis-1/4 flex justify-center relative z-20">
                    <img
                        src="/img/logo.png"
                        className="w-16"
                        style={{
                            background: "transparent",
                        }}
                    />
                </div>

                {/* متن سمت راست */}
                <div onClick={() => handleSetPage(2)} className="basis-1/2 flex justify-center">
                    <h1 className="text-white text-sm">دنیای گیمینگ</h1>
                </div>
            </div>
        </div>



        {container}

        <Footer />

    </div>);
}

export default AboutUs;