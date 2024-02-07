import React from 'react';

const ServicesSection = () => {
    return (
        <>
            <section className='container m-auto flex flex-col justify-center w-full'>
                <h1 className='font-bold text-5xl mb-10'>Services</h1>
                <article className='grid grid-cols-3'>
                    <article>
                        <h1 className='mb-6 text-center text-7xl'>⚛️</h1>
                        <h2 className='font-bold text-xl'>Lorem</h2>
                        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </article>
                    <article>
                        <h1 className='mb-6 text-center text-7xl'>⚛️</h1>
                        <h2 className='font-bold text-xl'>Lorem</h2>
                        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </article>
                    <article>
                        <h1 className='mb-6 text-center text-7xl'>⚛️</h1>
                        <h2 className='font-bold text-xl'>Lorem</h2>
                        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </article>
                </article>
            </section>
        </>
    );
};

export default ServicesSection;
