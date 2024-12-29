import { useState } from "react";




const ProfileInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (<>



        <div>
            <br />
            <h3 className="text-center text-2xl">مشخصات خرید شما</h3>
            <p className="text-center text-sm mt-3">دقت فرمائید خرید های شما با مشخصات زیر انجام خواهد شد اگر چنانچه تمایل دارید مشخصات دیگری برای خرید انتخاب کنید میتوانید همین مشخصات را تغییر داده یا یکی جدید اضافه نمایید</p>
            <br />

            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">نام و نام خانوادگی شما</label>
                    <input
                        type="text"
                        placeholder="لطفا نام و نام خانوادگی خود را در این قسمت وارد نمایید"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">ایمیل شما ( جهت خرید )</label>
                    <input
                        type="email"
                        placeholder="ایمیل خود را بطور دقیق در این قسمت وارد نمائید"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <button
                    type="button"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    ذخیره مشخصات اصلی
                </button>
            </form>
            <button
                type="button"
                className="w-full mt-4 bg-gray-200 text-gray-700 py-4 text-xl rounded-lg hover:bg-gray-300"
                onClick={() => setIsModalOpen(true)}
            >
                افزودن مشخصات جدید
            </button>
            <p className="mt-2 text-gray-500 text-sm">
                در قسمت سبد خرید میتوانید مشخصات خرید خودتان را براساس چیزی که در این قسمت ساخته اید تغییر دهید
            </p>

<br/>
<br/>

<br/>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-11/12 max-w-md p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">Add New Details</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Save Details
                            </button>
                        </form>
                        <button
                            type="button"
                            className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>


    </>);
}

export default ProfileInfo;