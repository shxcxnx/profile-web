export const Header = () => {
    return (
        <header>
            <nav className='w-full h-14 flex justify-evenly items-center bg-blue-500'>
                <a href='/'>
                    <h1 className='cursor-pointer font-black text-2xl text-white hover:text-black'>12</h1>
                </a>

                <ul className='flex gap-4'>
                    <a href='#about'>
                        <li className='font-bold cursor-pointer text-white hover:text-black'>About</li>
                    </a>
                    <a href='#services'>
                        <li className='font-bold cursor-pointer text-white hover:text-black'>Services</li>
                    </a>
                    <a href='#projects'>
                        <li className='font-bold cursor-pointer text-white hover:text-black'>Projects</li>
                    </a>
                    {/* <a href='#contact'>
                        <li className='font-bold cursor-pointer hover:text-red-500'>Contact</li>
                    </a> */}
                </ul>
            </nav>
        </header>
    );
};
