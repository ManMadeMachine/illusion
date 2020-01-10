import React from 'react';
import Menu from './Menu';

import './Header.css';

const Header = () => {
    return (
        <div className="app-header">
            <h1>Illusion</h1>
            <Menu items={[`Expense`, `Income`, `Statistics`]} />
        </div>
    );
};

export default Header;