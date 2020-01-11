import React from 'react';
// import Menu from './Menu';

import './Header.css';

interface Props {
    linkItems: string[]
}

const Header = ({linkItems} :  Props) => {
    return (
        <div className="app-header">
            <h1>Illusion</h1>
            
            <div className="link-container">
                <ul className="links">
                    {linkItems.map(item => {
                            return(<li key={item} className="menu-link"><a href="/">{item}</a></li>); // TODO: item string as link path
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;