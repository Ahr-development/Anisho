'use client'
import Navbar from "@/components/shared/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";



const Orders = () => {

    const orders = [
        {
          orderId: "12345",
          total: "500,000 تومان",
          items: [
            { name: "محصول ۱", price: "200,000 تومان", image: "https://access.arastdev.ir/uploads/products/1735113895021-Screenshot_9-12-2024_13727_flowbite.com.jpeg" },
            { name: "محصول ۲", price: "150,000 تومان", image: "https://access.arastdev.ir/uploads/products/1735113895021-Screenshot_9-12-2024_13727_flowbite.com.jpeg" },
            { name: "محصول ۳", price: "150,000 تومان", image: "https://access.arastdev.ir/uploads/products/1735113895021-Screenshot_9-12-2024_13727_flowbite.com.jpeg" },
            { name: "محصول ۳", price: "150,000 تومان", image: "https://access.arastdev.ir/uploads/products/1735113895021-Screenshot_9-12-2024_13727_flowbite.com.jpeg" },

            { name: "محصول ۳", price: "150,000 تومان", image: "https://access.arastdev.ir/uploads/products/1735113895021-Screenshot_9-12-2024_13727_flowbite.com.jpeg" },

            { name: "محصول ۳", price: "150,000 تومان", image: "https://access.arastdev.ir/uploads/products/1735113895021-Screenshot_9-12-2024_13727_flowbite.com.jpeg" },

          ],
        },
        {
          orderId: "67890",
          total: "300,000 تومان",
          items: [
            { name: "محصول ۴", price: "300,000 تومان", image: "/product4.jpg" },
          ],
        },
      ];
    return ( <>
    
    <Navbar/>
    
    <div className="mx-auto mt-10 mb-3 ">
        <div className="relative isolate overflow-hidden  text-center ">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight ">
            تاریخچه خرید های شما
          </h2>
          <p className="mx-auto mt-2   leading-8 text-gray-600">
            در این صفحه میتوانید از همه خریدهایتان مطلع شوید و درصورت نیاز آن ها را بررسی کنید و مدیریت کنید
          </p>
         
       
        </div>
      </div>    
    <div className="container mx-auto p-4">
      {orders.map((order, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-6 shadow-md bg-white"
        >
          {/* بخش جزئیات سفارش */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">شماره سفارش: {order.orderId}</p>
              <p className="text-gray-600">مجموع: {order.total}</p>
            </div>
            {/* کارت‌های Swiper */}
            <div className="w-full md:w-2/3 relative">
              <Swiper
                navigation={{
                  nextEl: `.next-btn-${index}`,
                  prevEl: `.prev-btn-${index}`,
                }}
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                className="swiper-container"
              >
                {order.items.map((item, idx) => (
                  <SwiperSlide key={idx} className="flex flex-col items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className=" rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* دکمه‌های سفارشی ناوبری */}
              <button
                className={`prev-btn-${index} absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow`}
              >
                ❮
              </button>
              <button
                className={`next-btn-${index} absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow`}
              >
                ❯
              </button>
            </div>
          </div>
          {/* دکمه‌های زیر */}
          <div className="flex justify-center space-x-4 mt-4 rtl:space-x-reverse">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              مشاهده جزئیات
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
              دانلود فاکتور
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
              پیگیری سفارش
            </button>
          </div>
        </div>
      ))}
    </div>
    
    </> );
}
 
export default Orders;