
'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";


const NewNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
    return ( <>
    
    <div class="flex max-w-480:hidden">
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

                <div class="basis-full max-w-967:basis-auto   p-4 justify-items-end max-w-672:-mr-20 max-w-430:basis-1/4">



                    <div class="flex items-center w-2/3 max-w-967:w-full bg-[#eee6da] rounded-full px-4 py-2 border border-gray-400 max-w-672:-mt-1 max-w-430:hidden ">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 101 10a7.5 7.5 0 0015 0z"></path>
                        </svg>
                        <input dir="rtl" type="text" class="bg-transparent flex-1 outline-none p-1 text-right font-bold text-black placeholder-gray-500"
                            placeholder="جستجوی محصول..." />
                    </div>

                </div>
                <div class="basis-1/3 max-w-1378:basis-1/2 max-w-800:w-64 max-w-800:mr-10  p-4 max-w-672:basis-full max-w-672:justify-items-end max-w-620:ml-20 mr-8 max-w-672:ml-20" dir="rtl">
                    <img src="/assets/icon/icon.png" className="w-1/2 max-w-1088:w-32 ml-3 max-w-672:w-24 max-w-500:hidden" />
                    <img src="/img/logo.png" className="w-1/2 max-w-1088:w-32 ml-3 max-w-672:w-24 hidden max-w-500:block w-full " />

                </div>
            </div>





            <motion.nav
                className={`fixed top-0 left-0 w-full p-4 bg-white shadow-md flex items-center justify-between transition-all invisible max-w-480:visible z-50 ${isSticky ? "py-2 shadow-lg" : "py-4"}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* منو */}
                <button className="text-gray-700 p-2">
                    <Menu size={24} />
                </button>

                {/* لوگو */}
                <div className="flex-1 flex justify-center">
                    <img src="/assets/icon/icon.png" alt="Logo" className="h-10" />
                </div>

                {/* سبد خرید */}
                <button className="text-gray-700 p-2">
                    <ShoppingCart size={24} />
                </button>
            </motion.nav>



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
                    <div className="flex gap-2 p-4 bg-gray-100 justify-center items-center h-16 w-full hidden max-w-620:flex  max-w-430:mt-14 " dir="rtl">
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

    
    
    </> );
}
 
export default NewNavbar;