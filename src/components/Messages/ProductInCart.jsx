
import { setOpenAddProductCartModalAction } from '@/data/Actions/InitAppActions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';




const ProductInCart = () => {

    const dispatch = useDispatch()


    const handleCloseSignIn = () => {
        dispatch(setOpenAddProductCartModalAction(false))
    }

    return (<>



<div id="authentication-modal" aria-hidden="true" class="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-50" dir="rtl">
            <div class="relative w-full max-w-md px-4 h-full md:h-auto ">
                <div class="bg-white rounded-lg shadow relative dark:bg-gray-700 max-w-640:mt-20">
                    <div class="flex justify-start p-2">
                        <button onClick={handleCloseSignIn} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                   
              
                    <div className="flex flex-col items-center  p-6 rounded-md">
                        <img src="/img/check.png" alt="Checkmark indicating success" className="w-20 h-20 mb-4" />
                        <h3 className="text-center text-2xl text-white mb-2">عملیات موفق</h3>
                        <p className="text-white text-center mb-4">
                            محصول به سبد خرید شما اضافه شد با کلیک کردن بر روی دکمه زیر خریدتان را تکمیل کنید
                        </p>
                        <br/>
                        <a href='/Cart' class="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">تکمیل خرید</a>
                        <button onClick={handleCloseSignIn} class="w-full text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[13px] px-5 py-2.5 text-center dark:hover:text-blue-700 dark:focus:ring-blue-800">ادامه خرید</button>

                    </div>


                  

                </div>
            </div>
        </div>



    </>);
}

export default ProductInCart;