import React, { useContext } from 'react';
import { ThemeContext } from '../theme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Змінити тему: {theme === 'light' ? 'Світла' : 'Темна'}
        </button>
    );
};

export default ThemeToggle;