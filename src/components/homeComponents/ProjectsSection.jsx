export const Projects = ({ title }) => {
    return (
        <section id='projects' className='w-11/12 m-auto mb-14'>
            <h1 className='mb-6 text-2xl text-right font-bold md:text-5xl'>{title}</h1>
            <div className='w-full h-auto gap-6 grid grid-cols-1 md:grid-cols-3'>
                <a href='https://storied-daffodil-b1bdd3.netlify.app' target={'blank'} className='h-auto'>
                    <article className='flex flex-col justify-center items-center text-center hover:shadow-lg'>
                        <img src='/img/web-citas.png' alt='' className='w-full h-[200px] rounded-lg object-cover' />
                    </article>
                </a>
                <a href='/' className='h-auto'>
                    <article className='flex flex-col justify-center items-center text-center hover:shadow-lg '>
                        <img src='/img/12.png' alt='' className='w-full h-[200px] rounded-lg object-cover' />
                    </article>
                </a>
                <a href='/' className='h-auto'>
                    <article className='flex flex-col justify-center items-center text-center hover:shadow-lg '>
                        <img src='/img/12.png' alt='' className='w-full h-[200px] rounded-lg object-cover' />
                    </article>
                </a>
                <a href='/' className='hidden md:block h-auto'>
                    <article className=' flex-col justify-center items-center text-center hover:shadow-lg md:flex '>
                        <img src='/img/12.png' alt='' className='w-full h-[200px] rounded-lg object-cover' />
                    </article>
                </a>
                <a href='/' className='hidden md:block h-auto'>
                    <article className=' flex-col justify-center items-center text-center hover:shadow-lg md:flex '>
                        <img src='/img/12.png' alt='' className='w-full h-[200px] rounded-lg object-cover' />
                    </article>
                </a>
                <a href='/' className='hidden md:block h-auto'>
                    <article className='flex-col justify-center items-center text-center hover:shadow-lg md:flex'>
                        <img src='/img/12.png' alt='' className='w-full h-[200px] rounded-lg object-cover' />
                    </article>
                </a>
            </div>
        </section>
    );
};
