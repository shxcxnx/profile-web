import reactLogo from '/src/assets/react.svg';

export const About = ({ title }) => {
    return (
        <section id='about' className='w-11/12 m-auto mb-14'>
            <h1 className='mb-6 font-bold text-2xl md:text-5xl'>{title}</h1>
            <div className=' h-auto grid grid-cols-1 gap-8  md:grid-cols-2 '>
                <article className='flex flex-col justify-center'>
                    <h2 className='mb-6 text-lg font-semibold md:text-xl'>Hello, I am Raul Calleros</h2>
                    <p className='text-lg md:text-xl text-justify'>
                        A computer systems engineer and front-end developer. From Durango, Mx, a beautiful and quiet city. Interested in technology since was a little kid, starting with a Nintendo 64 until now. Having a great passion for the quality and design.
                    </p>

                    <h2 className='mt-6 mb-6 text-lg md:text-xl font-semibold'>My Skills</h2>

                    <p className='mb-3 text-lg md:text-xl'>HTML</p>
                    <div className='overflow-hidden bg-gray-300 rounded-full'>
                        <div className=' w-9/12 h-2 bg-blue-500 rounded-full'></div>
                    </div>

                    <p className=' mt-3 mb-3 text-lg md:text-xl'>CSS (Tailwind)</p>
                    <div className='overflow-hidden bg-gray-300 rounded-full'>
                        <div className=' w-9/12 h-2 bg-blue-500 rounded-full'></div>
                    </div>

                    <p className=' mt-3 mb-3 text-lg md:text-xl'>JS</p>
                    <div className='overflow-hidden bg-gray-300 rounded-full'>
                        <div className=' w-1/2 h-2 bg-blue-500 rounded-full'></div>
                    </div>

                    <p className=' mt-3 mb-3 text-lg md:text-xl'>REACT</p>
                    <div className='overflow-hidden bg-gray-300 rounded-full'>
                        <div className=' w-1/4 h-2 bg-blue-500 rounded-full'></div>
                    </div>
                </article>

                <article className=' flex justify-center items-center'>
                    <a href='https://reactjs.org' target='_blank'>
                        <img src={reactLogo} className='h-60 md:h-96' alt='React logo' />
                    </a>
                </article>
            </div>
        </section>
    );
};
