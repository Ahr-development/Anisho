



'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { setModalCartControllerAction } from '@/data/Actions/InitAppActions'
import ShowImageStatic from '@/utils/ShowImageStatic'
import { RemoveUserCart } from '@/data/Services/paymentService'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast'
import { GetUserCartAction } from '@/data/Actions/PaymentActions'


const CartDrawer = () => {
  const controller = useSelector((state) => state.IModalController);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.IUser)
  const cart = useSelector((state) => state.ICart)
  const totalPrice = cart
    ? cart.reduce((total, product) => total + product.Price, 0).toLocaleString('fa-IR')
    : 0;

  const handleCloseModal = () => {
    dispatch(setModalCartControllerAction(false))

  }

  const handleRemoveCart = async (CartId) => {
    const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
    localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID

    const removeUserCartPromise = RemoveUserCart(user.ServerToken, browserUUID, CartId);

    toast.promise(
      removeUserCartPromise,
      {
        loading: 'در حال حذف آیتم ...',
        success: <b>آیتم با موفقیت حذف شد</b>,
        error: <b>خطای ناشناخته!</b>,
      }
    );
    
    const { data } = await removeUserCartPromise;

        
        dispatch(setModalCartControllerAction(true))
        dispatch(GetUserCartAction(user.ServerToken,browserUUID))
  }


  return (<>


    <Dialog open={controller.SideBarCartModal} onClose={handleCloseModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden" >
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-xl font-medium text-gray-900">سبد خرید شما</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => handleCloseModal()}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8" dir='rtl'>
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">

                        {
                          cart !== null ? (<>

                            {
                              cart.map((product) => (
                                <li key={product.ProductId} className="flex py-6">
                                  <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <ShowImageStatic image={product.ProductImage} classImage="size-full object-cover" />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col mr-4">
                                    <div>
                                      <div className="flex justify-between text-base font-medium  text-gray-900">
                                        <h3>
                                          <a className='text-xl' href={product.href}>{product.ProductName}</a>
                                        </h3>
                                      </div>
                                      <p className="ml-4 mt-2 ">{Number(product.Price).toLocaleString('fa-IR')} تومان</p>

                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500" >تعداد 1 عدد</p>

                                      <div className="flex">
                                        <button id={"deleteBtn-" + product.ProductId} onClick={() => handleRemoveCart(product.CartId)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                          حذف
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            }




                          </>) : (<></>)
                        }
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6" dir='rtl'>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>جمع کل مبلغ</p>
                    <p className='text-xl'>{totalPrice} تومان</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">جهت اتمام پروسه خرید روی نهایی کردن خرید کلیک کنید</p>
                  <div className="mt-6">
                    <a
                      href="/cart"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      نهایی کردن خرید
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      یا{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        تماس با پشتیبانی آنلاین
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>

  </>);
}

export default CartDrawer;