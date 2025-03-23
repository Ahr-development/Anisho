
'use client';

import AnishooDigitalProduct from "@/components/Home/Products/AnishooDigitalProduct";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSectionSlider from "@/components/Home/Contents/MainDesign/HeroSectionSlider";
import MobileSectionSlider from "@/components/Home/Contents/MainDesign/MobileSectionSlider";
import NewNavbar from "@/components/Home/Contents/MainDesign/NewNavbar";
import NewFooter from "@/components/Home/Contents/MainDesign/NewFooter";
import { GetProductsForMainPageService } from "@/data/Services/productService";



const NewMainPage = ({listProducts}) => {
    const items = [
        {
            image: "/assets/img/github.png",
            link: "https://www.microsoft.com",
            bgColor: "bg-gray-200",
        },
        {
            image: "/assets/img/windows.png",
            link: "https://www.example1.com",
            bgColor: "bg-blue-200",
        },
        {
            image: "/assets/img/Microsoft.png",
            link: "https://www.example2.com",
            bgColor: "bg-yellow-200",
        },
        {
            image: "/assets/img/office.png",
            link: "https://www.microsoft.com",
            bgColor: "bg-purple-200",
        },
    ]; // لیست تصاویر همراه با لینک و رنگ

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 3000); // تغییر هر 3 ثانیه

        return () => clearInterval(interval);
    }, []);


    return (

        <div className="pt-3">

   <NewNavbar/>

            <div className="ml-32 mr-32 max-w-929:mr-5 max-w-929:ml-5 max-w-430:mt-20">

                <HeroSectionSlider />
                <MobileSectionSlider />

                
       




                <div className="flex mt-2">
                    <div className="bg-green-200 basis-1/2 h-52 rounded-2xl mr-1 justify-items-end flex flex-col items-center p-5 max-w-850:hidden">
                        <img src="/assets/img/msft1.png" className="px-7 mt-5 -mb-2 " />

                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-green-500 rounded-lg text-lg font-bold transition-all duration-500 opacity-100 mt-auto "
                        >
                            مشاهده بیشتر
                        </a>
                    </div>

                    <div
                        className={`basis-1/2  h-52 rounded-2xl mr-1 flex flex-col items-center justify-center relative overflow-hidden hidden max-w-850:flex ${items[currentIndex].bgColor}`}
                        onMouseEnter={() => setShowButton(true)}
                        onMouseLeave={() => setShowButton(false)}
                    >
                        {/* لوگوی کوچک */}
                        <img src="/assets/img/msft.png" className="w-40 h-auto mt-2 max-w-850:mt-8 max-w-730:mt-5 max-w-672:mt-0 max-w-420:-mt-10" />

                        {/* تصویر اصلی که تغییر می‌کند */}
                        <img
                            src={items[currentIndex].image}
                            className={`w-4/5 h-auto object-contain -mb-10 transition-opacity duration-700 ease-in-out `}
                        />

                        {/* دکمه با لینک مرتبط */}
                        <a
                            href={items[currentIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`absolute bottom-5 px-6 py-2 ${items[currentIndex].bgColor}  rounded-lg text-lg max-w-420:text-sm  font-bold transition-all duration-500 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            مشاهده بیشتر
                        </a>
                    </div>


                    <div className="bg-red-200 h-52 basis-full rounded-2xl ml-1 flex overflow-hidden">
                        <div className="basis-full">

                            <div className="flex items-center justify-between  h-52  px-10">
                                {/* بخش چپ - آیکون و دکمه */}
                                <div className="flex flex-col items-center space-y-6 max-w-1088:space-y-4 max-w-1088:-ml-2 max-w-730:hidden ">
                                    <div className="w-16 h-16  rounded-full flex items-center justify-center">
                                        <img src="/assets/icon/Spotify.svg" alt="Spotify" className="max-w-[270%] max-w-1088:max-w-[250%]" />
                                    </div>
                                    <button className="bg-black text-white px-5 py-2 rounded-full text-sm">خرید کنید</button>
                                </div>

                                {/* بخش راست - متن تبلیغ */}
                                <div className="text-right max-w-372:-mt-10">
                                    <h3 className="text-lg max-w-1088:text-sm kalamehBold ">اشتراک پریمیوم</h3>
                                    <h1 className="text-6xl max-w-1088:text-4xl kalamehExtraBold">اسپاتیفای</h1>
                                    <button className="bg-black  text-white px-5 py-2 rounded-full text-sm mt-5 hidden max-w-730:block ">خرید کنید</button>

                                </div>
                            </div>

                        </div>

                        <div className="basis-1/2 relative flex flex-col items-end max-w-500:-mr-20 " >
                            <div className="rounded-full bg-[#967a00] w-28 h-10 mt-5 mr-5 flex items-center justify-center max-w-500:hidden ">
                                <h3 className="kalamehExtraBold text-xl px-5 pt-1 text-white" dir="rtl">آتخفیف!</h3>
                            </div>
                            <img
                                src="/assets/img/spot.png"
                                className="max-w-full max-h-full object-contain -mt-14 mr-20 max-w-702:-mt-5 max-w-500:mt-12 max-w-500:max-w-[150%]  max-w-372:mt-20 max-w-372:max-w-[120%]"
                            />
                        </div>
                    </div>

                </div>


                <br />
                <h3 className="text-xl justify-items-end mt-3 kalamehBold max-w-372:text-[16px]" dir="rtl">آخرین محصولات ارائه شده با تخفیف ویژه</h3>


                <AnishooDigitalProduct products={listProducts.ProductsByLatest} />
                <AnishooDigitalProduct products={listProducts.ProductsByLatest} />
                <br />

                <div className="bg-gradient-to-r from-purple-200 to-blue-200 pt-10 pb-5 pr-20 shadow-lg flex relative max-w-1088:mt-10 max-w-632:hidden" dir="rtl">
                    <div className="basis-full z-10">
                        <h1 className="text-5xl max-w-1088:text-4xl font-bold mb-2 kalamehExtraBold">آتخفیف!</h1>
                        <p className="text-lg max-w-1088:text-sm mb-4 kalamehExtraBold max-w-730:w-52">تخفیف بهویی خودکار براساس آخرین محصول خریداری شده</p>
                    </div>

                    <div className="absolute left-10  flex items-center justify-end  max-w-1088:-top-14  rounded-lg">
                        <img src="/img/ye.jpg" className="max-w-[260px]  rounded-lg  " />
                        <div className="absolute animate-bounce flex items-center bottom-3 left-10  justify-center  bg-red-600 px-5 py-1 rounded-lg">
                            <h1 className="text-xl  font-bold mb-2 kalamehExtraBold ">30 دقیقه تا انقضا</h1>

                        </div>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-purple-200 to-blue-200 pt-6 pb-4 px-6 shadow-lg flex flex-col items-center text-center relative hidden max-w-632:flex overflow-visible" dir="rtl">
                    <div className="w-full z-10">
                        <h1 className="text-3xl font-bold mb-2 kalamehExtraBold">آتخفیف!</h1>
                        <p className="text-base mb-4 kalamehExtraBold">تخفیف بهویی خودکار براساس آخرین محصول خریداری شده</p>
                    </div>

                    {/* تصویر بیرون از div */}
                    <img src="/img/ye.jpg" className="w-52 rounded-lg absolute top-32" />

                    {/* متن زیر عکس به‌درستی نمایش داده شود */}
                    <div className="mt-24 w-full flex justify-center z-10 ">
                        <div className="bg-red-600 px-5 py-2 rounded-lg">
                            <h1 className="text-sm font-bold kalamehExtraBold text-white">30 دقیقه تا انقضا</h1>
                        </div>
                    </div>
                </div>




                <div className="grid grid-cols-2 max-w-1088:hidden max-w-1255:ml-52">
                    <div>
                        <h1 className="text-4xl max-w-1255:text-2xl font-bold mb-2 kalamehExtraBold text-right mr-20 mt-5">
                            3,281,000 ت
                        </h1>
                    </div>
                    <h1 className="text-4xl max-w-1255:text-2xl font-bold mb-2 kalamehBold text-right mr-20 mt-5  max-w-1088:text-center">
                        محصول مایکروسافت - ویندوز 11 پرو
                    </h1>
                </div>




                <br />
                <br />



                <br />
                <h3 className="text-xl justify-items-end mt-3 kalamehBold max-w-372:text-[16px]" dir="rtl">آخرین محصولات ارائه شده با تخفیف ویژه</h3>


                <AnishooDigitalProduct products={listProducts.ProductsByLatest} />
                <AnishooDigitalProduct products={listProducts.ProductsByLatest} />
                <br />


                <div className="grid grid-cols-3 gap-3 hidden max-w-560:grid max-w-391:gap-2">
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 max-w-560:grid-cols-1">
                            <div className="flex flex-col justify-center items-center max-w-560:mt-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl">دسته بندی</h3>
                                <h3 className="text-5xl max-w-1110:text-4xl max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                            <div className="flex justify-center mt-auto max-w-560:-mt-16">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 max-w-560:grid-cols-1">
                            <div className="flex flex-col justify-center items-center max-w-560:mt-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl">دسته بندی</h3>
                                <h3 className="text-5xl max-w-1110:text-4xl max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                            <div className="flex justify-center mt-auto max-w-560:-mt-16">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 max-w-560:grid-cols-1">
                            <div className="flex flex-col justify-center items-center max-w-560:mt-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl">دسته بندی</h3>
                                <h3 className="text-5xl max-w-1110:text-4xl max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                            <div className="flex justify-center mt-auto max-w-560:-mt-16">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                        </div>
                    </div>



                </div>

                <div className="grid grid-cols-3 gap-3 max-w-560:hidden">
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10 max-w-1110:mr-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl ">دسته بندی</h3>

                                <h3 className="text-5xl max-w-1110:text-4xl  max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/money.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10 max-w-1110:mr-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl ">دسته بندی</h3>

                                <h3 className="text-5xl max-w-1110:text-4xl  max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/artist.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10 max-w-1110:mr-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl ">دسته بندی</h3>

                                <h3 className="text-5xl max-w-1110:text-4xl  max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex bg-red-200 mt-3 mb-3 h-28 relative overflow-hidden">
                    <div className="basis-1/2  justify-items-end items-end ">
                        <img src="/assets/img/lady2.png" className="h-auto object-contain w-28" />
                    </div>
                    <div className="basis-* w-full">
                        <h3 className="kalamehBold mt-9 mr-16 max-w-560:mt-5 text-4xl max-w-391:text-2xl max-w-391:mr-5 text-center max-w-1320:text-3xl" dir="rtl">دسته بندی برای همه سلیقه ها ...</h3>
                    </div>
                    <div className="basis-1/2 max-w-560:hidden ">
                        <img src="/assets/img/lady1.png" className="h-auto object-contain w-28" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 max-w-560:hidden">
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/fun.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10 max-w-1110:mr-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl ">دسته بندی</h3>

                                <h3 className="text-5xl max-w-1110:text-4xl  max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/scienst.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10 max-w-1110:mr-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl ">دسته بندی</h3>

                                <h3 className="text-5xl max-w-1110:text-4xl  max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/use.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10 max-w-1110:mr-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl ">دسته بندی</h3>

                                <h3 className="text-5xl max-w-1110:text-4xl  max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>


                </div>



                <div className="grid grid-cols-3 gap-3 hidden max-w-560:grid max-w-391:gap-2">
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 max-w-560:grid-cols-1">
                            <div className="flex flex-col justify-center items-center max-w-560:mt-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl">دسته بندی</h3>
                                <h3 className="text-5xl max-w-1110:text-4xl max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                            <div className="flex justify-center mt-auto max-w-560:-mt-16">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 max-w-560:grid-cols-1">
                            <div className="flex flex-col justify-center items-center max-w-560:mt-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl">دسته بندی</h3>
                                <h3 className="text-5xl max-w-1110:text-4xl max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                            <div className="flex justify-center mt-auto max-w-560:-mt-16">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 max-w-560:grid-cols-1">
                            <div className="flex flex-col justify-center items-center max-w-560:mt-5">
                                <h3 className="text-2xl max-w-702:text-sm max-w-1110:text-xl">دسته بندی</h3>
                                <h3 className="text-5xl max-w-1110:text-4xl max-w-702:text-2xl kalamehExtraBold">موسیقی</h3>
                            </div>
                            <div className="flex justify-center mt-auto max-w-560:-mt-16">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%] max-w-1237:max-w-[90%] max-w-1010:mt-8 max-w-702:mt-12 max-w-632:mt-16 object-contain" />
                            </div>
                        </div>
                    </div>



                </div>



                <br />
                <AnishooDigitalProduct products={listProducts.ProductsByLatest} />
                <br />
                <img src="/assets/img/game.png" className="-mt-48 max-w-1320:-mt-32 max-w-1010:hidden" />
                <img src="/assets/img/gamemobile.png" className="-mt-48 max-w-1320:-mt-32 hidden max-w-1010:block max-w-1010:mt-0" />

                <br />
         




            </div>

            <NewFooter/>

        </div>);
}
 
export default NewMainPage;