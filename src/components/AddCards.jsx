import { useEffect, useState } from "react";
import Modal from "./Modal";
import ListadoTareas from "./ListadoTareas";
import Tarea from "./Tarea";

const AddCards = () => {
    const [tareas, setTareas] = useState([]);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    // Función para guardar una nueva tarea o editar una existente
    const guardarTarea = (tarea) => {
        if (tareaSeleccionada) {
            // Editar tarea existente
            const nuevasTareas = tareas.map(t =>
                t.id === tarea.id ? { ...t, nombre: tarea.nombre, dificultad: tarea.dificultad, descripcion: tarea.descripcion } : t
            );
            setTareas(nuevasTareas);
        } else {
            // Agregar nueva tarea
            const nuevaTarea = {
                ...tarea,
                id: Date.now()
            };
            setTareas([...tareas, nuevaTarea]);
        }
        closeModal();
    };


    const eliminarTarea = (id) => {
        // Mostrar confirmación al usuario
        const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta tarea?");
        if (confirmacion) {
            // El usuario confirmó eliminar la tarea
            const nuevasTareas = tareas.filter(t => t.id !== id);
            setTareas(nuevasTareas);
        }
        // Si el usuario cancela, no hacemos nada
    };

    // Función para abrir el modal de edición de tarea
    const abrirModal = () => {
        setTareaSeleccionada(null); // Limpiar tarea seleccionada
        setModalAbierto(true);
    };

    // Función para abrir el modal con la tarea seleccionada para editar
    const abrirModalEditar = (tarea) => {
        setTareaSeleccionada(tarea);
        setModalAbierto(true);
    };

    const closeModal = () => {
        setModalAbierto(false);
        setTareaSeleccionada(null); // Limpiar tarea seleccionada
    };

    return (
        <>
            <div>
                <section className="items-center justify-end w-full dark:bg-black">
                    <div className="relative inline-flex group my-2 mx-5">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative inline-flex items-center justify-center px-8 py-1 text-lg text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" onClick={abrirModal}>
                            Add
                        </button>
                    </div>

                    <div className='h-screen flex justify-center items-center dark:bg-black overflow-y-scroll'>
                        <ListadoTareas
                            tareas={tareas}
                            eliminarTarea={eliminarTarea}
                            editarTarea={abrirModalEditar}
                        />
                        {modalAbierto && (
                            <Modal
                                tareaSeleccionada={tareaSeleccionada}
                                guardarTarea={guardarTarea}
                                closeModal={closeModal}
                            />
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default AddCards;

// import { useEffect, useState } from "react";
// // import Modal from "./components/Modal";
// // import ListadoTareas from "./components/ListadoTareas";
// // import Tarea from "./components/Tarea";

// import Modal from "./Modal";
// import ListadoTareas from "./ListadoTareas"
// import Tarea from "./Tarea";

// const AddCards = () => {
//     const [tareas, setTareas] = useState([]);
//     const [modalAbierto, setModalAbierto] = useState(false);
//     const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

//     // Función para guardar una nueva tarea o editar una existente
//     const guardarTarea = (tarea) => {
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

//     const closeModal = () => {
//         setModalAbierto(false);
//         setTareaSeleccionada(null); // Limpiar tarea seleccionada
//     };



//     return (
//         <>

        





//             <div>

//                 <section class="items-center justify-end    w-full dark:bg-black">
                 
//                     <div class="relative inline-flex  group my-2 mx-5">
//         <div
//             class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
//         </div>
    
//         <button className="relative inline-flex items-center justify-center px-8 py-1 text-lg  text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"  onClick={abrirModal}>
//             Add
//         </button>

//     </div>

      

//                     <div className='h-screen flex   justify-center items-center dark:bg-black  overflow-y-scroll'>


//                         <ListadoTareas
//                             tareas={tareas}
//                             eliminarTarea={eliminarTarea}
//                             editarTarea={abrirModalEditar}
//                         />
//                         {modalAbierto && (
//                             <Modal
//                                 tareaSeleccionada={tareaSeleccionada}
//                                 guardarTarea={guardarTarea}
//                                 closeModal={closeModal}
//                             />
//                         )}



//                     </div>





//                 </section>

//             </div>






//         </>
//     );
// };

// export default AddCards;
