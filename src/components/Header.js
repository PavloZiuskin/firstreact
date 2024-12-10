import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <nav>
            <Link to="/">Головна</Link> | <Link to="/contacts">Контакти</Link> | <Link to="/about">Про мене</Link>
        </nav>
    </header>
);

export default Header;