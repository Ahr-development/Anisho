
'use client'
import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react'; // اگه از این آیکون استفاده می‌کنی، یا می‌تونی حذفش کنی
import { useDispatch, useSelector } from 'react-redux';
import { AddProductToCartService } from '@/data/Services/productService';
import { setOpenAddProductCartModalAction } from '@/data/Actions/InitAppActions';
// فرض می‌کنم subscriptionTypes و selectedType از بالا اومده یا استیتش رو خودت مینویسی

const AddToCartModal = ({ isOpen, onClose, product, timeSub, typeSub }) => {
    const user = useSelector((state) => state.IUser)
    const cart = useSelector((state) => state.ICart)
    const [price, setPrice] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState({});
    const [calculatedPrice, setCalculatedPrice] = useState(0);

    const dispatch = useDispatch()
    const handleClose = () => {
        onClose();
    };


    const handleOptionChange = (optionId, value) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [optionId]: value,
        }));

        // محاسبه قیمت براساس گزینه انتخاب شده
        const selectedOption = product.Options.find((option) => option.Id === optionId);
        const selectedSubOption = selectedOption.SubOptions.find(
            (subOption) => subOption.Id === parseInt(value)
        );

        if (selectedSubOption) {
            setCalculatedPrice((prevPrice) => {
                // حذف قیمت گزینه قبلی (اگر وجود داشت)
                const previousSubOptionId = selectedOptions[optionId];
                const previousSubOption = selectedOption.SubOptions.find(
                    (subOption) => subOption.Id === parseInt(previousSubOptionId)
                );

                return (
                    prevPrice -
                    (previousSubOption ? parseInt(previousSubOption.SubOptionPrice) : 0) +
                    parseInt(selectedSubOption.SubOptionPrice)
                );
            });
        }
    };


    const handleAddToCart = async () => {

        const optionsPayload = Object.entries(selectedOptions).map(([optionId, value]) => ({
            optionId,
            value,
        }));

        const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
        localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID

        // داده‌های اضافی برای ارسال
        const additionalData = {
            UUID: browserUUID, // شناسه کاربر
            ServerToken: user.ServerToken,
            ProductId: product.Id
        };

        dispatch(setOpenAddProductCartModalAction(true))
        const { data } = await AddProductToCartService(optionsPayload, additionalData, timeSub, typeSub)
    }


    useEffect(() => {
        setPrice((Number(timeSub?.FieldPriceIRR) || 0) + (Number(typeSub?.FieldPriceIRR) || 0))
        console.log(timeSub);
    }, [timeSub, typeSub])



    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-2xl p-5 shadow-xl max-w-md w-full mx-4" dir='rtl'>

                {/* دکمه بستن */}
                <button onClick={() => handleClose()}
                    className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                    ×
                </button>

                {/* عنوان */}
                <h3 className="text-center text-2xl font-bold mb-6 -mt-2 text-gray-700">افزودن به سبد خرید</h3>

                {/* بخش اول: نوع اشتراک */}
                <div className="mb-5">
                    <label className="text-gray-600 font-medium block mb-2">نوع اشتراک و زمان اشتراک</label>

                    {/* حالت نمایش انتخاب شده */}
                    <div className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg p-3 mb-3">
                        <div className="flex items-center gap-3">
                            <img
                                src="/img/gold.png"
                                alt=""
                                className="w-6 h-6"
                            />
                            <span className="text-gray-700">{typeSub.FieldName}</span>
                        </div>
                        <button className="text-sm text-purple-600 hover:underline">ویرایش</button>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg p-3 mb-3">
                        <div className="flex items-center gap-3">
                            <img
                                src="/img/inception.png"
                                alt=""
                                className="w-6 h-6"
                            />
                            <span className="text-gray-700">{timeSub.FieldName} روزه</span>
                        </div>
                        <button className="text-sm text-purple-600 hover:underline">ویرایش</button>
                    </div>


                </div>

                {/* بخش دوم: مدت زمان اشتراک */}

                {product.Options.map((element) => (

                    <div className="mb-5" key={element.Id}>
                        <label className="text-gray-600 font-medium block mb-2"> {element.OptionName} </label>
                        {/* حالت ادیت سلکت باکس */}
                        <select onChange={(e) => handleOptionChange(element.Id, e.target.value)} // تنظیم مقدار انتخاب‌شده

                            className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option>گزینه ای انتخاب نمائید</option>
                            {element.SubOptions.map((subElement) => (
                                <option key={subElement.Id} value={subElement.Id}>
                                    {subElement.SubOptionName}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}


                {/* قیمت */}
                <div className="flex justify-center items-center text-center mt-5">
                    <h3 className="text-xl kalamehExtraBold mr-2 ml-2">تومان</h3>
                    <h3 className="text-4xl kalamehExtraBold">{Number(price).toLocaleString("fa-IR")}</h3>
                </div>

                {/* دکمه تایید */}
                <button onClick={() => handleAddToCart()}
                    className="mt-6 w-full py-3 bg-purple-600 text-white rounded-xl text-lg hover:bg-purple-700 transition-all"
                >
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    );
};


export default AddToCartModal