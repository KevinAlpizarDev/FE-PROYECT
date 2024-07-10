



import React, { useState, useEffect } from "react";
import { createProduct } from "../hooks/useFetch2"
import uuid from 'react-uuid'
// import { comparteContexto } from "../context/Context.jsx"
// import { updateProduct } from "../hooks/useFetch.js"
import { comparteContexto } from "../contexts/Context";
import { updateProduct } from "../hooks/useFetch2";


const Modal = ({ tareaSeleccionada, guardarTarea, closeModal }) => {


    const { actualizador, setActualizador, datosLectura, setDatosLectura, nombre1, setNombre1, dificultad1, setDificultad1, descripcion1, setDescripcion1, modalEdit, setModalEdit } = comparteContexto()


    // const [nombre, setNombre] = useState("");
    // const [dificultad, setDificultad] = useState("");
    // const [descripcion, setDescripcion] = useState("");

    // Si hay una tarea seleccionada, cargar sus datos en el estado local al abrir el modal
    useEffect(() => {
        if (tareaSeleccionada) {
            setNombre1(tareaSeleccionada.nombre1);
            setDificultad1(tareaSeleccionada.dificultad1);
            setDescripcion1(tareaSeleccionada.descripcion1);
        }
    }, [tareaSeleccionada]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre1.trim()) {

            alert("Termina")
            return;
        }

        if (!dificultad1.trim()) {
            alert("NADA")
            return;
        }

        const idProducto = uuid()
        console.log(idProducto);
        const nuevaTarea = {
            id: idProducto,
            nombre1,
            dificultad1,
            descripcion1,




        };


        console.log(createProduct(nuevaTarea));
        console.log(nuevaTarea);

        guardarTarea(nuevaTarea)
        setTimeout(() => {
            setActualizador(actualizador + 1)

        }, 200);


    };

    ///////////////////////

    const handleEditSubmit = (e) => {
        e.preventDefault();

        if (!nombre1.trim()) {

            alert("Termina")
            return;
        }

        if (!dificultad1.trim()) {
            alert("NADA")
            return;
        }

        const idProducto = uuid()
        console.log(idProducto);
        const nuevaTarea = {
            id: idProducto,
            nombre1,
            dificultad1,
            descripcion1,




        };


        console.log(createProduct(nuevaTarea));
        console.log(nuevaTarea);

        updateProduct(id,)
        setTimeout(() => {
            setActualizador(actualizador + 1)

        }, 200);


    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-modal" onClick={closeModal}>&times;</span>


                {/* ////////////////////////////////MODAL */}

                <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">

                    <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">


                        <div class="w-full">
                            {/* 
/////////////////////////////////////////////////// */}

                            {/* <form class="w-full h-min-screen p-1" onSubmit={handleSubmit}> */}
                            <form class="w-full px-5" onSubmit={modalEdit ? console.log(2) : handleSubmit}>




                                <button class="p-3 bg-white border rounded-full w-full font-semibold" onClick={closeModal}>Close</button>

                                <div role="button" class="w-max">
                                    <button
                                        class="select-none rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-dark="true"
                                    >
                                        Close
                                    </button>
                                </div>




                                {/* <h1 class="mb-4 text-3xl font-extrabold">Turn on notifications</h1> */}


                                <label class="block mb-2 text-lg font-bold text-gray-800">Picture Product:</label>
                                <select class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-200"
                                    value={dificultad1}
                                    onChange={(e) => setDificultad1(e.target.value)}
                                >
                                    <option value="">Selecciona entre tus productos</option>
                                    <option value="1">Air Back</option>
                                    <option value="2">Procesador</option>
                                    <option value="3">Llanta Tesla</option>
                                    <option value="4">Intel Core i7</option>
                                </select>




                                <label class="block mb-2 text-lg font-bold text-gray-800">Name:</label>


                                {/* <div></div> */}



                                <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-200"
                                    type="text"
                                    value={nombre1}
                                    onChange={(e) => setNombre1(e.target.value)}
                                />
                                {/* 
                                <label class="block mb-2 text-lg font-bold text-gray-800">Dificultad:</label>
                                <select class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-200"
                                    value={dificultad}
                                    onChange={(e) => setDificultad(e.target.value)}
                                >
                                    <option value="">Selecciona entre tus productos</option>
                                    <option value="1">Air Back</option>
                                    <option value="2">Procesador</option>
                                    <option value="3">Llanta Tesla</option>
                                    <option value="4">Intel Core i7</option>
                                </select> */}

                                <label class="block mb-2 text-lg font-bold text-w">Descripción:</label>
                                {/* <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-200"
                                    type="text"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                /> */}



                                <textarea

                                    type="text"
                                    value={descripcion1}
                                    onChange={(e) => setDescripcion1(e.target.value)}
                                    id="message" rows="4" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-5000 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>


                                {/* 
                    <button type="submit">{tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}</button> */}

                                {/* ///////////////////////////////////////////////////// */}
                                <div className="m-8 my-20 max-w-[400px] mx-auto">
                                    {/* <div class="mb-8">
                                        <p class="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.</p>
                                    </div> */}
                                    <div class="space-y-4">
                                        {/* <button class="p-3 bg-black rounded-full text-white w-full font-semibold">Allow notifications</button> */}
                                        {/* <span className="close-modal" onClick={closeModal}>&times;</span> */}
                                        {/* <button  class="p-3 bg-black rounded-full text-white w-full font-semibold" type="submit">{tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}</button> */}

                                        <button class="p-3 bg-black rounded-full text-white w-full font-semibold" type="submit">{modalEdit ? 'Editar Tarea' : 'Agregar Tarea'}</button>
                                    </div>
                                </div>



                            </form>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Modal;



