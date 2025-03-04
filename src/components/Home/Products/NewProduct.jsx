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

const NewProduct = () => {
    return (
        <>







    

            <div className=" mx-auto p-4" dir="rtl">

                <Swiper
                    spaceBetween={5}
                    slidesPerView={4}
                  
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                >
         
         <SwiperSlide className=''>
<div className=''>

<img src="/img/zx.png"/>


</div>
</SwiperSlide>
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className=''>
                                <img src='/img/ws.png' className='rounded-md' />

                            </div>
                        </SwiperSlide>
                    ))}
                    
         
                </Swiper>
            </div></>
    );
};

export default NewProduct;
