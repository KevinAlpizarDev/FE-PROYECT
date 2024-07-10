


import React, { useState, useEffect } from 'react';
// import Clock from './components//Clock';
import Clock from './Clock';
import { Link } from 'react-router-dom';
// /////////////////////////////////////////////////////////////////
import PageLogo from "../assets/micromicro.png"
//////
import Selector from '../components/Selector';
import IconSelector from "../assets/svg/selector.svg"


const NavBar = () => {



  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setPercent(Math.round(scrolled));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  /////////////////////////7DARKMODE

  /////////////////////ESTADO PARA EL SELECTOR DE TEMA
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"

    }
    return "light"
  })

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")

    }
  }, [theme])


  const handlerChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")

  };


  return (
    // <nav className="flex justify-around py-6 bg-black shadow-md ">
    <nav className={`flex justify-around py-2 bg-white text  shadow-md sticky top-0  z-10 dark:bg-black bg-opacity-90 dark:bg-opacity-90`}>
    
      {/* <Selector/> */}
      <div className="flex items-center">
        <a href="#" className="cursor-pointer">
          <h3 className="text-2xl font-medium text-blue-500">
         
            <img src={PageLogo} alt="" />
          </h3>
        </a>
      </div>

      <div className="items-center hidden space-x-8 lg:flex  font-poppins">
        <Link
          to="/products"
          className="flex text-[#444444] hover:text-black dark:text-[#d4d4d4] dark:hover:text-white font-light text-xl"
        >
          <p >Product</p>
        </Link>

        <Link
          to="/about"
          className="flex text-[#444444] hover:text-black dark:text-[#d4d4d4] dark:hover:text-white font-light text-xl"
        >
          <p >About Us</p>
        </Link>

        <Link
          to="/contact"
          className="flex text-[#444444] hover:text-black dark:text-[#d4d4d4] dark:hover:text-white font-light text-xl"
        >
          <p>Contact Us</p>
        </Link>
      </div>

      <div className="flex items-center space-x-5">
        <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
         
          {/* <Clock/> */}
        </a>

      
        <button onClick={handlerChangeTheme} className=' text-white py-2  ' >


          <img src={IconSelector} alt="" />
        </button>



        {/* ///////////////////////// */}
        <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold border-b-2 border-white  font-poppins">
          <svg
            className="fill-current h-5 w-5 mr-2 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
          </svg>


          <Link
            to="/signup"
            className="flex text-[#444444] hover:text-black dark:text-[#d4d4d4] dark:hover:text-white font-light text-xl font-poppins"
          >
            <p>Signup</p>
          </Link>
        </a>
      </div>

   
    </nav>


  );
};

export default NavBar;











// const MyNavbar = () => {
//   // Estilos personalizados para el Navbar
//   const navbarStyle = {
//     backgroundColor: '#6C757D', // Color de fondo oscuro según el tema dark de Bootstrap
//     color: '#FFFFFF', // Color de texto blanco
//     // Otros estilos según sea necesario
//   };

//   return (
//     <Navbar bg="dark" variant="dark" style={navbarStyle} data-bs-theme="dark">
//       {/* Contenido del Navbar */}
//     </Navbar>
//   );
// };

// export default MyNavbar;











