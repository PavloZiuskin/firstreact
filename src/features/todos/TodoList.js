import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/todos/todosSlice';
import './TodoList.css'; // Підключаємо CSS файл

const TodoList = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div className="todo-container">
            <h1>TODO App</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="todo-input"
                />
                <button type="submit" className="todo-button">
                    Add
                </button>
            </form>

            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        {todo}
                    </li>
                ))}
            </ul>

            <footer className="todo-footer">
                Total tasks: <span>{todos.length}</span>
            </footer>
        </div>
    );
};

export default TodoList;