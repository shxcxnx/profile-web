import { useState } from 'react';

import { Navigate } from 'react-router-dom';

export const Contact = ({ title }) => {
    /* const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState(false); */
    const [goToSuccess, setGoToSuccess] = useState(false);

    /* const handleSubmit = (e) => {
        e.preventDefault();

        if ([name, email, subject, message].includes('')) {
            setError(true);

            return;
        }
        setError(false);
    }; */
    if (goToSuccess) {
        return <Navigate to='/success/' />;
    }

    return (
        <section id='contact' className='w-11/12 m-auto h-auto mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 '>
            <article className=''>
                <h1 className='mb-6 text-2xl text-start font-bold md:text-5xl'>{title}</h1>

                <p className='text-lg md:text-xl'>Send me a message by e-mail or through any of my social networks to get in touch, talk about your problems and work together to get a solutions. I will be very happy to hear new ideas and great projects. Peace. </p>
                <div className='flex justify-end gap-4 mt-6'>
                    <a href='https://www.instagram.com/raulcalleh/' target={'_blank'} className='text-black transition hover:text-red-500'>
                        <span className='sr-only'>Instagram</span>
                        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                            <path
                                fillRule='evenodd'
                                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </a>

                    <a href='https://www.linkedin.com/in/raul-c-7238451b8' target={'_blank'} className='text-black transition hover:text-red-500'>
                        <span className='sr-only'>GitHub</span>
                        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 30 30 ' aria-hidden='true'>
                            <path d='M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z'></path>
                        </svg>
                    </a>

                    <a href='https://github.com/erreceashe' target={'_blank'} className='text-black transition hover:text-red-500'>
                        <span className='sr-only'>GitHub</span>
                        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                            <path
                                fillRule='evenodd'
                                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </a>
                </div>
            </article>

            <form
                /* action='https://formsubmit.co/5cf1b4c474b06f5287bc536932c30c76' */
                onSubmit={() => {
                    setGoToSuccess(true);
                }}
                name='contact'
                method='POST'
                className='w-full m-auto bg-blue-300 p-6 rounded-md md:w-4/5'
            >
                {/* {error && (
                    <div className='bg-red-500 w-full p-3 mb-2 text-white text-center rounded-md uppercase'>
                        <p className='text-lg font-bold'>Ningun campo debe de estar vacio</p>
                    </div>
                )} */}

                <div className='mb-5'>
                    <label htmlFor='name' className='block font-bold font-md md:text-xl'>
                        Name
                    </label>

                    <input id='name' name='name' type='text' placeholder='' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-md md:text-xl' required /* onChange={(e) => setName(e.target.value)} */ />
                </div>
                <div className='mb-5'>
                    <label htmlFor='email' className='block font-bold font-md md:text-xl'>
                        Email
                    </label>

                    <input id='email' name='email' type='email' placeholder='' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-md md:text-xl' required /* onChange={(e) => setEmail(e.target.value)} */ />
                </div>
                <div className='mb-5'>
                    <label htmlFor='subject' className='block font-bold font-md md:text-xl'>
                        Subject
                    </label>

                    <input id='subject' name='subject' type='text' placeholder='' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-md md:text-xl' required /* onChange={(e) => setSubject(e.target.value)} */ />
                </div>
                <div className='mb-5'>
                    <label htmlFor='message' className='block font-bold font-md md:text-xl'>
                        Message
                    </label>

                    <textarea id='message' name='message' type='text' placeholder='' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-md md:text-xl' required /* onChange={(e) => setMessage(e.target.value)} */ />
                </div>
                <button type='submit' className='bg-red-500 w-full p-3 text-white uppercase rounded-lg font-bold hover:bg-red-700 cursor-pointer transition-all'>
                    Let's Work
                </button>
            </form>
        </section>
    );
};
