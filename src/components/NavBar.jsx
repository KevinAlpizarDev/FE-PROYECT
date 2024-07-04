// // Importa Link desde react-router-dom
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div>
//             <Link to="/contact">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
//           Ir a Contacto
//         </button>
//       </Link>
//     </div>
//   )
// }

// export default NavBar

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll = document.documentElement.scrollTop;
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrolled = (winScroll / height) * 100;
//       setPercent(Math.round(scrolled));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
//       <div className="flex items-center">
//         <a className="cursor-pointer">
//           <h3 className="text-2xl font-medium text-blue-500">
//             <img
//               className="h-10 object-cover"
//               src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
//               alt="Store Logo"
//             />
//           </h3>
//         </a>
//       </div>

//       <div className="items-center hidden space-x-8 lg:flex">

//         <Link to="/products" className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <p>Products</p>
//         </Link>

//         <Link to="/products" className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <p>About Us</p>
//         </Link>

//         <Link to="/products" className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <p>Contact Us</p>
//         </Link>

//       </div>

//       <div className="flex items-center space-x-5">
//         <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//           <svg
//             className="fill-current h-5 w-5 mr-2 mt-0.5"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             version="1.1"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
//           </svg>
//           Register
//         </a>
//         <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <svg
//             className="fill-current h-5 w-5 mr-2 mt-0.5"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             version="1.1"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
//           </svg>
//           Login
//         </a>
//       </div>

//       <div
//         className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"
//         style={{ width: `${percent}%` }}
//       ></div>
//     </nav>
//   );
// };

// export default NavBar;

////////////////////////////////////////////
//////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll = document.documentElement.scrollTop;
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrolled = (winScroll / height) * 100;
//       setPercent(Math.round(scrolled));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className="flex justify-around py-6 bg-white/80 backdrop-blur-md shadow-md border-b-indigo-600 ">
//       <div className="flex items-center border-b-indigo-500">
//         <a className="cursor-pointer">
//           <h3 className="text-2xl font-medium text-blue-500">
//             <img
//               className="h-10 object-cover"
//               src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
//               alt="Store Logo"
//             />
//           </h3>
//         </a>
//       </div>

//       <div className="items-center hidden space-x-8 lg:flex">

//         <Link to="/products" className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <p>Products</p>
//         </Link>

//         <Link to="/about" className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <p>About Us</p>
//         </Link>

//         <Link to="/contact" className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <p>Contact Us</p>
//         </Link>

//       </div>

//       <div className="flex items-center space-x-5">
//         <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//           <svg
//             className="fill-current h-5 w-5 mr-2 mt-0.5"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             version="1.1"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
//           </svg>
//           Register
//         </a>
//         <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
//           <svg
//             className="fill-current h-5 w-5 mr-2 mt-0.5"
//             xmlns="http://www.w3.org/2000/svg"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             version="1.1"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
//           </svg>
//           Login
//         </a>
//       </div>

//       <div
//         className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"
//         style={{ width: `${percent}%` }}
//       ></div>
//     </nav>
//   );
// };

// export default NavBar;




import React, { useState, useEffect } from 'react';
// import Clock from './components//Clock';
import Clock from './Clock';
import { Link } from 'react-router-dom';

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

  return (
    // <nav className="flex justify-around py-6 bg-black shadow-md ">
    <nav className={`flex justify-around py-6 bg-black  shadow-md sticky top-0`}>
      {/* ${isDarkMode ? 'bg-gray-400': 'bg-black'} */}
      <div className="flex items-center">
        <a href="#" className="cursor-pointer">
          <h3 className="text-2xl font-medium text-blue-500">
            <img
              className="h-10 object-cover"
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
              alt="Store Logo"
            />
          </h3>
        </a>
      </div>

      <div className="items-center hidden space-x-8 lg:flex">
        <Link
          to="/products"
          className="flex text-white font-bold text-xl"
        >
          <p>Products</p>
        </Link>

        {/* <div class="text-white font-bold text-xl">
        <a href="#">Logo</a>
      </div> */}

        <Link
          to="/about"
          className="flex text-white font-bold text-xl"
        >
          <p>About Us</p>
        </Link>

        <Link
          to="/contact"
          className="flex text-white font-bold text-xl"
        >
          <p>Contact Us</p>
        </Link>
      </div>

      <div className="flex items-center space-x-5">
        <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
          {/* <svg
        className="fill-current h-5 w-5 mr-2 mt-0.5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
      </svg>
      Register */}
          {/* <Clock/> */}
        </a>

        {/* ///////////////////////// */}
        <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600 border-b-2 border-white">
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
          Login
        </a>
        {/* ///////////////////////// */}
        <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600 border-b-2 border-white">
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
          Login
        </a>
      </div>

      {/* Aquí se añade la sombra blanca abajo */}
      {/* <div className="absolute inset-x-0 bottom-0 z-10 h-2 bg-gradient-to-t from-white opacity-50"></div> */}
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











