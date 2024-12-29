
'use client'

import { setModalCartControllerAction, setOpenSignInModalAction } from "@/data/Actions/InitAppActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./SignIn";
import { checkAuthenticated } from "@/utils/checkAuthenticated";
import { SetCurrentUserSignIn } from "@/data/Actions/UserActions";
import { GetCartService } from "@/data/Services/paymentService";
import { GetUserCartAction } from "@/data/Actions/PaymentActions";
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const controller = useSelector((state) => state.IModalController);
  const user = useSelector((state) => state.IUser);

  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  const handleOpenCart = async () => {
    const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
    localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID

    dispatch(setModalCartControllerAction(true))
    dispatch(GetUserCartAction(user.ServerToken,browserUUID))
  }

  const handleSignIn = () => {
    dispatch(setOpenSignInModalAction(true))
    console.log(user);
  }




  useEffect(() => {
    const handleScroll = () => {
      // چک کردن اسکرول برای فعال کردن نوار چسبنده
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const authenticate = async () => {
      const data = await checkAuthenticated();
      dispatch(SetCurrentUserSignIn(data))
    };

    if (user.ServerToken == null) {
      authenticate();
    }
    // اضافه کردن لیسنر اسکرول
    window.addEventListener("scroll", handleScroll);

    // پاک کردن لیسنر هنگام تخریب کامپوننت
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (

    <>

      <nav
        className={`bg-gray-800 text-white z-10 w-full py-3 ${isSticky ? "fixed top-0  left-0 shadow-md transition-all duration-300" : "relative"
          }`}
      >
        <div className="container hidden md:flex mx-auto items-center justify-between py-2 px-2  ">
          {/* سمت چپ: آیکون‌ها */}
          <div className="flex items-center space-x-6 md:absolute md:left-4 pl-8">
            <button className="hover:text-gray-400" onClick={() => handleOpenCart()}>
              <img src="/icons/cart.svg" className="w-6 h-6" />
            </button>

            {user.ServerToken !== null ? (<>
              <a className="hover:text-gray-400" href="/profile">
                <img src="/icons/user.svg" className="w-6 h-6" />
              </a>

            </>) : (<>


              <button className="hover:text-gray-400" onClick={() => handleSignIn()}>
                <img src="/icons/user.svg" className="w-6 h-6" />
              </button>

            </>)}

          </div>

          {/* لوگو در مرکز */}
          <div className="text-xl font-bold mx-auto text-center">
            <a href="#">لوگو</a>
          </div>

          {/* منوهای متنی سمت راست */}
          <div className="hidden md:flex items-center space-x-6 md:absolute md:right-4 pr-8">
            <a href="#" className="hover:text-gray-400">
              خانه
            </a>
            <a href="#" className="hover:text-gray-400">
              درباره ما
            </a>
            <a href="#" className="hover:text-gray-400">
              تماس با ما
            </a>
            <a href="#" className="hover:text-gray-400">
              دسته بندی ها
            </a>
          </div>
        </div>

        {/* حالت موبایل */}
        <div className="md:hidden flex items-center pt-5 pb-5 justify-between px-6 py-2">
          {/* آیکون سمت چپ */}
          <button className="hover:text-gray-400" onClick={handleOpenCart}>
            <img src="/icons/cart.svg" className="w-6 h-6" />
          </button>
          {/* لوگو وسط */}
          <div className="text-xl font-bold text-center">
            <a href="#">لوگو</a>
          </div>
          {/* آیکون سمت راست */}
          <button className="hover:text-gray-400" onClick={() => handleSignIn()}>
            <img src="/icons/user.svg" className="w-6 h-6" />
          </button>
        </div>
      </nav>


      {
        controller.SignInModal ? (<SignIn />
        ) : null
      }
  

    </>
  );
};

export default Navbar;
