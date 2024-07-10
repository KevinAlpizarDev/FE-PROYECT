import React from 'react';
import Intel from "../assets/svg/intel.svg";
import Nvidia from "../assets/svg/nvidia.svg";
import Ibm from "../assets/svg/ibm.svg";
import Tesla from "../assets/svg/tesla.svg";

const Brand = () => {
    const toIntel = "https://www.intel.com/content/www/us/en/products/overview.html";

    return (
        <div>
            <div className='flex justify-center px-4 pb-12 bg-[#fbfbfb] dark:bg-white/10 border-y dark:border-black'>
                <div>
                    <div className="group relative -ml-2 flex scroll-mt-20 items-center pl-9">
                        {/* Contenido de cada ícono */}
                    </div>
                    <div className="group relative -ml-2 flex scroll-mt-20 items-center pl-9">
                        {/* Contenido de cada ícono */}
                    </div>
                   
                    <div onClick={toIntel} className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4" id="frameworks-integration">
                        <a className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600 px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://www.intel.com/content/www/us/en/products/overview.html">
                            <span className="my-6 grid h-24 w-24 place-items-center">
                                <img src={Intel} alt="" />
                            </span>
                        </a>

                        <a className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600 px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://www.nvidia.com/en-us/">
                            <span className="my-6 grid h-24 w-24 place-items-center">
                                <img src={Nvidia} alt="" />
                            </span>
                        </a>

                        <a className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600 px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://www.ibm.com/products">
                            <span className="my-6 grid h-24 w-24 place-items-center">
                                <img src={Ibm} alt="" />
                            </span>
                        </a>

                        <a className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white dark:border-gray-600 px-10 py-5 transition-all hover:scale-105 hover:border-blue-gray-100" target='_blank' href="https://shop.tesla.com/category/lifestyle">
                            <span className="my-6 grid h-24 w-24 place-items-center">
                                <img src={Tesla} alt="" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
