'use client'

import AnishooDigitalProduct from "@/components/Home/Products/AnishooDigitalProduct";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useEffect, useState } from "react";



const Information = () => {

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

            <div class="flex">
                <div class="basis-1/2 ml-8 p-4 max-w-761:justify-items-start justify-items-center  mt-1 max-w-1378:basis-full max-w-672:mt-1 ">
                    <div class="flex items-center gap-x-6">
                        <img src="/assets/icon/shopping-cart.svg" class=" w-8" />


                        <div class="flex items-center gap-x-2 cursor-pointer">
                            <img src="/assets/icon/account.svg" class="w-8 h-8 rounded-full" />

                            <span class="text-black font-semibold max-w-761:hidden">ورود به حساب</span>
                        </div>

                        <div class="flex items-center gap-x-2 cursor-pointer max-w-620:hidden">
                            <img src="/assets/icon/iran.png" class="w-8 h-8 rounded-full" />
                            <span class="text-black font-semibold max-w-867:hidden">فارسی | تومان</span>
                        </div>
                    </div>



                </div>

                <div class="basis-full max-w-967:basis-auto   p-4 justify-items-end max-w-672:-mr-20 ">



                    <div class="flex items-center w-2/3 max-w-967:w-full bg-[#eee6da] rounded-full px-4 py-2 border border-gray-400 max-w-672:-mt-1">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 101 10a7.5 7.5 0 0015 0z"></path>
                        </svg>
                        <input dir="rtl" type="text" class="bg-transparent flex-1 outline-none p-1 text-right font-bold text-black placeholder-gray-500"
                            placeholder="جستجوی محصول..." />
                    </div>

                </div>
                <div class="basis-1/3 max-w-1378:basis-1/2 max-w-800:w-64 max-w-800:mr-10  p-4 max-w-672:basis-full max-w-672:justify-items-end max-w-620:ml-20 mr-8 " dir="rtl">
                    <img src="/assets/icon/icon.png" className="w-1/2 max-w-1088:w-32 ml-3 max-w-672:w-24 max-w-500:hidden" />
                    <img src="/img/logo.png" className="w-1/2 max-w-1088:w-32 ml-3 max-w-672:w-24 hidden max-w-500:block w-full" />

                </div>
            </div>

            <div className="flex">
                <div className="basis-1/2 max-w-929:hidden  h-12">
                    <div className="grid grid-cols-2 items-center h-full">
                        <div className="bg-yellow-200 h-12 flex items-center justify-center">
                            <h3 className="kalamehExtraBold text-xl " dir="rtl">آتخفیف!</h3>
                        </div>
                        <div className="bg-red-200 w-full h-full flex items-center justify-center">
                            <h3 className="kalamehExtraBold text-xl " dir="rtl">آنیشو گیمینگ!</h3>
                        </div>
                    </div>
                </div>

                <div className="basis-* max-w-929:justify-items-center  max-w-929:bg-red-100 max-w-929:h-14 w-full justify-items-end pr-10 max-w-761:pr-0 ">
                    <div class="flex gap-10 text-lg font-semibold text-gray-900 items-center h-full max-w-620:hidden">
                        <div class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                            <span>دسته بندی ها</span>
                            <img src="/assets/icon/category.svg" className="w-5" />

                        </div>
                        <div class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                            <span>محصولات گیمینگ</span>
                            <img src="/assets/icon/category.svg" className="w-5" />

                        </div>
                        <div class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                            <span>محصولات مایکروسافت</span>
                            <img src="/assets/icon/category.svg" className="w-5" />

                        </div>
                    </div>
                    <div className="flex gap-2 p-4 bg-gray-100 justify-center items-center h-16 w-full hidden max-w-620:flex" dir="rtl">
                        {/* آیکون اول */}
                        <div className="group flex items-center gap-2 px-2 py-1 rounded-full transition-all duration-300 hover:w-32">
                            <img src="/assets/icon/category.svg" className="w-5" />
                            <span className="opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto transition-all duration-300 text-gray-800">
                                خانه
                            </span>
                        </div>

                        {/* آیکون دوم */}
                        <div className="group flex items-center gap-2 px-2 py-1 rounded-full  transition-all duration-300 hover:w-32">
                            <img src="/assets/icon/category.svg" className="w-5" />
                            <span className="opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto transition-all duration-300 text-gray-800">
                                بازی‌ها
                            </span>
                        </div>

                        {/* آیکون سوم */}
                        <div className="group flex items-center gap-2 px-2 py-1 rounded-full  transition-all duration-300 hover:w-32">
                            <img src="/assets/icon/category.svg" className="w-5" />
                            <span className="opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto transition-all duration-300 text-gray-800">
                                تنظیمات
                            </span>
                        </div>
                    </div>


                </div>



            </div>


            <div className="ml-32 mr-32 max-w-929:mr-5 max-w-929:ml-5">

                <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-8 mx-auto mt-5 ">
                    {/* تصویر سمت چپ */}
                    <div className="basis-2/5 max-w-1237:basis-1/2 ">
                        <img src="/assets/img/sg.png" className="-ml-20 -mb-8 max-w-761:max-w-[150%] " />
                    </div>

                    {/* متن و دکمه */}
                    <div className="basis-* max-w-1237:basis-1/2 flex flex-col items-start gap-4 text-right" dir="rtl">
                        <h3 className="text-4xl font-bold text-gray-800 kalamehExtraBold max-w-1110:text-2xl">این بازی تمومی نداره!</h3>
                        <h1 className="text-7xl font-extrabold kalamehExtraBold max-w-1110:text-5xl max-w-632:text-4xl">
                            تا <span className="text-red-500 kalamehExtraBold">تهش</span> رفتم!!
                        </h1>

                        {/* دکمه و لوگو */}
                        <div className="flex items-center gap-4 mt-5">
                            <span className="text-red-500 font-bold text-lg max-w-632:hidden">NETFLIX</span>
                            <p className="text-gray-500 text-xl kalamehBold max-w-1110:text-sm">اشتراک قانونی نتفلیکس</p>

                            <button className=" kalamehExtraBold bg-gray-800 text-white text-xl px-10 py-3 rounded-full font-bold shadow-md hover:bg-gray-900 transition max-w-1110:text-sm max-w-1110:px-1 max-w-1110:pl-6  max-w-1110:pr-6">
                                خرید کنید!
                            </button>
                        </div>
                    </div>
                </div>






                <div className="flex mt-2">
                    <div className="bg-green-200 basis-1/2 h-52 rounded-2xl mr-1 justify-items-end flex flex-col items-center p-5">
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
                        className={`basis-1/2 h-52 rounded-2xl mr-1 flex flex-col items-center justify-center relative overflow-hidden hidden max-w-850:flex ${items[currentIndex].bgColor}`}
                        onMouseEnter={() => setShowButton(true)}
                        onMouseLeave={() => setShowButton(false)}
                    >
                        {/* لوگوی کوچک */}
                        <img src="/assets/img/msft.png" className="w-40 h-auto mt-2 max-w-850:mt-8 max-w-730:mt-5 max-w-672:mt-0" />

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
                            className={`absolute bottom-5 px-6 py-2 ${items[currentIndex].bgColor}  rounded-lg text-lg font-bold transition-all duration-500 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                                <div className="text-right ">
                                    <h3 className="text-lg max-w-1088:text-sm kalamehBold">اشتراک پریمیوم</h3>
                                    <h1 className="text-6xl max-w-1088:text-4xl kalamehExtraBold">اسپاتیفای</h1>
                                    <button className="bg-black text-white px-5 py-2 rounded-full text-sm mt-5 hidden max-w-730:block ">خرید کنید</button>

                                </div>
                            </div>

                        </div>

                        <div className="basis-1/2 relative flex flex-col items-end max-w-500:-mr-20 " >
                            <div className="rounded-full bg-[#967a00] w-28 h-10 mt-5 mr-5 flex items-center justify-center max-w-500:hidden">
                                <h3 className="kalamehExtraBold text-xl px-5 pt-1 text-white" dir="rtl">آتخفیف!</h3>
                            </div>
                            <img
                                src="/assets/img/spot.png"
                                className="max-w-full max-h-full object-contain -mt-14 mr-20 max-w-702:-mt-5 max-w-500:mt-12 max-w-500:max-w-[150%]"
                            />
                        </div>
                    </div>

                </div>


                <br />
                <h3 className="text-xl justify-items-end mt-3 kalamehBold" dir="rtl">آخرین محصولات ارائه شده با تخفیف ویژه</h3>


                <AnishooDigitalProduct />
                <AnishooDigitalProduct />
                <br />

                <div className="bg-gradient-to-r from-purple-200 to-blue-200 pt-10 pb-5 pr-20 shadow-lg flex relative" dir="rtl">
                    <div className="basis-full z-10">
                        <h1 className="text-5xl font-bold mb-2 kalamehExtraBold">آتخفیف!</h1>
                        <p className="text-lg mb-4 kalamehExtraBold">تخفیف بهویی خودکار براساس آخرین محصول خریداری شده</p>
                    </div>

                    <div className="absolute left-10  flex items-center justify-end  rounded-lg">
                        <img src="/img/ye.jpg" className="max-w-[260px]  rounded-lg  " />
                        <div className="absolute flex items-center bottom-3 left-10  justify-center  bg-red-600 px-5 py-1 rounded-lg">
                            <h1 className="text-xl font-bold mb-2 kalamehExtraBold ">30 دقیقه تا انقضا</h1>

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2">

                    <div className="">
                        <h1 className="text-4xl font-bold mb-2 kalamehExtraBold text-right mr-20 mt-5">3,281,000 ت</h1>

                    </div>
                    <h1 className="text-4xl font-bold mb-2 kalamehBold text-right mr-20 mt-5">محصول مایکروسافت - ویندوز 11 پرو</h1>

                </div>




                <br />
                <br />



                <br />
                <h3 className="text-xl justify-items-end mt-3 kalamehBold" dir="rtl">آخرین محصولات ارائه شده با تخفیف ویژه</h3>


                <AnishooDigitalProduct />
                <AnishooDigitalProduct />
                <br />




                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-200 rounded-lg h-52 relative overflow-hidden ">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/cat1.png" className="h-auto object-contain w-[70%]" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10">
                                <h3 className="text-2xl ">دسته بندی</h3>

                                <h3 className="text-5xl  kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-yellow-100 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/spot.png" className="h-auto w-[90%] object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10">
                                <h3 className="text-2xl ">دسته بندی</h3>

                                <h3 className="text-5xl  kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-200 rounded-lg h-52 relative overflow-hidden">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%]  object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10">
                                <h3 className="text-2xl ">دسته بندی</h3>

                                <h3 className="text-5xl  kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex bg-red-200 mt-3 mb-3 h-28 relative overflow-hidden">
                    <div className="basis-1/2  justify-items-end items-end ">
                        <img src="/assets/img/lady2.png" className="h-auto object-contain w-28" />
                    </div>
                    <div className="basis-* w-full">
                        <h3 className="kalamehBold mt-9 mr-16 text-4xl text-center" dir="rtl">دسته بندی برای همه سلیقه ها ...</h3>
                    </div>
                    <div className="basis-1/2 ">
                        <img src="/assets/img/lady1.png" className="h-auto object-contain w-28" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-200 rounded-lg h-52 ">
                        <div className="grid grid-cols-2 ">
                            <div className="flex ">
                                <img src="/assets/img/sg4.png" className="h-auto max-w-[70%]  object-contain" />
                            </div>
                            <div className="justify-items-end mt-5 mr-10">
                                <h3 className="text-2xl ">دسته بندی</h3>

                                <h3 className="text-5xl  kalamehExtraBold">موسیقی</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-yellow-200 rounded-lg h-52">

                    </div>
                    <div className="bg-purple-200 rounded-lg h-52">

                    </div>
                </div>

            </div>


        </div>);
}

export default Information;