'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'



export default function HeaderTwo() {

    const [menu, setMenu] = useState('Home');

    return (
        <div className='md:w-[90%] lg:w-[70%] mx-auto py-2 flex items-center justify-between'>

            <Link href={'/'}>
                <button>
                    <Image
                        src={'/logo.png'}
                        width={60}
                        height={40}
                    />
                </button>
            </Link>

            <div className='px-2 flex items-center'>

                {/* Home */}
                <div className='flex items-center'>
                    <Link href={'/'}>
                        <button onClick={() => setMenu('Home')} className={` ${menu === 'Home' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                            Home
                        </button>
                    </Link>
                    <p className='divider'>|</p>
                </div>


                {/* About Us */}
                <div className='flex items-center '>
                    <Link href={'/about'}>
                        <button onClick={() => setMenu('about')} className={` ${menu === 'about' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                            About Us
                        </button>
                    </Link>
                    <p className='divider'>|</p>
                </div>


                {/* Projects */}
                <div className='flex items-center'>
                    <Link href={'/projects'}>
                        <button onClick={() => setMenu('projects')} className={` ${menu === 'projects' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                            Projects
                        </button>
                    </Link>
                    <p className='divider'>|</p>
                </div>
                {/* Projects */}
                <div className='flex items-center'>
                    <Link href={'/team'}>
                        <button onClick={() => setMenu('team')} className={` ${menu === 'team' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                            Team
                        </button>
                    </Link>
                    <p className='divider'>|</p>
                </div>


                {/* Contact */}
                <div className='flex items-center'>
                    <Link href={'/contact'}>
                        <button onClick={() => setMenu('contact')} className={` ${menu === 'contact' ? 'font-bold px-4 mx-1 py-3' : 'menubutton'}`}>
                            Contact
                        </button>
                    </Link>
                    <p className='divider'>|</p>
                </div>







            </div>


            <div className='flex items-center'>
                {/* Contact */}
                <div className='flex items-center'>
                    <Link href={'/donate'}>
                        <button className='buttonprimary'>
                            Donate
                        </button>
                    </Link>
                </div>
                {/* <button className='text-sm px-4 mx-2     py-3 hover:bg-gray-100 active:bg-black active:text-white rounded-full border-ourblack border-2 border-opacity-o'>
                    Login
                </button> */}
            </div>
        </div>
    )
}
