
import React from 'react'
// import IntelVideo from "../assets/video/intel-video.gif"
import NvidiaGif from "../../assets/gif/nvidia-gif.gif"
import TeslaGif from "../../assets/gif/videoplayback.gif"
// import IbmGif  from "../../assets/gif/ibm.gif"
// import IbmGif from "../../assets/gif/ibmr.gif"
// import IbmGif from "../../assets/gif/ibm (2).gif"
// import IbmGif from "../../assets/gif/ibm (3).gif"
// import IbmGif from "../../assets/gif/ibm (4).gif"

import IbmGif from "../../assets/gif/ibm (5).gif"
import IntelGif from "../../assets/gif/intel-gif.gif"
import Brand from '../Brand'
const ContentAbout = () => {


    return (
        <div>

            {/* <div class="min-h-28 bg-[#080808]"> */}
            <div class="min-h-28 bg-white dark:bg-[#080808] ">

                <div class="mx-6 py-10 ">
                    {/* <h2 class="font-black text-9xl text-white uppercase">
                        About Page
                    </h2> */}

                    {/* <div className='max-h-28 max-w-60 mx' >
                    </div> */}
                    {/* <img src={NvidiaGif} alt="" /> */}
     
                    {/* <h1 class="font-bold text-6xl  bg-gradient-to-br    from-black via-slate-700 dark:from-white dark:via-white/50 to-transparent bg-clip-text text-transparent p-6"> */}
                    <h1 className='font-extrabold text-6xl text-[#444444] dark:text-[#d4d4d4]'>
                        Empowering Innovation: Leaders in Technology and AI Integration
                    </h1>


                    <div class="gap-6 mt-16 mx-4 md:flex">
                        <div class="md:w-1/2  bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
                            <div class="wrap-video">
                                {/* <video class="object-cover h-96 w-full bg-black" loop="" >
                                    <source 
                        src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                        type="video/mp4">
                                </video> */}
                                <img className='transform cursor-pointer place-items-center   transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50  rounded-lg' src={NvidiaGif} alt="" />

                            </div>
                            <span class="pt-4 grid grid-cols-6 gap-4">
                                <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white  font-mono">
                                    Nvidia
                                </span>
                                <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
                                    <span class="">
                                        Santa Clara/California
                                    </span>
                                </span>
                            </span>
                            <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
                                CPU/GPU
                            </span>
                        </div>
                        <div class="md:w-1/2  bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
                            <div class="wrap-video">
                                {/* <video class="object-cover h-96 w-full bg-black" loop="" >
                                    <source 
                        src="https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4"
                        type="video/mp4"> 
                                </video> */}
                                <img className='transform cursor-pointer place-items-center   transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50  rounded-lg' src={TeslaGif} alt="" />
                            </div>
                            <span class="pt-4 grid grid-cols-6 gap-4">
                                <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white  font-mono">
                                    Tesla
                                </span>
                                <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
                                    <span class="">
                                        Palo Alto/ California
                                    </span>
                                </span>
                            </span>
                            <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
                                Automation-Automotive industry
                            </span>
                        </div>
                    </div>
                </div>

                {/* 
/////////////////////////////////////// */}
                {/* <h2 class="font-poppins font-black text-white uppercase py-10 p-xl-5">
  Welcome to [Nombre de tu empresa], where cutting-edge technology meets visionary innovation. We are dedicated to providing top-tier products from industry giants such as Intel, IBM, Tesla, and Nvidia, ensuring our customers access to the latest advancements in AI integration and beyond. Our commitment to excellence drives us to deliver unparalleled service and support, empowering our clients to thrive in the ever-evolving landscape of technology.
</h2> */}
                <div class="gap-6 mt-8 mx-4 md:flex">


                    <div class="md:w-1/2  bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
                        <div class="wrap-video">
                            {/* <video class="object-cover h-96 w-full bg-black" loop="" >
                                 <source 
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/63c084f55da78823643adbc3_ThePerfectPants-transcode.mp4"
                    type="video/mp4"> 
                            </video> */}
                            <img className='transform cursor-pointer place-items-center   transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50  rounded-lg' src={IntelGif} alt="" />
                        </div>
                        <span class="pt-4 grid grid-cols-6 gap-4">
                            <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white  font-mono">
                                Intel
                            </span>
                            <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
                                <span class="">
                                    Santa Clara/ California
                                </span>
                            </span>
                        </span>
                        <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
                            Computer Cience/
                        </span>
                    </div>
                    {/* ///////////////////////////////////// */}
                    <div class="md:w-1/2  bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
                        <div class="wrap-video rounded-lg ">
                            {/* <video class="object-cover h-96 w-full bg-black" loop="" >
                                 <source 
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/6363f65c00474db467bed81b_Screen%20Recording%202022-11-03%20at%2011018%20PM-transcode.mp4"
                    type="video/mp4"> 
                            </video> */}
                            <img className='transform cursor-pointer place-items-center   transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50  rounded-lg' src={IbmGif} alt="" />
                        </div>
                        <span class="pt-4 grid grid-cols-6 gap-4">
                            <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white  font-mono">
                                Ibm
                            </span>
                            <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppinsflex justify-end">
                                <span class="">
                                    Armonk/New York
                                </span>
                            </span>
                        </span>
                        <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
                            CPU-COMPUTERS
                        </span>
                    </div>


                </div>


                <h2 class="uppercase font-poppins py-24 px-32 font-light text-lg  text-[#444444] dark:text-[#d4d4d4]">
                    Welcome to MicroWorld, where cutting-edge technology meets visionary innovation. We are dedicated to providing top-tier products from industry giants such as Intel, IBM, Tesla, and Nvidia, ensuring our customers access to the latest advancements in AI integration and beyond.
                </h2>

                {/* <p className='gx lk uc avr awf awx axy'>
                    Welcome to [Nombre de tu empresa], where cutting-edge technology meets visionary innovation. We are dedicated to providing top-tier products from industry giants such as Intel, IBM, Tesla, and Nvidia, ensuring our customers access to the latest advancements in AI integration and beyond.
                </p> */}

                {/* <h2 class="font-poppins font-black text-white uppercase py-10 p-xl-5">
  Welcome to [Nombre de tu empresa], where cutting-edge technology meets visionary innovation. We are dedicated to providing top-tier products from industry giants such as Intel, IBM, Tesla, and Nvidia, ensuring our customers access to the latest advancements in AI integration and beyond. Our commitment to excellence drives us to deliver unparalleled service and support, empowering our clients to thrive in the ever-evolving landscape of technology.
</h2> */}
                {/* <h2 class="font-black text-7xl text-white text-center uppercase my-16 hover:bg-white hover:text-black hover:rounded-full hover:px-6">
                    view select work
                </h2> */}
                <Brand />
            </div>
        </div>


    )
}

export default ContentAbout




