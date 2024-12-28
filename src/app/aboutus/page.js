


const AboutUs = () => {
    return (<>

        <h1>HI</h1>
        <div id="authentication-modal" aria-hidden="true" class="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-50" dir="rtl">
            <div class="relative w-full max-w-md px-4 h-full md:h-auto ">
                <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                    <div class="flex justify-start p-2">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <form class="space-y-6 px-6 lg:px-8 pb-10 sm:pb-10 xl:pb-8 " action="#">
                        <h3 class="text-2xl font-medium text-gray-900 mt-2 dark:text-white">ورود به حساب</h3>
                        <div>
                            <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">شماره تلفن شما</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>


                        <button type="submit" class="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ورود به حساب</button>

                    </form>
                </div>
            </div>
        </div>


        <div id="authentication-modal" aria-hidden="true" class="fixed inset-0 z-50 flex justify-center items-center" dir="rtl">
            <div class="relative w-full max-w-md px-4 h-full md:h-auto">
                <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                    <div class="flex justify-start p-2">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-10 xl:pb-8" action="#">
                        <h3 class="text-2xl font-medium text-gray-900 mt-2 dark:text-white">ورود به حساب</h3>
                        <div>
                            <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">شماره تلفن شما</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>


                        <button type="submit" class="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ورود به حساب</button>

                    </form>
                </div>
            </div>
        </div>

    </>);
}

export default AboutUs;