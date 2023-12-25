'use client'

import Image from 'next/image'
import React, { useState } from 'react'


export default function HeaderTwo() {

    const [menu, setMenu] = useState('Home');

    return (
        <div className='w-[60%] mx-auto py-4 flex justify-between'>
            <Image
                src={'/logo.png'}
                width={60}
                height={40}
            />

            <div className='px-2 flex items-center'>

                {/* Home */}
                <div className='flex items-center'>
                    <button onClick={() => setMenu('Home')} className={` ${menu === 'Home' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                        Home
                    </button>
                    <p className='divider'>|</p>
                </div>


                {/* About Us */}
                <div className='flex items-center '>
                    <button onClick={() => setMenu('about')} className={` ${menu === 'about' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                        About Us
                    </button>
                    <p className='divider'>|</p>
                </div>


                {/* Pages */}
                <div className='flex items-center'>
                    <button onClick={() => setMenu('pages')} className={` ${menu === 'pages' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                        Pages
                    </button>
                    <p className='divider'>|</p>
                </div>


                {/* Contact */}
                <div className='flex items-center'>
                    <button onClick={() => setMenu('contact')} className={` ${menu === 'contact' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                        Contact
                    </button>
                    <p className='divider'>|</p>
                </div>


                {/* Contact */}
                <div className='flex items-center'>
                    <button className='buttonprimary'>
                        Donate
                    </button>
                </div>




            </div>
        </div>
    )
}
