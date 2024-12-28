import { useState } from "react";
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { RegisterUser } from "@/data/Services/userService";
import Message from "./Message";
import { useDispatch } from "react-redux";
import { SetCurrentUserSignIn } from "@/data/Actions/UserActions";





const Register = ({ mobile }) => {

    const [activeCode, setActiveCode] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [status, setStatus] = useState(null)

    const dispatch = useDispatch()
    const createUser = async () => {
        const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
        localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID


        if (name != null && activeCode != null) {

            const {data} = await RegisterUser(mobile, name, activeCode, browserUUID, email)

            if (data !== null) {
                setStatus(<Message type={true} />)
                Cookies.set('ArastAuthorize', JSON.stringify(data), { expires: 90 })


                const dataServer = {
                    Token : data.Token,
                    ServerToken : data.SToken,
                    RoleId : data.RoleId,
                    FullName :data.FullName
                }

                dispatch(SetCurrentUserSignIn(dataServer))
            }


        }


    }

    return (<>


        {
            status == null ? (<>


                <div class="space-y-6 px-6 lg:px-8 pb-10 sm:pb-10 xl:pb-8 " >
                    <h3 class="text-2xl font-medium text-gray-900 mt-2 dark:text-white">تکمیل ثبت نام</h3>
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">کد تایید</label>
                        <input onChange={(e) => setActiveCode(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="09920000001" required="" />
                    </div>


                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">نام و نام خانوادگی</label>
                        <input onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="09920000001" required="" />
                    </div>
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">ایمیل ( برای ثبت سفارشات )</label>
                        <input onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="09920000001" required="" />
                    </div>

                    <div className="">

                    </div>

                    <button onClick={createUser} class="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ورود به حساب</button>

                </div>



            </>) : (<>

                {status}

            </>)
        }


    </>);
}

export default Register;