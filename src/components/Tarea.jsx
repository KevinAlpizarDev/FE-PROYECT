import React from "react";
import { useState } from "react";

import Icono1 from "../assets/imgs/airback.webp";
import Icono2 from "../assets/imgs/RTX.jpeg";
import Icono3 from "../assets/imgs/llantasTesla.jpg";
import Icono4 from "../assets/imgs/i7.jpg";

import { deleteProduct } from "../hooks/useFetch2";
import { comparteContexto } from "../contexts/Context";

const diccionarioIconos = {
    1: Icono1,
    2: Icono2,
    3: Icono3,
    4: Icono4
};

const Tarea = ({ tarea, onEliminarTarea, onEditarTarea, dificultad, nombre, descripcion, id }) => {
    const { actualizador, setActualizador, datosLectura, setDatosLectura, nombre1, setNombre1, dificultad1, setDificultad1, descripcion1, setDescripcion1, modalEdit, setModalEdit } = comparteContexto();

    const handleEliminar = () => {
        onEliminarTarea(id);
        deleteProduct(id);
        setTimeout(() => {
            setActualizador(actualizador + 1);
        }, 200);
    };

    const handleEditar = () => {
        setModalEdit(true);
        let Producto = datosLectura.find(producto => producto.id === id);
        if (Producto) {
            setNombre1(Producto.nombre1);
            setDificultad1(Producto.dificultad1);
            setDescripcion1(Producto.descripcion1);
        }
        onEditarTarea(tarea);
    };

    return (
        <div>
            <div className="flex items-center justify-center bg-gradient-to-br px-2">
                <div className="flex flex-col items-center justify-center relative">
                    <div id="partnerCard" className="bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col">
                        <div>
                            <h3 className="font-bold text-gray-700 text-[22px] leading-7 mb-1">{nombre}</h3>
                        </div>
                        <div className="flex items-center justify-center bg-[#2a2a2a] min-h-[200px]">
                            <a className="flex items-center justify-center" href="#" target="_blank" rel="noreferrer noopener">
                                <img className="h-[236px] bg-black w-full py-1" src={diccionarioIconos[dificultad]} alt={`nivel ${dificultad}`} />
                            </a>
                        </div>
                        <div className="p-4 pr-0 text-lg col-span-3">
                            <h4 className="font-bold">Price:</h4>
                            <p className="text-[17px] font-bold text-[#0FB478]">{descripcion}</p>
                        </div>
                        <div>
                            <div className="p-1">
                                <button className="block w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80" onClick={handleEditar}>
                                    Editar
                                </button>
                                <button className="block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80" onClick={handleEliminar}>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tarea;





// import React from "react";
// import { useState } from "react";

// // Importar los iconos de dificultad
// import Icono1 from "../assets/imgs/airback.webp";
// // import Icono2 from "../imgs/RTX.jpeg";
// import Icono2 from "../assets/imgs/RTX.jpeg"
// // import Icono3 from "../imgs/llantasTesla.jpg";
// import Icono3 from "../assets/imgs/llantasTesla.jpg"
// // import Icono4 from "../imgs/i7.jpg"
// import Icono4 from "../assets/imgs/i7.jpg"

// // import { deleteProduct } from "../hooks/useFetch.js"
// // import { comparteContexto } from "../context/Context";

// import { deleteProduct } from "../hooks/useFetch2";
// import { comparteContexto } from "../contexts/Context";
// const diccionarioIconos = {
//     1: Icono1,
//     2: Icono2,
//     3: Icono3,
//     4: Icono4
// };

// import { deleteProduct } from "../hooks/useFetch2";
// import { comparteContexto } from "../contexts/Context";


// const Tarea = ({ tarea, onEliminarTarea, onEditarTarea, dificultad, nombre, descripcion, id }) => {

//     const { actualizador, setActualizador, datosLectura, setDatosLectura, nombre1, setNombre1, dificultad1, setDificultad1, descripcion1, setDescripcion1, modalEdit, setModalEdit } = comparteContexto()


//     const handleEliminar = () => {
//         onEliminarTarea(id);

//         deleteProduct(id)

//         setTimeout(() => {

//             setActualizador(actualizador + 1)
//         }, 200);


//     };

//     const handleEditar = () => {

//         setModalEdit(true)
//         console.log(datosLectura[0].id);
//         console.log(id);
//         let Producto = datosLectura.find(productos => productos.id == id)
//         setNombre1(Producto.nombre1)
//         setDificultad1(Producto.dificultad1)
//         setDescripcion1(Producto.descripcion1)
//         console.log(Producto);
//         onEditarTarea(tarea);
//     };



//     return (

//         <div>
//             <div className="flex items-center justify-center  bg-gradient-to-br px-2 ">
//                 <div class="flex flex-col items-center justify-center relative">

//                     <div
//                         id="partnerCard"
//                         class="bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col"
//                     >
//                         {/* class="bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col"
//                               > */}
//                         <div>
//                             {/* <h3 class="text-left pl-8 pb-4 pt-2 text-xl">
//                            {nombre}
//                         </h3> */}
//                             <h3 class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{nombre}</h3>
//                         </div>

//                         <div class="flex items-center justify-center bg-[#2a2a2a] min-h-[200px]">

//                             <a
//                                 class="flex items-center justify-center"
//                                 href="#"
//                                 target="_blank"
//                                 rel="noreferrer noopener"
//                             >
//                                 <img
//                                     className="h-[236px] bg-black w-full py-1"
//                                     src={diccionarioIconos[dificultad]}
//                                     alt={`nivel ${dificultad}`}
//                                 />

//                             </a>
//                         </div>
//                         <div class="p-4 pr-0 text-lg col-span-3">
//                             <h4 class="font-bold">
//                                 Price:
//                             </h4>

//                             {/* <p>{descripcion}</p> */}
//                             <p class='text-[17px] font-bold text-[#0FB478]'>{descripcion}</p>
//                         </div>
//                         <div class="">


//                             <div class='p-1 '>


//                                 <button class='block  w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80' onClick={handleEditar}>
//                                     Editar
//                                 </button>

//                                 <button class='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'
//                                     onClick={handleEliminar}>
//                                     Eliminar
//                                 </button>

//                             </div>

//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Tarea;






























