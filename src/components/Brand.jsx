import React from 'react'
import Intel from "../assets/svg/intel.svg"
import Nvidia from "../assets/svg/nvidia.svg"
import Ibm from "../assets/svg/ibm.svg"
import Tesla from "../assets/svg/tesla.svg"

const Brand = () => {


    const toIntel = "https://www.intel.com/content/www/us/en/products/overview.html"
    return (
        <div>
            {/* <div class='flex  justify-center  px-4 py-11  bg-[#080808]'> */}
            <div class='flex  justify-center  px-4 pb-12  bg-[#fbfbfb] dark:bg-white/10 border-y dark:border-black'>
         
                <div>
                    <div class="group relative -ml-2 flex scroll-mt-20 items-center pl-9">
                        {/* <a href="#" class="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" class="pointer-events-none h-3.5 w-3.5 rounded-lg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
            </svg>
        </a> */}
                                    {/* <h4 class="font-black  text-white  py-10 ml-7">
                    Welcome to  MicroTech, where cutting-edge technology meets visionary innovation. We are dedicated to providing top-tier products from industry giants such as Intel, IBM, Tesla, and Nvidia, ensuring our customers access to the latest advancements in AI integration and beyond. Our commitment to excellence drives us to deliver unparalleled service and support, empowering our clients to thrive in the ever-evolving landscape of technology.
                    </h4> */}

{/* <div class="font-poppins font-black text text-white uppercase py-10 px-10">
 
</div> */}


                        {/* <h2 class="block antialiased tracking-normal font-sans text-6xl font-bold leading-snug !mb-16  text-white "> of artificial intelligence.</h2> */}

                        {/* Technological leaders in the integration of artificial intelligence. */}
                    </div>
                    <div class="group relative -ml-2 flex scroll-mt-20 items-center pl-9">
                        {/* <a href="#" class="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" class="pointer-events-none h-3.5 w-3.5 rounded-lg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path>
            </svg>
        </a> */}
                        {/* <h2 class="block antialiased tracking-normal font-sans text-3xl font-bold leading-snug !mb-10  text-white ">of artificial intelligence.</h2> */}
                        {/* <h2 class="block antialiased tracking-normal font-sans text-6xl font-bold leading-snug !mb-16  text-white "> of artificial intelligence.</h2> */}

                        {/* Technological leaders in the integration of artificial intelligence. */}
                    </div>
                    {/* <h2 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug !mb-2  text-white ">Frameworks Integrationaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2> */}
                    <div onClick={toIntel} class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4" id="frameworks-integration">

                        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50  bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600 px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://www.intel.com/content/www/us/en/products/overview.html">

                            <span class="my-6 grid h-24 w-24 place-items-center">

                                <img src={Intel} alt="" />

                            </span>
                        </a>

                        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50  bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600 px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://www.nvidia.com/en-us/">
                            <span class="my-6 grid h-24 w-24 place-items-center">

                                <img src={Nvidia} alt="" />

                            </span>
                        </a>
                        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50  bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600 px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://www.ibm.com/products">
                            <span class="my-6 grid h-24 w-24 place-items-center">

                                <img src={Ibm} alt="" />

                            </span>
                        </a>
                        <a class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50  bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600  px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://shop.tesla.com/category/lifestyle">
                            <span class="my-6 grid h-24 w-24 place-items-center">

                                <img src={Tesla} alt="" />

                            </span>
                        </a>

                    </div>
                    

                    
                </div>




                
            </div>
        </div>
    )
}

export default Brand


