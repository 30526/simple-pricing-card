import React, { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';

const navigation = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: "home", // optional: icon name or component
        isActive: true, // true if this is the current route
        description: "Go to homepage",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
        icon: "info",
        isActive: false,
        description: "Learn more about us",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
        icon: "briefcase",
        isActive: false,
        description: "Explore our offered services",
        subMenu: [
            {
                id: 3.1,
                name: "Web Design",
                path: "/services/web-design",
                icon: "layout",
            },
            {
                id: 3.2,
                name: "SEO Optimization",
                path: "/services/seo",
                icon: "search",
            },
        ],
    },
    {
        id: 4,
        name: "Portfolio",
        path: "/portfolio",
        icon: "image",
        isActive: false,
        description: "View our past projects",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
        icon: "mail",
        isActive: false,
        description: "Get in touch with us",
    },
];


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const links = navigation.map(route => <NavLink key={route.id} route={route}></NavLink>)
    return (
        <nav className='border-b-1 border-gray-600'>

            <div className='container mx-auto flex justify-between items-center py-4'>
                <span className='flex  gap-1' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <X className='md:hidden'></X> :
                            <Menu className='md:hidden'></Menu>
                    }
                    <ul className={`md:hidden bg-[#c2c2c21a] text-white
                    absolute ${open ? 'top-8' : '-top-64'} duration-1000`}>
                        {links}
                    </ul>
                    <h3>Navbar</h3>
                </span>
                <ul className='md:flex hidden'>
                    {
                        links
                    }
                </ul>
                <button className='btn bg-gray-900'>Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;