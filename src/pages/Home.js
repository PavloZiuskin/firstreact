import React from 'react';
import TodoList from '../components/TodoList';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => (
    <div>
        <ThemeToggle />
        <TodoList />
    </div>
);

export default Home;