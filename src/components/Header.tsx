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
        <nav className="header flex w-full items-center pt-2 pb-2 bg-gray-900 text-white p-6">
            <h1 className="text-xl mr-5">Illusion</h1>

            {/* Small-size top-menu button*/}
            <div className="flex flex-1 justify-end md:hidden">
                <button className="p-2 bg-gray-700" onClick={() => toggleNavBar()}>--</button>
            </div>
            
            {/* Actual menu items */}
            <ul className={`${navbarState ? '' : 'hidden'} w-full md:flex md:w-auto`}>
                {linkItems.map(item => {
                        // TODO: Item as a component
                        return(<li key={item} className="flex p-2"><Link to={'/' + item.toLowerCase()} className="text-gray-500 hover:text-gray-300">{item}</Link></li>);
                    })
                }
            </ul>
        </nav>
    );
};

export default Header;