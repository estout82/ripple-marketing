
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Index() {
    const [showForm, setShowForm] = useState(false);

    function handleKeepMeUpdatedClick() {
        setShowForm(true);
    }

    return (
        <div>
            <Head>
                <title>Ripple</title>
                <meta name="description" content="A Church Management System That Works" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" /> 
            </Head>

            <header className='h-16 w-full py-5 md:py-10 px-5'>
                <div className='max-w-7xl flex justify-between m-auto items-center'>
                    <p className='text-gray-700 font-opensans font-bold'>Ripple</p>
                    <p className='text-gray-700 font-opensans font-bold'></p>
                    <p className='text-white font-bold bg-blue-600 px-5 py-2 rounded-lg transition transform duration-100 cursor-pointer hover:bg-blue-400 hover:scale-105'>Sign in</p>
                </div>
            </header>

            <main>
                <section className='flex justify-center items-center flex-col p-5'>
                    <h1 className='font-merriweather font-bold text-5xl md:text-7xl max-w-7xl text-center text-gray-700 mt-16'>Church Management Software That Works.</h1>
                    <p className='text-gray-700 text-lg mt-7 max-w-4xl'>
                        We think church software should make ministry easier, not harder. You shouln't have
                        to hire engineers to create sign-up forms. Stop sinking with your current ChMS and
                        Breathe easy knowing we'll take care of the details.
                    </p>
                    <div className='flex justify-center mt-5'>
                        {
                            showForm ?
                            <p className='text-gray-700 text-lg font-bold'>Coming Soon</p>
                            : <button onClick={ handleKeepMeUpdatedClick } className='text-white font-bold bg-blue-600 px-5 py-2 rounded-lg transition transform duration-100 cursor-pointer hover:bg-blue-400 hover:scale-105'>Keep Me Updated</button>
                        }
                    </div>
                </section>
            </main>

            <footer>
            
            </footer>
        </div>
    )
}
