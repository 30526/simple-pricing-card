import React from 'react';

const NavLink = ({ route }) => {
    return (
        <li className='px-5 py-1 md:mr-10 hover:cursor-pointer hover:bg-[#c2c2c21a]'><a href={route.path}></a>{route.name}</li>
    );
};

export default NavLink;