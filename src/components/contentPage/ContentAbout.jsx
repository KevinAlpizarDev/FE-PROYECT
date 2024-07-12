// import NvidiaGif from "../../assets/gif/nvidia-gif.gif";
// import TeslaGif from "../../assets/gif/videoplayback.gif";
// import IbmGif from "../../assets/gif/ibm (5).gif";
// import IntelGif from "../../assets/gif/intel-gif.gif";
// import Brand from '../Brand';

// const ContentAbout = () => {
//   return (
//     <div>
//       <div  class="min-h-28 bg-white dark:bg-[#080808] ">
//         <div class="mx-6 py-10 ">
//           <h1 className='font-extrabold text-6xl text-[#444444] dark:text-[#d4d4d4]'>
//             Empowering Innovation: Leaders in Technology and AI Integration
//           </h1>
//           <div class="gap-6 mt-16 mx-4 md:flex">
//             <div class="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
//               <div class="wrap-video">
//                 <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={NvidiaGif} alt="" />
//               </div>
//               <span class="pt-4 grid grid-cols-6 gap-4">
//                 <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
//                   Nvidia
//                 </span>
//                 <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
//                   <span class="">
//                     Santa Clara/California
//                   </span>
//                 </span>
//               </span>
//               <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
//                 CPU/GPU
//               </span>
//             </div>
//             <div class="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
//               <div class="wrap-video">
//                 <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={TeslaGif} alt="" />
//               </div>
//               <span class="pt-4 grid grid-cols-6 gap-4">
//                 <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
//                   Tesla
//                 </span>
//                 <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
//                   <span class="">
//                     Palo Alto/ California
//                   </span>
//                 </span>
//               </span>
//               <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
//                 Automation-Automotive industry
//               </span>
//             </div>
//           </div>
//         </div>
//         <div class="gap-6 mt-8 mx-4 md:flex">
//           <div class="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
//             <div class="wrap-video">
//               <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={IntelGif} alt="" />
//             </div>
//             <span class="pt-4 grid grid-cols-6 gap-4">
//               <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
//                 Intel
//               </span>
//               <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
//                 <span class="">
//                   Santa Clara/ California
//                 </span>
//               </span>
//             </span>
//             <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
//               Computer Cience/
//             </span>
//           </div>
//           <div class="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
//             <div class="wrap-video rounded-lg">
//               <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={IbmGif} alt="" />
//             </div>
//             <span class="pt-4 grid grid-cols-6 gap-4">
//               <span class="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
//                 Ibm
//               </span>
//               <span class="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
//                 <span class="">
//                   Armonk/New York
//                 </span>
//               </span>
//             </span>
//             <span class="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
//               CPU-COMPUTERS
//             </span>
//           </div>
//         </div>
//         <h2 class="uppercase font-poppins py-24 px-32 font-light text-lg text-[#444444] dark:text-[#d4d4d4]">
//           Welcome to MicroWorld, where cutting-edge technology meets visionary innovation. We are dedicated to providing top-tier products from industry giants such as Intel, IBM, Tesla, and Nvidia, ensuring our customers access to the latest advancements in AI integration and beyond.
//         </h2>
//         <Brand />
//       </div>
//     </div>
//   );
// }

// export default ContentAbout;



import NvidiaGif from "../../assets/gif/nvidia-gif.gif";
import TeslaGif from "../../assets/gif/videoplayback.gif";
import IbmGif from "../../assets/gif/ibm (5).gif";
import IntelGif from "../../assets/gif/intel-gif.gif";
import Brand from '../Brand';

const ContentAbout = () => {
  return (
    <div>
      <div className="min-h-28 bg-white dark:bg-[#080808] ">
        <div className="mx-6 py-10 ">
          <h1 className='font-extrabold text-6xl text-[#444444] dark:text-[#d4d4d4]'>
            Empowering Innovation: Leaders in Technology and AI Integration
          </h1>
          <div className="gap-6 mt-16 mx-4 md:flex">
            <div className="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
              <div className="wrap-video">
                <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={NvidiaGif} alt="" />
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
                  Nvidia
                </span>
                <span className="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
                  <span>
                    Santa Clara/California
                  </span>
                </span>
              </span>
              <span className="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
                CPU/GPU
              </span>
            </div>
            <div className="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
              <div className="wrap-video">
                <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={TeslaGif} alt="" />
              </div>
              <span className="pt-4 grid grid-cols-6 gap-4">
                <span className="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
                  Tesla
                </span>
                <span className="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
                  <span>
                    Palo Alto/ California
                  </span>
                </span>
              </span>
              <span className="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
                Automation-Automotive industry
              </span>
            </div>
          </div>
        </div>
        <div className="gap-6 mt-8 mx-4 md:flex">
          <div className="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
            <div className="wrap-video">
              <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={IntelGif} alt="" />
            </div>
            <span className="pt-4 grid grid-cols-6 gap-4">
              <span className="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
                Intel
              </span>
              <span className="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
                <span>
                  Santa Clara/ California
                </span>
              </span>
            </span>
            <span className="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
              Computer Cience/
            </span>
          </div>
          <div className="md:w-1/2 bg-[#fbfbfb] dark:bg-white/10 rounded-lg border dark:border-black p-6">
            <div className="wrap-video rounded-lg">
              <img className='transform cursor-pointer place-items-center transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 rounded-lg' src={IbmGif} alt="" />
            </div>
            <span className="pt-4 grid grid-cols-6 gap-4">
              <span className="col-start-1 col-end-3 font-bold text-lg text-[#444444] dark:text-white font-mono">
                Ibm
              </span>
              <span className="col-end-7 col-span-2 text-sm text-black dark:text-slate-500 uppercase font-poppins flex justify-end">
                <span>
                  Armonk/New York
                </span>
              </span>
            </span>
            <span className="block text-black dark:text-slate-400 text-xs uppercase font-poppins">
              CPU-COMPUTERS
            </span>
          </div>
        </div>
        <h2 className="uppercase font-poppins py-24 px-32 font-light text-lg text-[#444444] dark:text-[#d4d4d4]">
          Welcome to MicroWorld, where cutting-edge technology meets visionary innovation. We are dedicated to providing top-tier products from industry giants such as Intel, IBM, Tesla, and Nvidia, ensuring our customers access to the latest advancements in AI integration and beyond.
        </h2>
        <Brand />
      </div>
    </div>
  );
}

export default ContentAbout;
