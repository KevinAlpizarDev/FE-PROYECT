

import React, { useEffect, useRef, useState } from 'react';
// import Tarea from './Tarea'; // Asegúrate de importar el componente Tarea desde su ubicación correcta
// import { getProducts } from "../hooks/useFetch.js"
// import { comparteContexto } from "../context/Context.jsx"
import Tarea from './Tarea';
import { getProducts } from '../hooks/useFetch2';
import { comparteContexto } from '../contexts/Context';

const ListadoTareas = ({ tareas, eliminarTarea, editarTarea }) => {

    const { actualizador, setActualizador, datosLectura, setDatosLectura } = comparteContexto()

    const [productos, setProductos] = useState([])
    const productosReference = useRef([])

    useEffect(() => {
        const GetInformation = async () => {
            const data = await getProducts()
            productosReference.current = data
            console.log(data);
            setProductos(productosReference.current)
            setDatosLectura(productosReference.current)

        }
        GetInformation()

    }, [actualizador])


    // console.log(productosReference.current);

    console.log(productos);



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {productos.length > 0 ? (
                productos.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        // tarea={tarea}
                        nombre={tarea.nombre1}
                        descripcion={tarea.descripcion1}
                        dificultad={tarea.dificultad1}
                        onEliminarTarea={eliminarTarea}
                        onEditarTarea={editarTarea}

                    />
                ))
            ) : (
                <p className="text-gray-500 text-center">No hay tareas disponibles.</p>
            )}
        </div>
    );
};

export default ListadoTareas;
