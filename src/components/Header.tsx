import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

interface Props {
    linkItems: string[]
}

const Header = ({linkItems} :  Props) => {
    return (
        <div className="flex flex-row justify-start pt-2 pb-2 bg-gray-900 text-white">
            <h1 className="p-2">Illusion</h1>
            <ul className=" flex">
                {linkItems.map(item => {
                        return(<li key={item}><Link to={'/' + item.toLowerCase()}>{item}</Link></li>); // TODO: item string as link path
                    })
                }
            </ul>
        </div>
    );
};

export default Header;