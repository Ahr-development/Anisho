import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

const sliderData = [
  {
    imageSrc: '/assets/img/sg.png',
    title: 'این بازی تمومی نداره!',
    subtitle: 'تا <span class="text-red-500">تهش</span> رفتم!!',
    buttonText: 'خرید کنید!',
    buttonLink: '#',
    bgcolor:'bg-red-100'

  },
  {
    imageSrc: '/assets/img/yas.png',
    title: 'از یاس تا امینم!',
    subtitle: 'گوش کن و <span class="text-green-500">لذتــــــ</span> ببر!',
    buttonText: 'مشاهده بیشتر',
    buttonLink: '#',
    bgcolor:'bg-green-100'
  },
  // You can add more objects here
];

// کامپوننت تایپینگ بهبود یافته
const TypingEffect = ({ text, speed = 100, colorSpeed = 50 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // تجزیه متن به بخش‌های عادی و رنگی
    const parts = text.split(/(<span.*?>.*?<\/span>)/g);

    let currentIndex = 0;
    let currentPart = 0;
    let currentText = '';

    const typeNextCharacter = () => {
      if (currentPart >= parts.length) return;

      const part = parts[currentPart];

      // اگر بخش فعلی یک تگ <span> است
      if (part.startsWith('<span')) {
        currentText += part;
        currentPart++;
        setDisplayText(currentText);
        setTimeout(typeNextCharacter, colorSpeed); // سرعت تایپ برای متن رنگی
      } else {
        // اگر بخش فعلی متن عادی است
        if (currentIndex < part.length) {
          currentText += part[currentIndex];
          currentIndex++;
          setDisplayText(currentText);
          setTimeout(typeNextCharacter, speed); // سرعت تایپ برای متن عادی
        } else {
          currentPart++;
          currentIndex = 0;
          setTimeout(typeNextCharacter, speed);
        }
      }
    };

    typeNextCharacter();
  }, [text, speed, colorSpeed]);

  return <>{parse(displayText)}</>;
};

const HeroSectionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const { imageSrc, title, subtitle, buttonText, buttonLink,bgcolor } = sliderData[currentSlide];

  return (<>
  
  
      <div className={`flex items-center justify-between  rounded-2xl p-8 mx-auto mt-5 max-w-430:hidden transition-all duration-500 ` + bgcolor}>
      {/* تصویر سمت چپ */}
      <div className="basis-2/5 max-w-1237:basis-1/2">
        <img
          src={imageSrc}
          alt="Slider Image"
          className="-ml-20 -mb-8 max-w-761:max-w-[150%] transition-transform duration-500"
        />
      </div>

      {/* متن و دکمه */}
      <div className="basis-* max-w-1237:basis-1/2 flex flex-col items-start gap-4 text-right" dir="rtl">
        <h3 className="text-4xl font-bold text-gray-800 kalamehExtraBold max-w-1110:text-2xl">{title}</h3>
        <h1 className="text-7xl font-extrabold kalamehExtraBold max-w-1110:text-5xl max-w-632:text-4xl">
          <TypingEffect text={subtitle} speed={50} colorSpeed={30} />
        </h1>

        {/* دکمه و لوگو */}
        <div className="flex items-center gap-4 mt-5">
          <span className="text-red-500 font-bold text-lg max-w-632:hidden">NETFLIX</span>
          <p className="text-gray-500 text-xl kalamehBold max-w-1110:text-sm">اشتراک قانونی نتفلیکس</p>

          <a href={buttonLink}>
            <button className="kalamehExtraBold bg-gray-800 text-white text-xl px-10 py-3 rounded-full font-bold shadow-md hover:bg-gray-900 transition max-w-1110:text-sm max-w-1110:px-1 max-w-1110:pl-6 max-w-1110:pr-6">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  
  </>

  );
};

export default HeroSectionSlider;