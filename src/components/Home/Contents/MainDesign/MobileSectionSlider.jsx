import React, { useState, useEffect } from 'react';

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

  return <span dangerouslySetInnerHTML={{ __html: displayText }} />;
};

const sliderData = [
  {
    imageSrc: '/assets/img/sg.png',
    title: 'این بازی تمومی نداره!',
    subtitle: 'تا <span class="text-red-500 kalamehExtraBold">تهش</span> رفتم!!', // تغییر به class به جای className
    buttonText: 'خرید کنید!',
    buttonLink: '#',
  },
  {
    imageSrc: '/assets/img/yas.png',
    title: 'از یاس تا امینم!',
    subtitle: 'گوش کن و <span class="text-green-500">لذتــــــ</span> ببر!',
    buttonText: 'مشاهده بیشتر',
    buttonLink: '#',
    bgcolor:'bg-green-100'
  },
  // اسلایدهای بیشتر را اینجا اضافه کنید
];

const MobileHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000); // تغییر اسلاید هر 5 ثانیه

    return () => clearInterval(interval); // پاک کردن interval هنگام unmount
  }, []);

  const { imageSrc, title, subtitle, buttonText, buttonLink } = sliderData[currentSlide];

  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-2xl p-6 mx-auto mt-5 text-right h-full hidden max-w-430:flex" dir="rtl">
      {/* متن و دکمه */}
      <div className="flex flex-col items-center gap-3 text-center w-full">
        <h3 className="text-3xl font-bold text-gray-800 kalamehExtraBold max-w-1110:text-2xl">{title}</h3>
        <h1 className="text-5xl font-extrabold kalamehExtraBold max-w-1110:text-4xl max-w-632:text-5xl">
          <TypingEffect text={subtitle} speed={50} colorSpeed={30} />
        </h1>

        {/* دکمه و لوگو */}
        <div className="flex flex-row items-center justify-center gap-3 mt-4 w-full">
          <span className="text-red-500 font-bold text-lg">NETFLIX</span>
          <a href={buttonLink}>
            <button className="kalamehExtraBold bg-gray-800 text-white text-lg px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-900 transition max-w-1110:text-sm">
              {buttonText}
            </button>
          </a>
        </div>
      </div>

      {/* تصویر */}
      <div className="w-full mt-auto -mb-6">
        <img src={imageSrc} className="w-full max-w-xs mx-auto" alt="Slider Image" />
      </div>

    </div>
  );
};

export default MobileHeroSection;