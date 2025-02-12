import { setOpenSignInModalAction } from "@/data/Actions/InitAppActions";
import { IsFoundUser, SignInUserByMobile } from "@/data/Services/userService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Activate from "./Auth/Activate";
import Register from "./Auth/Register";
import Message from "./Auth/Message";


const SignIn = () => {

    const dispatch = useDispatch()
    const [mobile, setMobile] = useState(null)
    const [status, setStatus] = useState(null)

    const handleCloseSignIn = () => {
        dispatch(setOpenSignInModalAction(false))
    }

    const handleSendNumber = async () => {
        const { status } = await IsFoundUser(mobile);

        switch (status) {
            case 200:
                const { status } = await SignInUserByMobile(mobile);
                setStatus(<Activate mobile={mobile} />)
                break;

            case 204:
                setStatus(<Register mobile={mobile} />)
                break;

            default:
                break;
        }

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

                    {
                        status == null ? (<>
                            <div class="space-y-6 px-6 lg:px-8 pb-10 sm:pb-10 xl:pb-8 " >
                                <h3 class="text-2xl font-medium text-gray-900 mt-2 dark:text-white">ورود به حساب</h3>
                                <div>
                                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">شماره تلفن شما</label>
                                    <input onChange={(e) => setMobile(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="09920000001" required="" />
                                </div>


                                <button onClick={handleSendNumber} class="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ورود به حساب</button>
                                <div class="flex  justify-center  space-x-6 mt-4">

                                    <button class="flex items-center px-6 mr-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none">
                                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-black-icon.png" alt="Google logo" class="w-6 h-6 mr-2" />
                                        ورود با گوگل
                                    </button>
                                    <button class="flex items-center px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none">
                                        <img src="https://img.icons8.com/ios_filled/512/microsoft.png" alt="Google logo" class="w-6 h-6 mr-2" />
                                        ورود با مایکروسافت
                                    </button>
                                </div>


                            </div>

                        </>) : (<>

                            {status}

                        </>)

                    }

                </div>
            </div>
        </div>



    </>);
}

export default SignIn;