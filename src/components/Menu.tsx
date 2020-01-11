import React from 'react';

import './Menu.css';

interface Props {
    items: string[]
}

const Menu = ({items} : Props) => {
    return(
        <div className="link-container">
            <h1>Illusion</h1>
            <ul className="links">
                {items.map(item => {
                        return(<li key={item} className="menu-link"><a href="/">{item}</a></li>); // TODO: item string as link path
                    })
                }
            </ul>
        </div>
    );
}

export default Menu;