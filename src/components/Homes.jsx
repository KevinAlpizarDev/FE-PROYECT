import React, { useState } from "react";
import ListadoTareas from "../components/ListadoTareas";
import Modal from "../components/Modal";

const Home = () => {
    const [tareas, setTareas] = useState([]);
    const [tareaEditar, setTareaEditar] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const guardarTarea = (nuevaTarea) => {
        if (tareaEditar) {
            // Editar tarea existente
            const nuevasTareas = tareas.map((t) =>
                t.id === tareaEditar.id ? nuevaTarea : t
            );
            setTareas(nuevasTareas);
        } else {
            // Crear nueva tarea
            nuevaTarea.id = Date.now();
            setTareas([...tareas, nuevaTarea]);
        }
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((t) => t.id !== id);
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <ListadoTareas
                tareas={tareas}
                eliminarTarea={eliminarTarea}
                setTareaEditar={setTareaEditar}
            />
            <Modal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                guardarTarea={guardarTarea}
                tareaEditar={tareaEditar}
            />
            <button onClick={() => setModalOpen(true)}>Add Task</button>
        </div>
    );
};

export default Home;
