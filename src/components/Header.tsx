import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

interface Props {
    linkItems: string[]
}

const Header = ({linkItems} :  Props) => {
    const [navbarState, setNavbarState] = useState(false)

    const toggleNavBar = () => {
        setNavbarState(!navbarState);
        console.log("Toggle navbar ", (navbarState ? 'on' : 'off'));
    };

    return (
        <nav className="flex items-center justify-between flex-wrap pt-2 pb-2 bg-gray-900 text-white p-6">
            <h1 className="flex text-xl">Illusion</h1>

            {/* Small-size top-menu */}
            <div className="block md:hidden">
                {/* <span className="align-middle px-2" >-</span> */}
                <button className="flex items-center" onClick={() => toggleNavBar()}>--</button>
            </div>

            {/* { navbarState &&    
                <div className="md:hidden absolute top-0 right-0 bg-gray-800 w-full">
                    {linkItems.map(item => {
                        return(<li key={item} className=""><Link to={'/' + item.toLowerCase()}>{item}</Link></li>);
                    })
                }
                </div>
            } */}

            <ul className={`${navbarState ? '' : 'hidden'} flex-grow md:flex md:flex-row md:w-auto`}>
                {linkItems.map(item => {
                        return(<li key={item} className="flex p-2"><Link to={'/' + item.toLowerCase()}>{item}</Link></li>); // TODO: item string as link path
                    })
                }
            </ul>
        </nav>
    );
};

export default Header;