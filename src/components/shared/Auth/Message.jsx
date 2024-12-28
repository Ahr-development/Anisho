import { setOpenSignInModalAction } from "@/data/Actions/InitAppActions";
import { useDispatch } from "react-redux";




const Message = ({ type }) => {

    const dispatch = useDispatch()


    const handleCloseSignIn = () => {
        dispatch(setOpenSignInModalAction(false))
    }
    return (<>


        {

            type ? (<>


                <div class="space-y-6 px-6 lg:px-8 pb-10 sm:pb-10 xl:pb-8 " >

                    <h3 class="text-2xl font-medium text-gray-900 mt-2 dark:text-white"></h3>




                    <div className="flex flex-col items-center  p-6 rounded-md">
                        <img src="/img/check.png" alt="Checkmark indicating success" className="w-20 h-20 mb-4" />
                        <h3 className="text-center text-2xl text-white mb-2">عملیات موفق</h3>
                        <p className="text-white text-center mb-4">
                            حساب شما با موفقیت احراز شد هم اکنون دکمه زیر را بزنید تا به خریدتان ادامه دهید
                        </p>
                  
                    </div>


                    <button onClick={handleCloseSignIn} class="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">بازگشت به صفحه اصلی</button>

                </div>


            </>) : (<>






            </>)

        }










    </>);
}

export default Message;