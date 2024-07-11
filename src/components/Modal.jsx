import React, { useState, useEffect } from "react";
import { createProduct } from "../hooks/useFetch2.js";
import uuid from 'react-uuid';
import { comparteContexto } from "../contexts/Context.jsx";
import { updateProduct } from "../hooks/useFetch2.js";

const Modal = ({ tareaSeleccionada, guardarTarea, closeModal }) => {
    const { actualizador, setActualizador, datosLectura, setDatosLectura, nombre1, setNombre1, dificultad1, setDificultad1, descripcion1, setDescripcion1, modalEdit, setModalEdit } = comparteContexto();

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
            alert("Termina");
            return;
        }

        if (!dificultad1.trim()) {
            alert("NADA");
            return;
        }

        const idProducto = uuid();
        const nuevaTarea = {
            id: idProducto,
            nombre1,
            dificultad1,
            descripcion1,
        };

        console.log(createProduct(nuevaTarea));
        guardarTarea(nuevaTarea);

        setTimeout(() => {
            setActualizador(actualizador + 1);
        }, 200);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        if (!nombre1.trim()) {
            alert("Termina");
            return;
        }

        if (!dificultad1.trim()) {
            alert("NADA");
            return;
        }

        const idProducto = uuid();
        const nuevaTarea = {
            id: idProducto,
            nombre1,
            dificultad1,
            descripcion1,
        };

        console.log(createProduct(nuevaTarea));
        console.log(nuevaTarea);

        updateProduct(idProducto, nuevaTarea);

        setTimeout(() => {
            setActualizador(actualizador + 1);
        }, 200);
    };

    return (
        <div className=" py-6">
            <div className="py-40">
                <span className="close-modal" onClick={closeModal}>&times;</span>

                <div class="fixed left-0 top-0 flex h-full w-full items-center py- justify-center bg-black bg-opacity-50 py-10">
                    <div class="max-h-full py-10 w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white my-8 p-6">
                        <div class="w-full">
                            <form class="w-full px-5" onSubmit={modalEdit ? console.log(2) : handleSubmit}>
                                <button class="p-3 bg-sky-500  hover:bg-sky-600 rounded-full text-white w-full font-semibold" onClick={closeModal}>Close</button>



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

                                <label class="block mb-2 text-lg font-bold text-gray-800">Price:</label>
                                <input class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-200"
                                    type="number"
                                    value={nombre1}
                                    onChange={(e) => setNombre1(e.target.value)}
                                />

                                <label class="block mb-2 text-lg font-bold text-w">Nombre</label>
                                <textarea
                                    type="number"
                                    value={descripcion1}
                                    onChange={(e) => setDescripcion1(e.target.value)}
                                    id="message" rows="4" class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-5000 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="       ..."></textarea>

                                <div className="m-8 my-20 max-w-[400px] mx-auto">
                                    <div class="space-y-4">
                                        <button class="p-3 bg-black hover:bg-slate-900 rounded-full text-white w-full font-semibold" type="submit">{modalEdit ? 'Edit Product' : 'Add product'}</button>
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


