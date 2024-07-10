// import React, { useEffect, useState } from "react";
// // import Modal from "./components/Modal";
// // import ListadoTareas from "./components/ListadoTareas";
// // import Tarea from "./components/Tarea";
// import Modal from "./Modal";
// // import ListaTareas from "./ListadoTareas";
// import ListadoTareas from "./ListadoTareas";


// import Tarea from "./Tarea";



// const AddProduct = () => {
//     const [tareas, setTareas] = useState([]);
//     const [modalAbierto, setModalAbierto] = useState(false);
//     const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

//     // Función para guardar una nueva tarea o editar una existente
//     const AddProducts = (tarea) => {
//         if (tareaSeleccionada) {
//             // Editar tarea existente
//             const nuevasTareas = tareas.map(t =>
//                 t.id === tarea.id ? { ...t, nombre: tarea.nombre, dificultad: tarea.dificultad, descripcion: tarea.descripcion } : t
//             );
//             setTareas(nuevasTareas);
//         } else {
//             // Agregar nueva tarea
//             const nuevaTarea = {
//                 ...tarea,
//                 id: Date.now()
//             };
//             setTareas([...tareas, nuevaTarea]);
//         }
//         closeModal();
//     };

//     // Función para eliminar una tarea
//     const eliminarTarea = (id) => {
//         const nuevasTareas = tareas.filter(t => t.id !== id);
//         setTareas(nuevasTareas);
//     };

//     // Función para abrir el modal de edición de tarea
//     const abrirModal = () => {
//         setTareaSeleccionada(null); // Limpiar tarea seleccionada
//         setModalAbierto(true);
//     };

//     // Función para abrir el modal con la tarea seleccionada para editar
//     const abrirModalEditar = (tarea) => {

//         setTareaSeleccionada(tarea);
//         setModalAbierto(true);
//     };

//     // Función para cerrar el modal
//     const closeModal = () => {
//         setModalAbierto(false);
//         setTareaSeleccionada(null); // Limpiar tarea seleccionada
//     };


//     /////////////////////ESTADO PARA EL SELECTOR DE TEMA
//     const [theme, setTheme] = useState(() => {
//         if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//             return "dark"

//         }
//         return "light"
//     })

//     useEffect(() => {
//         if (theme == "dark") {
//             document.querySelector("html").classList.add("dark")
//         } else {
//             document.querySelector("html").classList.remove("dark")

//         }
//     }, [theme])


//     const handlerChangeTheme = () => {
//         setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")

//     };


//     // Función para obtener el tema guardado en localStorage
//     // const getSavedTheme = () => {
//     //     const savedTheme = localStorage.getItem("theme");
//     //     return savedTheme ? savedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
//     // };

//     // const [theme, setTheme] = useState(getSavedTheme());

//     // const handlerChangeTheme = () => {
//     //     const newTheme = theme === "light" ? "dark" : "light";
//     //     setTheme(newTheme);
//     //     localStorage.setItem("theme", newTheme); // Guardar el tema seleccionado en localStorage
//     // };


//     return (
//         <div className='h-screen flex   justify-center items-center  dark:bg-neutral-600'>

//             <h1 className="text-6xl ">Gestión de Productos</h1>


//             <button className='bg-slate-400  text-white py-4 m-9 rounded hover:bg-slate-400 dark:bg-slate-600 dark:text-white'
//                 onClick={handlerChangeTheme}
//             >
//                 Change theme
//             </button>


//             <button className="btn crear-tarea" onClick={abrirModal}>Crear Tarea</button>
//             <ListadoTareas
//                 tareas={tareas}
//                 eliminarTarea={eliminarTarea}
//                 editarTarea={abrirModalEditar}
//             />
//             {modalAbierto && (
//                 <Modal
//                     tareaSeleccionada={tareaSeleccionada}
//                     guardarTarea={guardarTarea}
//                     closeModal={closeModal}
//                 />
//             )}



//         </div>
//     );
// };

// export default AddProduct;
