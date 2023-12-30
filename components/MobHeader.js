'use client'


import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';





export default function MobHeader() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    }

    // Close the dropdown when clicking outside of it
    const closeDropdownOnOutsideClick = (e) => {
        if (menuOpen && !e.target.closest('.bg-ourblack')) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // Attach the event listener when the component mounts
        document.addEventListener('click', closeDropdownOnOutsideClick);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', closeDropdownOnOutsideClick);
        };
    }, [menuOpen]);


    return (
        <div className=''>

            <div className='bg-black py-3 border-b-white border-b-2'>
                <div className='w-[80%]  mx-auto flex items-center justify-between'>
                    <Image
                        src={'/logo.png'}
                        width={30}
                        height={100}
                    />

                    <button className='text-white' onClick={handleMenuToggle}>
                        <MenuIcon />
                    </button>


                </div>

                {
                    menuOpen === true && (
                        <div>
                            <div className='bg-ourblack w-full pb-6 absolute text-white transition-all duration-600'>

                                <div className='w-[80%] mx-auto flex flex-col '>
                                    <Link href={'/'}>
                                        <button onClick={handleMenuToggle} className='text-sm border-b w-full flex justify-start py-2'>
                                            Home
                                        </button>
                                    </Link>

                                    <Link href={'/about'}>
                                        <button onClick={handleMenuToggle} className='text-sm py-2 border-b w-full flex justify-start'>
                                            About Us
                                        </button>
                                    </Link>

                                    <Link href={'/projects'}>
                                        <button onClick={handleMenuToggle} className='text-sm py-2 border-b w-full flex justify-start'>
                                            Our Projects
                                        </button>
                                    </Link>


                                    <Link href={'/team'}>
                                        <button onClick={handleMenuToggle} className='text-sm py-2 border-b w-full flex justify-start'>
                                            The Team
                                        </button>
                                    </Link>
                                    <Link href={'/contact'}>
                                        <button onClick={handleMenuToggle} className='text-sm py-2 border-b w-full flex justify-start'>
                                            Contact
                                        </button>
                                    </Link>

                                    <Link href={'/donate'}>
                                        <button onClick={handleMenuToggle} className='text-sm py-2 border-b w-full flex justify-start'>
                                            Donate
                                        </button>
                                    </Link>
                                </div>


                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}
