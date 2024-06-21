import React, { useState } from 'react';

function EditToDoForm({ task, editTask }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id);
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Update task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    );
}

export default EditToDoForm;
