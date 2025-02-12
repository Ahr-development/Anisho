
'use client';

// components/ProductCarousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper/modules";

const products = [
    { id: 1, name: 'محصول 1', image: 'https://mobogift.com/cdn/2023/03/23/06-14-14_641c65be5cb5b.jpeg', price: '100,000' },
    { id: 2, name: 'محصول 2', image: 'https://cdn-fastly.motorcycle.com/media/2023/11/17/19231/best-black-friday-motorcycle-deals-available-now.jpg?size=1200x628', price: '150,000' },
    { id: 3, name: 'محصول 3', image: 'https://mobogift.com/cdn/2019/11/16/08-51-05_5dd030012eab0.jpg', price: '200,000' },
    { id: 4, name: 'محصول 4', image: 'https://mobogift.com/cdn/2024/08/15/07-01-31_66be1f536ed7e.jpeg', price: '250,000' },
    { id: 5, name: 'محصول 5', image: 'https://mobogift.com/cdn/2019/11/16/08-54-03_5dd030b315201.jpg', price: '250,000' },

];

const VideoContentSwiper = () => {
    return (
        <>







            <div className="flex justify-between items-center py-4 px-10 mr-10 ml-10 mt-7 max-w-640:hidden ">
                <div className="flex items-center">
                    <button className="text-xl font-semibold text-gray-600 mr-4">
                        ←
                    </button>
                    <button className="text-xl font-semibold text-gray-600">→</button>
                </div>
                <div className="flex items-center">
                    <span className="text-2xl font-semibold text-gray ">
                        آنیشو بلاگ - اخبار بروز استور ها
                    </span>
                    <span className="text-xl text-gray-600 ml-5">خبرگزاری</span>
                </div>
            </div>

            <div className="flex items-center justify-center mt-6 mb-3 max-w-640:block hidden text-center">
                <i className="fas fa-chevron-left text-gray-700 mr-4"></i>
                <span className="text-3xl font-semibold text-gray-700 text-center">
                    محصولات موزیک
                </span>
                <i className="fas fa-chevron-right text-gray-700 ml-4"></i>
            </div>


            <div className="container mx-auto p-4">

                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}

                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>





<div class="max-w-xs rounded overflow-hidden shadow-lg bg-white relative group" >

  <img class="w-full h-48 object-cover transition-all duration-300 group-hover:opacity-50"  src="https://xxboxnews.blob.core.windows.net/prod/sites/2/2024/06/Consoles-eb36182249206cefa827.jpg" alt="Video Thumbnail"/>
  

  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-4.57-3.206a1 1 0 00-1.482.832v6.414a1 1 0 001.482.832l4.57-3.206a1 1 0 000-1.664z"/>
    </svg>
  </div>

  <div class="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-sm rounded">
    10:30
  </div>
  
  <div class="px-4 py-2">
    <p class="font-semibold text-lg">عنوان ویدئو</p>
  </div>
</div>



                        </SwiperSlide>
                    ))}
                </Swiper>
            </div></>
    );
};

export default VideoContentSwiper;
