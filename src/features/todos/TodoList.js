import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchTodos, toggleTodo, deleteTodo, clearTodos } from '../../store/todos/todosSlice';
import './TodoList.css';

const TodoList = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.todos);

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

            <button onClick={() => dispatch(fetchTodos())} className="fetch-button">
                Fetch Todos
            </button>
            <button onClick={() => dispatch(clearTodos())} className="fetch-button" style={{ backgroundColor: 'red' }}>
                Clear All
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            <ul className="todo-list">
                {items.map((todo, index) => (
                    <li key={index} className="todo-item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => dispatch(toggleTodo(index))} style={{ cursor: 'pointer' }}>
                            {todo.text}
                        </span>
                        <button
                            onClick={() => dispatch(deleteTodo(index))}
                            style={{
                                marginLeft: '10px',
                                padding: '5px 10px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <footer className="todo-footer">
                Total tasks: <span>{items.length}</span>
            </footer>
        </div>
    );
};

export default TodoList;
