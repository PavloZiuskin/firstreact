import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (values, { resetForm }) => {
        setTodos([...todos, values.todo]);
        resetForm();
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const validationSchema = Yup.object({
        todo: Yup.string()
            .min(5, 'Мінімальна довжина - 5 символів')
            .required('Поле є обов’язковим'),
    });

    return (
        <div>
            <h2>Список справ</h2>
            <Formik
                initialValues={{ todo: '' }}
                validationSchema={validationSchema}
                onSubmit={addTodo}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                name="todo"
                                type="text"
                                placeholder="Введіть нову справу"
                            />
                            <ErrorMessage
                                name="todo"
                                component="div"
                                style={{ color: 'red', marginTop: '5px' }}
                            />
                        </div>
                        <button type="submit" style={{ marginTop: '10px' }}>
                            Додати
                        </button>
                    </Form>
                )}
            </Formik>

            <ul style={{ marginTop: '20px' }}>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}{' '}
                        <button onClick={() => removeTodo(index)}>Видалити</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;