import React from 'react';

const FooterPage = () => {
  return (
    <div className='mt-auto'>
      <footer className="bg-neutral-100 text-center border-t-2 border-neutral-200 bg-white/10 text-neutral-600 dark:text-neutral-200 dark:bg-black">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="mr-12 hidden md:block  ">
            <span>Get connected with us:</span>
          </div>
          <div className="flex justify-center items-center">
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
            <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="#!" className="text-neutral-600 dark:text-neutral-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-6 pt-8 pb-4 text-center">
          <div className="mb-6">
            <h5 className="mb-2 font-bold uppercase">Explore Our microWorld</h5>
            <p className="mb-4">Explore the world of technology with microWorld</p>
          </div>
          <div className="relative mb-7"></div>
        </div>
        <div className="p-6 text-center bg-white/10 flex justify-center items-center">
          <span>© 2024 Copyright: </span>
          <h1 className="mx-2 text-1xl">
            <span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-red-500 from- via-red-400 via- to-yellow-300 to-">Mic</span>
            <span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-yellow-500 from- via-teal-400 via- to-teal-300 to-">roW</span>
            <span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-teal-500 from- via-blue-400 via- to-violet-300 to-">orld</span>
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;


