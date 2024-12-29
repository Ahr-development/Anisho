'use client'

import { useEffect, useState, useCallback } from 'react';
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { GetUserCartAction } from '@/data/Actions/PaymentActions';
import ShowImageStatic from '@/utils/ShowImageStatic';

const Cart = () => {
  const user = useSelector((state) => state.IUser);
  const cart = useSelector((state) => state.ICart);
  const dispatch = useDispatch();

  const totalPrice = cart
    ? Math.floor(cart.reduce((total, product) => total + product.Price, 0)).toLocaleString('fa-IR')
    : 0;

  const tax = cart
    ? Math.floor(cart.reduce((total, product) => total + product.Price, 0) * 0.09).toLocaleString('fa-IR')
    : 0;

  const discountTax = cart
    ? Math.floor(cart.reduce((total, product) => total + product.Price, 0) * 0.03).toLocaleString('fa-IR')
    : 0;

  const finalPrice = cart
    ? Math.floor(cart.reduce((total, product) => total + product.Price, 0) * 1.09 * 0.97).toLocaleString('fa-IR')
    : 0;

  const handleCartAsync = useCallback(() => {
    const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
    localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID
    console.log(user);
    dispatch(GetUserCartAction(user.ServerToken, browserUUID));
  }, [user, dispatch]);

  useEffect(() => {
    handleCartAsync();
  }, [handleCartAsync]);

  return (
    <>
      <Navbar />

      <section className="bg-white py-8 antialiased  md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">سبد خرید شما</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8" dir="rtl">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cart !== null ? (
                  <>
                    {cart.map((product) => (
                      <div key={product.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1 max-w-767:flex max-w-767:justify-center">
                            <ShowImageStatic classImage="h-20 w-20 dark:hidden rounded-md" image={product.ProductImage} />
                            <ShowImageStatic classImage="hidden h-28 w-28 dark:block rounded-md" image={product.ProductImage} />
                          </a>

                          <div className="flex items-center justify-between md:order-3 md:justify-end max-w-767:flex max-w-767:justify-center">
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-xl font-bold text-gray-900 max-w-767:text-2xl ">
                                {Number(product.Price).toLocaleString('fa-IR')} تومان
                              </p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 md:order-2 md:max-w-md">
                            <a href="#" className="text-xl font-medium mb-4 max-w-767:-mt-1 text-gray-900 hover:underline max-w-767:flex max-w-767:justify-center max-w-767:text-2xl">
                              {product.ProductName}
                            </a>
                            <div className="h-3 max-w-767:h-2"></div>

                            {product.Options.map((op, index) => (
                              <div key={index} className="flex flex-row mb-1 max-w-767:mb-2">
                                <p>{op.OptionName} :</p>
                                <div className="bg-gray-100 rounded-md  mr-2 width-auto">
                                  <p>
                                    {op.SubOptionName} - {Number(op.SubOptionPrice).toLocaleString('fa-IR')} تومان
                                  </p>
                                </div>
                              </div>
                            ))}

                            <div className="flex items-center gap-4 mt-4 max-w-767:mt-5">
                              <button
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                  />
                                </svg>
                                افزودن به علاقه مندی ها
                              </button>

                              <button
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600  hover:text-red-900"
                              >
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                حذف از سبد خرید
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">صورت حساب</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">مبلغ اصلی</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">{totalPrice} تومان</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">تخفیف کل</dt>
                      <dd className="text-base font-medium text-green-600">0 تومان</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">هزینه پشتیبانی</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">رایگان!</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">مالیات 9 درصد</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">{tax} تومان</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">تخفیف مالیاتی ویژه شما</dt>
                      <dd className="text-base font-medium text-green-600">{discountTax} تومان</dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">جمع کل</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">{finalPrice} تومان</dd>
                  </dl>
                </div>

                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  پرداخت و خرید
                </a>

                <div className="flex items-center justify-center gap-2">
                  <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-white  hover:no-underline ">
                    بازگشت به صفحه اصلی
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      آیا کد تخفیف دارید؟ اینجا وارد کنید
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-600 focus:ring-primary-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                  >
                    اعمال تخفیف
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;
