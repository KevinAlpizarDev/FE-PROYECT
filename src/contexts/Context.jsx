import React from 'react'
import { useState, createContext, useContext } from 'react'
export const Contexto = createContext()


export const Context = ({ children }) => {

    const [actualizador, setActualizador] = useState(0)
    const [datosLectura, setDatosLectura] = useState([])


    const [nombre1, setNombre1] = useState("");
    const [dificultad1, setDificultad1] = useState("");
    const [descripcion1, setDescripcion1] = useState("");
    const [modalEdit, setModalEdit] = useState("")


    return (
        <Contexto.Provider value={{
            actualizador,
            setActualizador,
            datosLectura,
            setDatosLectura,
            nombre1,
            setNombre1,
             dificultad1, 
             setDificultad1,
              descripcion1, 
              setDescripcion1,
               modalEdit, 
               setModalEdit
        }}>
            {children}


        </Contexto.Provider>
    )
}

export const comparteContexto = () => useContext(Contexto)