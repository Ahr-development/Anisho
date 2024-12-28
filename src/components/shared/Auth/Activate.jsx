import { useState } from "react";
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { ResumeSignInUserByMobileAndGetToken } from "@/data/Services/userService";
import Message from "./Message";
import { SetCurrentUserSignIn } from "@/data/Actions/UserActions";




const Activate = ({ mobile }) => {
    const [activeCode, setActiveCode] = useState(null)
    const [status, setStatus] = useState(null)


    const activeAccount = async () => {
        const browserUUID = localStorage.getItem('browserUUID') || uuidv4();
        localStorage.setItem('browserUUID', browserUUID); // اطمینان از ذخیره UUID

        const { data } = await ResumeSignInUserByMobileAndGetToken(mobile, activeCode, browserUUID);


        if (data !== null) {
            console.log(data);
            Cookies.set('ArastAuthorize', JSON.stringify(data), { expires: 90 })
            setStatus(<Message type={true} />)

            const dataScript = {
                Token: data.Token,
                ServerToken: data.SToken,
                RoleId: data.RoleId,
                FullName: data.FullName
            }

            dispatch(SetCurrentUserSignIn(dataScript))
        }

    }




    return (<>

        {
            status == null ? (<>


                <div class="space-y-6 px-6 lg:px-8 pb-10 sm:pb-10 xl:pb-8 " >
                    <h3 class="text-2xl font-medium text-gray-900 mt-2 dark:text-white">تائید حساب شما</h3>
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">کد تایید ارسال شد لطفا آن را وارد کنید</label>
                        <input onChange={(e) => setActiveCode(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="09920000001" required="" />
                    </div>


                    <button onClick={activeAccount} class="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ورود به حساب</button>

                </div>



            </>) : (<>


                {status}


            </>)
        }


    </>);
}

export default Activate;