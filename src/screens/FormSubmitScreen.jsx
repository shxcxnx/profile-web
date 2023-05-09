import { Link } from 'react-router-dom';

export const FormSubmitScreen = () => {
    return (
        <section className='w-full h-screen grid place-content-center'>
            <h1 className='font-bold text-2xl md:text-6xl text-center'>Thanks!</h1>
            <h2 className='font-bold text-md md:text-xl text-center'>I will enjoy work with you ✌🏻</h2>
            <p className='font-bold text-sm md:text-lg text-center'>
                Return to the{' '}
                <Link to='/home/' className='text-red-500 hover:text-red-700'>
                    Website
                </Link>{' '}
            </p>
        </section>
    );
};
