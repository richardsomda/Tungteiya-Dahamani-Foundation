import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Footer() {
    return (
        <div className='w-full bg-[#384C56] py-12 flex justify-center'>


            <div>
                <p className='text-sm text-white text-center'>© The Tung-Teiya Dahamani Foundation</p>
                <p className='text-sm font-light text-center text-white opacity-50 my-4'>Powered by Skytech Ltd</p>
            </div>
            {/* <div className='w-[90] md:w-[60%] mx-auto justifu-between md:px-12 py-32 flex flex-wrap md:flex'>
                <div className='w-[30%] mx-auto'>
                    <Image
                        src={'/logo.png'}
                        width={100}
                        height={100}
                    />
                </div>

                <div className='w-[75%] mx-auto'>
                    <div className='border-t-w order-white py-3'>

                        <div className='flex items-center text-sm flex-wrap md:flex gap-4'>
                            <Link href={'/'}>
                                <button className='my- text-white'>
                                    Home
                                </button>
                            </Link>

                            <Link href={'/about'}>
                                <button className='my- text-white'>
                                    About Us
                                </button>
                            </Link>
                            <Link href={'/projects'}>
                                <button className='my- text-white'>
                                    Our Causes
                                </button>
                            </Link>
                            <Link href={'/team'}>
                                <button className='my- text-white'>
                                    Team
                                </button>
                            </Link>
                            <Link href={'/contact'}>
                                <button className='my- text-white'>
                                    Team
                                </button>
                            </Link>
                            <Link href={'/contact'}>
                                <button className='my- text-white'>
                                    Donate
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div> */}

        </div >
    )
}
