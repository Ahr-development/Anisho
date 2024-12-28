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

const SwiperProduct = () => {
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
                    <span className="text-2xl font-semibold text-gray-700 ">
                        محصولات موزیک
                    </span>
                    <span className="text-xl text-gray-600 ml-5">بهترین</span>
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
                    modules={[ Autoplay]}
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
                    navigation={true}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden" dir='rtl'>
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600 mt-2">{product.price} تومان</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div></>
    );
};

export default SwiperProduct;
