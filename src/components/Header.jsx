import React from 'react';

const Header = () => {
    return (
        <>
            <nav className='flex justify-evenly py-3'>
                <h1 className='font-black text-xl self-center'>12</h1>
                <ul className='flex gap-3'>
                    <a className='font-bold text-sm self-center hover:text-blue-500' href=''>
                        Home
                    </a>
                    <a className='font-bold text-sm self-center hover:text-blue-500' href=''>
                        Services
                    </a>
                    <a className='font-bold text-sm self-center hover:text-blue-500' href=''>
                        Projects
                    </a>
                    <a className='font-bold text-sm self-center hover:text-blue-500' href=''>
                        Contact
                    </a>
                </ul>
            </nav>
        </>
    );
};

export default Header;
