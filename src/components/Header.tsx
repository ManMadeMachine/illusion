import React, { useState } from 'react';
import {Link} from 'react-router-dom';

interface Props {
    linkItems: string[]
}

const Header = ({linkItems} :  Props) => {
    const [navbarState, setNavbarState] = useState(false)

    const toggleNavBar = () => {
        setNavbarState(!navbarState);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap pt-2 pb-2 bg-gray-900 text-white p-6">
            <h1 className="flex text-xl">Illusion</h1>

            {/* Small-size top-menu button*/}
            <div className="block md:hidden">
                <button className="flex items-center p-2 bg-gray-700" onClick={() => toggleNavBar()}>--</button>
            </div>
            
            {/* Actual menu items */}
            <ul className={`${navbarState ? '' : 'hidden'} w-full flex-grow md:flex md:flex-row md:w-auto`}>
                {linkItems.map(item => {
                        return(<li key={item} className="flex p-2"><Link to={'/' + item.toLowerCase()}>{item}</Link></li>);
                    })
                }
            </ul>
        </nav>
    );
};

export default Header;