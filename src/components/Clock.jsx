// import React, { useState, useEffect } from 'react';

// const Clock = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false); // Estado del tema
//     const [dataTime, setDataTime] = useState({  // Estado para horas y minutos
//         horas: new Date().getHours(),
//         minutos: new Date().getMinutes(),
//     });

//     // Clases y configuraciones de estilo
//     const classes = {
//         outerGlow: "drop-shadow-[0_0px_4px_rgba(48,128,255,1)]",
//         on: "bg-[#3080FF]",
//         off: "bg-gray-900"
//     };

//     // Tabla de orden de los dígitos
//     const orderTable = {
//         "0": [0, 1, 2, 4, 5, 6],
//         "1": [2, 5],
//         "2": [0, 2, 3, 4, 6],
//         "3": [0, 2, 3, 5, 6],
//         "4": [1, 2, 3, 5],
//         "5": [0, 1, 3, 5, 6],
//         "6": [0, 1, 3, 4, 5, 6],
//         "7": [0, 2, 5],
//         "8": [0, 1, 2, 3, 4, 5, 6],
//         "9": [0, 1, 2, 3, 5, 6]
//     };

//     // Referencias a las celdas de los dígitos del reloj
//     let h1Cells, h2Cells, m1Cells, m2Cells;

//     // Función para obtener las celdas de los dígitos del reloj
//     const getCells = (parent) => {
//         return [
//             parent.children[0],
//             parent.children[1].children[0],
//             parent.children[1].children[1],
//             parent.children[2],
//             parent.children[3].children[0],
//             parent.children[3].children[1],
//             parent.children[4]
//         ];
//     };

//     // Función para establecer las horas en los dígitos
//     const setHours = (number) => {
//         const digits = to2Digits(number);
//         setDigit(h1Cells, digits[0]);
//         setDigit(h2Cells, digits[1]);
//     };

//     // Función para establecer los minutos en los dígitos
//     const setMinutes = (number) => {
//         const digits = to2Digits(number);
//         setDigit(m1Cells, digits[0]);
//         setDigit(m2Cells, digits[1]);
//     };

//     // Función para convertir un número a dos dígitos
//     const to2Digits = (number) => {
//         return number.toString().padStart(2, '0');
//     };

//     // Función para actualizar un dígito en el reloj
//     const setDigit = (cells, number) => {
//         const order = orderTable[number];
//         cells.forEach((cell, i) => {
//             turnCell(cell, order.includes(i));
//         });
//     };

//     // Función para cambiar el estado de una celda (encendido/apagado)
//     const turnCell = (cell, on) => {
//         if (on) {
//             cell.children[0].classList.remove(classes.off);
//             cell.children[0].classList.add(classes.on);
//             cell.classList.add(classes.outerGlow);
//         } else {
//             cell.children[0].classList.remove(classes.on);
//             cell.children[0].classList.add(classes.off);
//             cell.classList.remove(classes.outerGlow);
//         }
//     };

//     // Hook useEffect para actualizar la hora cada segundo
//     useEffect(() => {
//         const timer = setInterval(() => {
//             const date = new Date();
//             setDataTime({
//                 horas: date.getHours(),
//                 minutos: date.getMinutes(),
//             });
//         }, 1000);
//         return () => clearInterval(timer);
//     }, []);

//     // Efecto para inicializar las referencias a las celdas una vez que el DOM esté listo
//     useEffect(() => {
//         h1Cells = getCells(document.querySelector('.digit-h-1'));
//         h2Cells = getCells(document.querySelector('.digit-h-2'));
//         m1Cells = getCells(document.querySelector('.digit-m-1'));
//         m2Cells = getCells(document.querySelector('.digit-m-2'));
//     }, []);

//     // Función para alternar el tema entre claro y oscuro
//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     // Renderizado del componente Clock
//     return (
//         <div className={`flex flex-col justify-center items-center w-screen h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
//             <div id='clock' className='scale-x-[0.6] scale-y-[0.6] bg-[#111] p-3 shadow-[0_6px_10px_-3px_black] flex flex-col justify-center'>
//                 <div className='flex flex-row justify-center w-full h-full gap-2'>
//                     <div className='digit digit-h-1 flex flex-col justify-around px-5 min-h-full '>
//                         <div className='flex flex-row justify-center translate-y-5 '>
//                             <div className='display-1 bg-gray-900 '></div>
//                         </div>
//                         <div className='flex flex-row justify-between translate-y-2 '>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 '></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center'>
//                             <div className='display-3 bg-gray-900 scale-y-[.7]  '></div>
//                         </div>
//                         <div className='flex flex-row justify-between -translate-y-2'>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900'></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-row justify-center -translate-y-[20px]'>
//                             <div className='display-4 bg-gray-900'></div>.
//                         </div>
//                     </div>
//                     <div className='digit digit-h-2 flex flex-col justify-around px-5 min-h-full '>
//                         <div className='flex flex-row justify-center translate-y-5 '>
//                             <div className='display-1 bg-gray-900 '></div>
//                         </div>
//                         <div className='flex flex-row justify-between translate-y-2 '>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 '></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center'>
//                             <div className='display-3 bg-gray-900 scale-y-[.7]  '></div>
//                         </div>
//                         <div className='flex flex-row justify-between -translate-y-2'>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900'></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-row justify-center -translate-y-[20px]'>
//                             <div className='display-4 bg-gray-900'></div>.
//                         </div>
//                     </div>
//                     <div className='flex flex-col justify-center gap-10 animate-pulse drop-shadow-[0_0px_7px_rgba(89,161,255,1)] grow'>
//                         <div className='w-6 h-6 bg-[#3080FF] rounded-sm'> </div>
//                         <div className='w-6 h-6 bg-[#3080FF] rounded-sm'> </div>
//                     </div>
//                     <div className='digit digit-m-1 flex flex-col justify-around px-5 min-h-full '>
//                         <div className='flex flex-row justify-center translate-y-5 '>
//                             <div className='display-1 bg-gray-900 '></div>
//                         </div>
//                         <div className='flex flex-row justify-between translate-y-2 '>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 '></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center'>
//                             <div className='display-3 bg-gray-900 scale-y-[.7]  '></div>
//                         </div>
//                         <div className='flex flex-row justify-between -translate-y-2'>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900'></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-row justify-center -translate-y-[20px]'>
//                             <div className='display-4 bg-gray-900'></div>.
//                         </div>
//                     </div>
//                     <div className='digit digit-m-2 flex flex-col justify-around px-5 min-h-full '>
//                         <div className='flex flex-row justify-center translate-y-5 '>
//                             <div className='display-1 bg-gray-900 '></div>
//                         </div>
//                         <div className='flex flex-row justify-between translate-y-2 '>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 '></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center'>
//                             <div className='display-3 bg-gray-900 scale-y-[.7]  '></div>
//                         </div>
//                         <div className='flex flex-row justify-between -translate-y-2'>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900'></div>
//                             </div>
//                             <div className='flex flex-col justify-center'>
//                                 <div className='display-2 bg-gray-900 -scale-x-100'></div>
//                             </div>
//                         </div>
//                         <div className='flex flex-row justify-center -translate-y-[20px]'>
//                             <div className='display-4 bg-gray-900'></div>.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <button onClick={toggleTheme} className="absolute top-4 right-4 p-2 rounded-md bg-blue-500 text-white">
//                 {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//         </div>
//     );
// };

// export default Clock;














import React, { useState, useEffect } from 'react';

const Clock = () => {
    const date = new Date();
    const [isDarkMode, setIsDarkMode] = useState(false); // false -> lightmode
    const [dataTime, setDataTime] = useState({
        horas: date.getHours(),
        minutos: date.getMinutes(),
    });

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDataTime({
                horas: date.getHours(),
                minutos: date.getMinutes(),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none'>
        <div className='banner-container'>
            <div className='clock-container'>
                <div className={` p-3 py-2 rounded-lg  ${isDarkMode ? 'bg-gray-400': 'bg-black'}`}>


                    <div className={`flex items-center justify-center text-3xl font-bold ${isDarkMode ? 'text-gray-800': 'text-blue-400'}`}>
                        <p>
                            {dataTime.horas < 10 ? `0${dataTime.horas}` : dataTime.horas} : {dataTime.minutos < 10 ? `0${dataTime.minutos}` : dataTime.minutos}
                        </p>
                    </div>


                </div>
                <header className='flex justify-start p-4'>
                    <button onClick={toggleTheme} className='w-6 h-6  dark:bg-red-500 rounded-full'></button>
                </header>
            </div>
        </div>
        </div>
    );
};

export default Clock;
