"use client"


import ProductInCart from "@/components/Messages/ProductInCart";
import CartDrawer from "@/components/shared/CartDrawer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { setOpenAddProductCartModalAction } from "@/data/Actions/InitAppActions";
import { GetProductByIdAction, setGetProductAction } from "@/data/Actions/ProductActions";
import { AddProductToCartService } from "@/data/Services/productService";
import ShowImageStatic from "@/utils/ShowImageStatic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


const GetProductServer = ({ initialProduct }) => {
    const [isVisible, setIsVisible] = useState(false);
    const product = useSelector((state) => state.IProduct)
    const user = useSelector((state) => state.IUser)
    const dispatch = useDispatch()
    const [selectedOptions, setSelectedOptions] = useState({});
    const controller = useSelector((state) => state.IModalController);
    const [isPriceVisible, setIsPriceVisible] = useState(false);
    const [calculatedPrice, setCalculatedPrice] = useState(0);

    // هندلر برای به‌روزرسانی مقادیر انتخاب شده
  
const handleOptionChange = (optionId, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }));
  
    // محاسبه قیمت براساس گزینه انتخاب شده
    const selectedOption = initialProduct.Options.find((option) => option.Id === optionId);
    const selectedSubOption = selectedOption.SubOptions.find(
      (subOption) => subOption.Id === parseInt(value)
    );
  
    if (selectedSubOption) {
      setCalculatedPrice((prevPrice) => {
        // حذف قیمت گزینه قبلی (اگر وجود داشت)
        const previousSubOptionId = selectedOptions[optionId];
        const previousSubOption = selectedOption.SubOptions.find(
          (subOption) => subOption.Id === parseInt(previousSubOptionId)
        );
  
        return (
          prevPrice -
          (previousSubOption ? parseInt(previousSubOption.SubOptionPrice) : 0) +
          parseInt(selectedSubOption.SubOptionPrice)
        );
      });
    }
  };

    useEffect(() => {
        // ذخیره اطلاعات در Redux
        dispatch(setGetProductAction(initialProduct));
    }, [initialProduct, dispatch]);

    useEffect(() => {
        const allSelected = initialProduct.Options.every(
          (option) => selectedOptions[option.Id] && selectedOptions[option.Id] !== "default"
        );
        setIsPriceVisible(allSelected);
      }, [selectedOptions, initialProduct.Options]);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handleAddToCart = async () => {

        const optionsPayload = Object.entries(selectedOptions).map(([optionId, value]) => ({
            optionId,
            value,
        }));

        const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
        localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID

        // داده‌های اضافی برای ارسال
        const additionalData = {
            UUID: browserUUID, // شناسه کاربر
            ServerToken: user.ServerToken,
            ProductId: initialProduct.Id
        };

        dispatch(setOpenAddProductCartModalAction(true))
        const { data } = await AddProductToCartService(optionsPayload, additionalData)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 500; // مقدار موردنظر برای ظاهر شدن
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        dispatch(GetProductByIdAction(1))

        window.addEventListener("scroll", handleScroll);
        console.log(initialProduct);
        // پاکسازی لیسنر هنگام خروج از کامپوننت
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (<>
        <Navbar />

        {
            controller.AddCartMSG ? (<>
                <ProductInCart />
            </>) : (null)
        }

        {Object.keys(product) !== 0 ? (

            <>

                <div className=" flex justify-end  bg-green-200 rounded-xl ml-5 mr-5 h-16 max-w-1185:hidden  mt-4">
                    <h2 className="text-md mt-6 mr-5 ">میباشد</h2>

                    <span className="text-3xl mt-4 font-bold text-red-900 mr-3" dir="rtl">{Number(initialProduct.MaxPriceIRR).toLocaleString('fa-IR')} تومان</span>

                    <h2 className="text-md mt-6 mr-5 ">و بیشترین قیمت این محصول</h2>

                    <span className="text-3xl mt-4 font-bold text-green-900 mr-3" dir="rtl">{Number(initialProduct.MinPriceIRR).toLocaleString('fa-IR')} تومان</span>

                    <h2 className="text-md mt-6 mr-5 ">شروع قیمت این محصول از کمترین قیمت</h2>

                </div>

                <div className="flex  h-30 mt-5 rounded-xl  ml-5 mr-5 max-w-640:block  " dir="rtl">
                    <div className="basis-1/4 ">
                        <ShowImageStatic image={initialProduct.ProductImage} classImage="rounded-lg" />

                    </div>
                    <div className="basis-1/2 max-w-480:basis-1  mr-9 max-w-640:mr-0">
                        <h2 className=" text-3xl mt-5">Microsoft Xbox Series S|X</h2>
                        <h3 className="mt-1 text-xl">{initialProduct.ProductName}</h3>

                        <div className="flex mt-5 ">
                            <div className="">
                                <p className="text-2xl">💙</p>
                            </div>
                            <div className="basis-full flex">
                                <h3 className="text-sm text-gray-600 text-right mr-3 mt-1">این محصول توسط {initialProduct.Like} نفر پسندیده شده است</h3>
                                <span class="inline-flex mr-3 items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">پسندیدن</span>

                            </div>
                        </div>
                        <div className="flex mt-1 ">
                            <div className="">
                                <p className="text-2xl">💬</p>
                            </div>
                            <div className="basis-full flex">
                                <h3 className="text-sm text-gray-600 text-right mr-3 mt-1">این محصول توسط 175 نفر نظر داده شده است</h3>
                                <span class="inline-flex mr-3 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-red-600/10">نمایش نظرات</span>

                            </div>
                        </div>



                        <p className=" ml-5 mt-5 leading-loose">{initialProduct.ProductDescription}</p>
                    </div>



                    <div className="basis-1/4  justify-start ">

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto mt-3">


                            {/* Pricing */}
                            <div className="mb-4">
                                <div className="flex items-center">
                                {isPriceVisible ? (
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-red-500">
                        {Number(calculatedPrice).toLocaleString("fa-IR")} تومان
                      </span>
                    </div>
                  ) : (
                    <div className="text-gray-500">لطفاً تمام گزینه‌ها را انتخاب کنید</div>
                  )}            
                                </div>
                            </div>
                            {initialProduct.Options.map((element) => (
                                <div className="mb-6" key={element.Id}>
                                    <div className="mb-2 text-sm font-medium text-gray-700">
                                        {element.OptionName}
                                    </div>
                                    <select
                                        id={"selectOption-" + element.Id}
                                        className="w-full p-2 border rounded-md text-gray-700"
                                        defaultValue="default"
                                        onChange={(e) => handleOptionChange(element.Id, e.target.value)} // تنظیم مقدار انتخاب‌شده
                                    >
                                        <option value="default" disabled>
                                            یک گزینه انتخاب کنید
                                        </option>
                                        {element.SubOptions.map((subElement) => (
                                            <option key={subElement.Id} value={subElement.Id}>
                                                {subElement.SubOptionName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}




                            {/* Add to Cart Button */}
                            <button onClick={handleAddToCart} className="w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                                اضافه به سبد خرید
                            </button>

                            {/* Social Links */}
                            <div className="flex justify-center gap-4  mt-4 text-gray-500">
                                <a href="#" className="hover:text-gray-700">
                                    واتساپ
                                </a>
                                <a href="#" className="hover:text-gray-700">
                                    تلگرام
                                </a>
                                <a href="#" className="hover:text-gray-700">
                                    فیسبوک
                                </a>
                            </div>
                        </div>
                    </div>







                </div>





                <p class="text-5xl md:text-9xl  text-center mt-12 -mb-14 font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">{initialProduct.ProductSpellName}</p>





                <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                    <div class="-m-1 flex flex-wrap md:-m-2">
                        <div class="flex w-1/2 flex-wrap">
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                            </div>
                        </div>
                        <div class="flex w-1/2 flex-wrap">
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white -mt-16" dir="rtl">
                    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">آسان ترین روش خرید را داشته باشید</h2>
                            <p className="mt-4 text-gray-500">
                                یکی از ویژگی‌های جذابِ گیم پس آلتیمیت، امکانِ اجرای بازی‌ها روی گوشیه. کافیه اپلیکیشن Game Pass رو از گوگل پلی دانلود کنید، دسته بلوتوثی رو به موبایل‌تون وصل کنید و بازی رو شروع کنید.

                                البته این ویژگی هنوز در ایران در دسترس نیست. اما به محض فعال شدنش، همه دارنده‌های اشتراکِ آلتیمیت می‌تونن ازش استفاده کنند.
                            </p>
                        </div>

                        <div className="mt-16 space-y-16">
                            {initialProduct.Sections.map((feature) => (
                                <div
                                    key={feature.Id} // استفاده از یک مقدار یکتا به عنوان کلید
                                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                >
                                    <div
                                        className={classNames(
                                            feature.Id % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                            'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
                                        )}
                                    >
                                        <h3 className="text-3xl font-medium text-green-900">{feature.SectionTitle}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{feature.SectionText}</p>
                                    </div>
                                    <div
                                        className={classNames(
                                            feature.Id % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                            'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
                                        )}
                                    >
                                        <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                            <ShowImageStatic image={feature.SectionImage} classImage="object-cover object-center" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>



                <div className={`fixed inset-x-0 bottom-0 flex pl-12 pr-12 flex-col justify-between gap-4 bg-green-100 p-6 shadow ring-1 ring-gray-900/10 md:flex-row md:items-center transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
                    }`}>
                    {/* بخش چپ */}
                    <div className="flex flex-row items-center gap-4">


                        {/* دکمه‌های با آیکون */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="rounded-full bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 focus:outline-none"
                            >
                                {/* آیکون دلخواه */}
                                <span className="material-icons">💬</span>
                            </button>
                            <button
                                type="button"
                                className="rounded-full bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 focus:outline-none"
                            >
                                <span className="material-icons">❤️</span>
                            </button>
                            <button
                                type="button"
                                className="rounded-full bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 focus:outline-none max-w-640:hidden"
                            >
                                <span className="material-icons">درخواست پشتیبانی</span>
                            </button>
                        </div>
                        {/* دکمه افزودن به سبد خرید */}
                        <button
                            type="button"
                            className="rounded-md bg-green-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            افزودن به سبد خرید
                        </button>
                        {/* قیمت */}
                        <div className="text-2xl font-bold text-red-900" dir="rtl">{Number(initialProduct.MinPriceIRR).toLocaleString('fa-IR')} تومان</div>
                    </div>

                    {/* بخش راست */}
                    <div className="text-right">
                        <p className="text-2xl font-medium text-gray-900">{initialProduct.ProductName}</p>
                        <p className="text-xs text-gray-500">{initialProduct.ProductEnglishName}</p>
                    </div>
                </div>



            </>
        ) : (<></>)}


        <CartDrawer />
        <Footer />
    </>);
}



export default GetProductServer;