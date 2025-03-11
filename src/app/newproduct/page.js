'use client'

import NewFooter from "@/components/Home/Contents/MainDesign/NewFooter";
import NewNavbar from "@/components/Home/Contents/MainDesign/NewNavbar";
import { Select } from "@headlessui/react";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock3, Crown } from 'lucide-react'; // آیکون‌های شیک




const NewProduct = () => {
    const subscriptionTypes = [
        { value: 'basic', label: 'اشتراک پایه', icon: <CheckCircle2 className="text-blue-500" /> },
        { value: 'pro', label: 'اشتراک حرفه‌ای', icon: <Clock3 className="text-purple-500" /> },
        { value: 'premium', label: 'اشتراک ویژه', icon: <Crown className="text-yellow-500" /> },
    ];

    const subscriptionDurations = [
        { value: '1month', label: '1 ماهه' },
        { value: '6month', label: '6 ماهه' },
        { value: '1year', label: '1 ساله' },
    ];

    const images = [
        "/assets/img/sg.png",
        "/assets/img/sg7.png",
        "/assets/img/sg8.png", // می‌تونی تعداد بیشتری اضافه کنی
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [fade, setFade] = useState(false);
    
    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setFade(true); // شروع فید آوت
          setTimeout(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setFade(false); // فید این
          }, 500); // زمان فید آوت (باید با duration توی CSS هماهنگ باشه)
        }, 4000); // هر ۴ ثانیه عوض می‌شه
    
        return () => clearInterval(interval);
      }, []);
    const [selectedType, setSelectedType] = useState(subscriptionTypes[0]);
    const [selectedDuration, setSelectedDuration] = useState(null);
    return (<>

        <NewNavbar />
        <div className=" mt-6 pl-32 pr-32 max-w-1110:pl-16 max-w-1110:pr-16 max-w-850:pr-5 max-w-850:pl-5">

            <div className="grid grid-cols-4 max-w-530:grid-cols-1 gap-3">
                <div className="bg-red-100 rounded-3xl  justify-items-center h-[250px] max-w-530:hidden">
                    <h3 className="text-2xl kalamehBold -mb-8 mt-5 max-w-640:-mb-5 "> روز</h3>

                    <h3 className="text-[110px] max-w-640:text-[80px] kalamehBold ">90</h3>

                    <h3 className="text-2xl kalamehBold -mt-4 mb-8 max-w-640:mt-0 max-w-850:text-xl max-w-640:w-20 max-w-640:text-center  ">مدت زمان اشتراک</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 text-white max-w-850:px-3 max-w-850:text-sm  py-2 bg-gray-600 rounded-lg text-lg font-bold transition-all duration-500 opacity-100  "
                    >
                        تغییر مدت زمان
                    </a>
                </div>
                <div className="col-span-2 bg-red-100 h-[350px] max-w-480:mt-10 overflow-hidden justify-items-center rounded-3xl flex flex-col items-center relative">
      <img src="/assets/img/netflix.png" className="w-48 mt-12 z-10" />

      <div className="flex justify-center items-center relative w-full h-full">
        <img
          src={images[currentIndex]}
          className={`h-auto max-w-[82%] max-w-1320:max-w-[100%] max-w-1110:max-w-[150%] max-w-640:max-w-[200%] max-w-530:max-w-[150%] -mt-10 object-contain z-20 transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          alt="slider"
        />
      </div>
    </div>
                <div className=" bg-red-100 h-48 rounded-3xl h-[250px] justify-items-center max-w-530:hidden">
                    <img src="/assets/img/premium.png" className="w-[150px]  mt-3 " />

                    <h3 className="text-2xl kalamehBold mb-8 "> نوع اشتراک</h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-2 max-w-850:px-3 max-w-850:text-sm bg-gray-600 rounded-lg text-white text-lg font-bold transition-all duration-500 opacity-100  "
                    >
                        تغییر مدت زمان
                    </a>
                </div>
            </div>

            <div className="flex ">
                <div className="basis-1/2  flex  items-center max-w-391:hidden">
                    <h3 className="text-xl max-w-702:text-sm kalamehExtraBold justify-items-center mt-5 mr-2 ">تومان</h3>
                    <h3 className="text-4xl max-w-702:text-2xl kalamehExtraBold justify-items-center mt-5 ">3,250,000</h3>

                </div>
                <div className="basis-full ">
                    <div className=" justify-items-end mt-5 ">
                        <h3 className="text-4xl kalamehExtraBold max-w-702:text-2xl max-w-391:text-center ">اشتـــــراک نتفلیکس</h3>
                        <h4 className="text-lg max-w-702:text-sm">netflix account premiun</h4>
                    </div>

                </div>
            </div>

            <div className="bg-white rounded-2xl mt-5 p-5 shadow-xl max-w-md mx-auto max-w-530:block hidden">
                <h3 className="text-center text-2xl font-bold mb-6 -mt-2 text-gray-700">انتخاب اشتراک</h3>

                {/* نوع اشتراک */}
                <div className="flex flex-col gap-4">
                    {subscriptionTypes.map((type) => (
                        <div
                            key={type.value}
                            onClick={() => handleTypeSelect(type)}
                            className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 ${selectedType.value === type.value
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-300 bg-gray-50'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {type.icon}
                                <span className="font-medium text-gray-700">{type.label}</span>
                            </div>
                            {selectedType.value === type.value && (
                                <CheckCircle2 className="text-purple-500" />
                            )}
                        </div>
                    ))}
                </div>

                {/* زمان اشتراک */}
                <div className="mt-6">
                    <label className="block mb-2 text-gray-600 font-medium">مدت زمان اشتراک</label>

                    <form class="max-w-sm mx-auto -mt-0">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>

                </div>


                <div className="flex justify-center items-center text-center max-w-391:flex hidden">
                    <h3 className="text-xl max-w-702:text-sm kalamehExtraBold mt-5 mr-2">تومان</h3>
                    <h3 className="text-4xl max-w-702:text-3xl kalamehExtraBold mt-5">3,250,000</h3>
                </div>

                {/* دکمه تایید */}
                <button
                    className="mt-6 w-full py-3 bg-purple-600 text-white rounded-xl text-lg hover:bg-purple-700 transition-all"
                >
                    افزودن به سبد خرید
                </button>
            </div>


        </div>

        <div className="mt-6 pl-52 pr-52 grid  grid-cols-3 max-w-850 max-w-850:pl-32 max-w-850:pr-32 max-w-530:pr-5 max-w-530:pl-5  gap-3">

            <div className="bg-gray-100 py-4 rounded-xl">
                <h3 className="text-center ">مشخصات محصول</h3>
            </div>
            <div className="bg-gray-100 py-4 rounded-xl">
                <h3 className="text-center ">نظرات</h3>
            </div>
            <div className="bg-gray-100 py-4 rounded-xl">
                <h3 className="text-center ">توضیحات محصول</h3>
            </div>
        </div>


        <div className="mt-8 pl-32 pr-32 grid mb-72 max-w-1010:mb-16 max-w-530:pr-5 max-w-530:pl-5 ">

            <h3 className="text-4xl kalamehExtraBold " dir="rtl">بدون شک <span className="text-red-500">نتفلیکس</span> پربازدید ترین و پرطرفدار ترین استریم دنیاست!</h3>
            <p className="text-right mt-5 text-3xl tracking-wide text-base/8 " dir="rtl">قصه‌گویی آغاز می‌شود و مخاطب در عرض چند دقیقه به دل‌سوزی برای شخصیت مرد رو می‌آورد. او در نگاه نخست از ویژگی عجیب‌وغریب شدیدا جذب‌کننده‌ای برخوردار نیست. اهل شرط‌بندی است، رخدادهای تلخی را پشت سر گذاشته، بدهی فراوان به افراد خطرناک دارد و هر لحظه زندگی خود را بیش‌ازپیش در آستانه‌ی فروپاشی می‌بیند. تنها ۳۰ دقیقه پس از آغاز نخستین اپیزود سریال Squid Game تماشاگر به سیانگ جی-هون اهمیت می‌دهد؛ به اینکه چه‌طور ممکن است وی از مخمصه‌ی بزرگ زندگی خود خلاص شود؟</p>
        </div>




        <NewFooter />
    </>);
}

export default NewProduct;