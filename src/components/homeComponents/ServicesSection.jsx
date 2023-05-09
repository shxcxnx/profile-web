export const Services = ({ title }) => {
    return (
        <section id='services' className='w-11/12 m-auto mb-14 '>
            <h1 className=' text-2xl text-center font-bold md:text-5xl'>{title}</h1>
            <div className='w-full h-screen gap-6 grid grid-cols-1 md:grid-cols-3 '>
                <article className='flex flex-col justify-center items-center '>
                    <h1 className='text-5xl mb-6'>🖌️</h1>
                    <h2 className='mb-6 text-md font-semibold md:text-xl'>Web Design</h2>
                    <p className='text-md text-center md:text-xl'>A good taste for the UI design, merged with a nice kwonledge of UX.</p>
                </article>
                <article className='flex flex-col justify-center items-center   '>
                    <h1 className='text-5xl mb-6'>💻</h1>
                    <h2 className='mb-6 text-md font-semibold md:text-xl'>Web Development</h2>
                    <p className='text-md text-center md:text-xl'>Developing projects for create products or services of quality to all necesities.</p>
                </article>
                <article className='flex flex-col justify-center items-center   '>
                    <h1 className='text-5xl mb-6'>📱</h1>
                    <h2 className='mb-6 text-md  font-semibold md:text-xl'>Responsive Design</h2>
                    <p className='text-md text-center md:text-xl'>Adapting ideas for use them anywhere, anytime, just keep thinking.</p>
                </article>
                {/* 
                <article className='flex flex-col justify-center items-center text-center '>
                    <h1 className='text-5xl mb-6'>🔌</h1>
                    <h2 className='mb-6 text-md font-semibold md:text-xl'>Networking</h2>
                    <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article className='flex flex-col justify-center items-center text-center '>
                    <h1 className='text-5xl mb-6'>👨🏻‍💻</h1>
                    <h2 className='mb-6 text-md font-semibold md:text-xl'>Cibersecurity</h2>
                    <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article className='flex flex-col justify-center items-center text-center '>
                    <h1 className='text-5xl mb-6'>🎮</h1>
                    <h2 className='mb-6 text-md font-semibold md:text-xl'>Videogames</h2>
                    <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </article> */}
            </div>
        </section>
    );
};
