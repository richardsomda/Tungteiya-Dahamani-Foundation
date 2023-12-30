'use client'


import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import Image from 'next/image';
import { Facebook, Instagram } from '@mui/icons-material';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import Link from 'next/link';





export default function HeaderOne() {
    return (
        <div>

            <div className='bg-ourblack  flex justify-center   '>



                <div className='md:w-[95%] lg:w-[70%]  mx-auto flex justify-between'>

                    <div className=' bg-red-10  md:w-[80%] lg:w-full font-thin flex items-center justify-betwee text-ouryellow'>

                        <div className='flex items-center gap-2 gap- justify-center w-full'>
                            <div className='bg-ouryellow h-4 w-4 flex items-center  justify-center rounded-full'>
                                <CallOutlinedIcon className='text-xs text-ourblack' />
                            </div>

                            <p className='text-xs'> 0247105639  |  0247105639</p>
                        </div>



                        <div className='flex items-center gap-2 gap- justify-center w-full'>
                            <div className='bg-ouryellow h-4 w-4 flex items-center  justify-center rounded-full'>
                                <EmailOutlinedIcon className='text-xs text-ourblack' />
                            </div>

                            <p className='text-xs'> info@tungteiyadahamanifoundation.org</p>
                        </div>



                        <div className='flex items-center gap-2 gap- justify-center w-full'>
                            <div className='bg-ouryellow h-4 w-4 flex items-center  justify-center rounded-full'>
                                <BusinessOutlinedIcon className='text-xs text-ourblack' />
                            </div>

                            <p className='text-xs'> Jisoplaza, Jisonayili, Tamale N/R</p>
                        </div>

                    </div>

                    <div className='bg-ouryellow  py-3 px-6 flex gap-4 w-'>

                        <Link
                            target="_blank"
                            href={'https://www.instagram.com/thetungteiyadahamanifoundation/'}>
                            <button className=''>
                                <Instagram />
                            </button>
                        </Link>


                        <Link target='blank'
                            href={'https://web.facebook.com/profile.php?id=100092748677797'}>
                            <button>
                                <FacebookOutlined />
                            </button>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    )
}
