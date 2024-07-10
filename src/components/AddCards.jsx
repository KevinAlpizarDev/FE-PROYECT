
import { useEffect, useState } from "react";
// import Modal from "./components/Modal";
// import ListadoTareas from "./components/ListadoTareas";
// import Tarea from "./components/Tarea";

import Modal from "./Modal";
import ListadoTareas from "./ListadoTareas"
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

    // Función para eliminar una tarea
    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter(t => t.id !== id);
        setTareas(nuevasTareas);
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

    // Función para cerrar el modal
    const closeModal = () => {
        setModalAbierto(false);
        setTareaSeleccionada(null); // Limpiar tarea seleccionada
    };


    // /////////////////////ESTADO PARA EL SELECTOR DE TEMA
    // const [theme, setTheme] = useState(() => {
    //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //         return "dark"

    //     }
    //     return "light"
    // })

    // useEffect(() => {
    //     if (theme == "dark") {
    //         document.querySelector("html").classList.add("dark")
    //     } else {
    //         document.querySelector("html").classList.remove("dark")

    //     }
    // }, [theme])


    // const handlerChangeTheme = () => {
    //     setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")

    // };


    // Función para obtener el tema guardado en localStorage
    // const getSavedTheme = () => {
    //     const savedTheme = localStorage.getItem("theme");
    //     return savedTheme ? savedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    // };

    // const [theme, setTheme] = useState(getSavedTheme());

    // const handlerChangeTheme = () => {
    //     const newTheme = theme === "light" ? "dark" : "light";
    //     setTheme(newTheme);
    //     localStorage.setItem("theme", newTheme); // Guardar el tema seleccionado en localStorage
    // };


    return (
        <>

            {/* <!-- This is an example component --> */}




            {/* //////////////////////// */}
            <div>

                <section class="items-center justify-end    w-full dark:bg-black">
                    {/* 
        flex  items-center justify-center bg-[#000] */}
                    {/* <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Latest Achievements</h2> */}
                    {/* <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit  w-full font-normal !text-gray-500 lg:w-5/12">Read about our latest achievements and milestones.</p> */}
                    <a href="https://www.material-tailwind.com/" target="_blank">Generated with <b>Magic AI Blocks</b> by Creative Tim</a>.
                  
                 
                  
                    {/* <button className="btn crear-tarea dark:text-white" onClick={abrirModal}>Crear Tarea</button> */}
                    <div class="relative inline-flex  group my-6">
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
    
        <button className="relative inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"  onClick={abrirModal}>
            Add
        </button>

    </div>

      

                    <div className='h-screen flex   justify-center items-center dark:bg-black  overflow-y-scroll'>


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
