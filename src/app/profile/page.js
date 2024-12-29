
'use client'
import ProfileInfo from "@/components/Profile/ProfileInfo";
import Footer from "@/components/shared/Footer";
import FooterMode2 from "@/components/shared/FooterMode2";
import Navbar from "@/components/shared/Navbar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [auth, setAuth] = useState(false)
    const user = useSelector((state) => state.IUser)

    useEffect(() => {
        if (user.ServerToken !== null) {
            setAuth(true)
        }
    }, [user])

    const tabs = [
        { id: "overview", label: "اطلاعات اصلی شما", icon: "/img/personal-information.png" },
        { id: "buys", label: "خرید ها", icon: "/img/empty-cart.png" },
        { id: "settings", label: "علاقه مندی ها", icon: "/img/heart.png" },
        { id: "notifications", label: "خروج از حساب", icon: "/img/logout.png" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "overview":
                return  <ProfileInfo/> 
            case "settings":
                return <div>Settings Content</div>;
            case "notifications":
                return <div>Notifications Content</div>;
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar />
            {
                auth ? (<>

                    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100" dir="rtl">
                        {/* Sidebar */}
                        <div className="w-full lg:w-1/4 bg-white shadow-md p-4">
                            {/* User Info */}
                            <div className="mb-6 text-center">
                                <p className="font-bold text-lg">John Doe</p>
                                <p className="text-gray-500">+123456789</p>
                                <p className="text-gray-500">johndoe@example.com</p>
                            </div>
                            {/* Menu */}
                            <ul className="space-y-2">
                                {tabs.map((tab) => (
                                    <li
                                        key={tab.id}
                                        className={`flex items-center  cursor-pointer p-4 rounded-lg transition-colors hover:bg-gray-100 ${activeTab === tab.id ? "bg-gray-200 font-bold" : ""
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <img className="w-10" src={tab.icon}/>
                                        <span className="pr-2">{tab.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4">
                            {renderContent()}
                        </div>
                    </div>


                </>) : (<>

                    <div class="flex items-center justify-center  ">
                        <div class="p-6  text-center mb-20 mt-20">
                            <h1 class="text-2xl font-bold mb-4">ورود به فروشگاه</h1>
                            <p class="text-gray-600 mb-6">جهت ادامه و استفاده کامل از صفحات ابتدا نیاز است وارد فروشگاه شوید</p>
                            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                ادامه و ورود
                            </button>
                        </div>
                    </div>


                </>)
            }


            <FooterMode2 />

        </>
    );
};

export default Profile;
