import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoForm from './ToDoForm';
import EditToDoForm from './EditToDoForm';
import ToDo from './ToDo';

function ToDoWrapper() {
    const [toDos, setToDos] = useState([]);

    const addToDo = (task) => {
        setToDos([...toDos, { id: uuidv4(), task, completed: false, isEditing: false }]);
    };

    const deleteToDo = (id) => {
        setToDos(toDos.filter(toDo => toDo.id !== id));
    };

    const toggleComplete = (id) => {
        setToDos(toDos.map(toDo => 
            toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
        ));
    };

    const editToDo = (id) => {
        setToDos(toDos.map(toDo =>
            toDo.id === id ? { ...toDo, isEditing: !toDo.isEditing } : toDo
        ));
    };

    const editTask = (task, id) => {
        setToDos(toDos.map(toDo =>
            toDo.id === id ? { ...toDo, task, isEditing: !toDo.isEditing } : toDo
        ));
    };

    return (
        <div className="todo-wrapper">
            <h1>Get Things Done!</h1>
            <ToDoForm addToDo={addToDo} />
            {toDos.map(toDo => (
                toDo.isEditing ? (
                    <EditToDoForm key={toDo.id} task={toDo} editTask={editTask} />
                ) : (
                    <ToDo
                        key={toDo.id}
                        task={toDo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                    />
                )
            ))}
        </div>
    );
}

export default ToDoWrapper;
