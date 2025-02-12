import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";



const Account = () => {
    const items = [
        { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURXSVJcJLHRlQApPQ2jJBniDiuSsdos84MA&s", label: "اشتراک کنوا پرو" },
        { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_%282013-2017%29.svg/2048px-YouTube_play_button_square_%282013-2017%29.svg.png", label: "یوتیوب پریمیوم" },
        { id: 3, image: "https://logos-world.net/wp-content/uploads/2020/12/Windows-New-Logo.png", label: "ویندوز اورجینال" },
        { id: 4, image: "https://pentagram-production.imgix.net/775ed833-4d9a-4151-b2f3-e42c10520cc9/AH_TVImage1.png?rect=93%2C0%2C1729%2C1080&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548", label: "اشتراک تریدینگ ویو" },
        { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDntaCOuIl6F4dpXF-7KyFbDIjRg3ykLG_g&s", label: "اشتراک نتفلیکس" },
        { id: 6, image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg", label: "اپل آیدی" },
      ];
    return (<>

        {/*  <div className="h-screen w-full bg-[#ff3838]">
            <div class="flex items-center justify-center min-h-screen ">
                <div class="text-center">
                    <img
                        src="/img/logo.png"
                        alt="Sample Image"
                        class="w-48 h-48 mx-auto rounded-full  transform -translate-x-1/2 -translate-y-1/2 animate-move-to-corner"
                    />
                    <p class="mt-4 text-lg font-medium text-white" dir="rtl">هر خرید یک داستان...</p>
                    <p class="mt-1 text-lg font-medium text-white" dir="rtl">Every purchase is a story    </p>

                </div>
            </div>

        </div> */}


        <div className="h-16 mt-5 mx-5 rounded-md bg-gray-200 flex items-center justify-between px-4">
            {/* سمت چپ: آیکون‌های سبد خرید و عکس پروفایل */}
            <div className="flex items-center space-x-4">
                <div className="bg-gray-400 w-8 h-8 rounded-full flex items-center justify-center">
                    {/* آیکون سبد خرید */}
                    🛒
                </div>
                <div className="bg-gray-400 w-8 h-8 rounded-full flex items-center justify-center">
                    {/* آیکون عکس پروفایل */}
                    👤
                </div>
            </div>

            {/* وسط: لوگو */}
            <div className="text-lg font-bold">
                {/* لوگو */}
                <img src="/img/logo.png" className="w-[78px] ml-[-34px] absolute top-[10px] " />

            </div>

            {/* سمت راست: منو */}
            <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-800">منو ۱</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">منو ۲</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">منو ۳</a>
            </div>
        </div>

        <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="mt-2 text-sm font-medium text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>


    </>);
}

export default Account;