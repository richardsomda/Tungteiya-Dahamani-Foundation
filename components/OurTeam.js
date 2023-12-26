import Image from 'next/image'
import React from 'react'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';


export default function OurTeam() {
    return (
        <div className='bg-[#F1EEEC] py-16 w-full'>
            <div className='w-[60%] mx-auto'>
                <div>
                    <p className='text-ourpink my-1 text-center'>Our Team</p>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-center text-3xl'>Meet Our Volunteers</h1>

                    {/* people */}
                    <div className='flex items-center gap-8 my-6 justify-center'>
                        <div className='w-[23%]'>
                            <div className=' teamone h-72'> </div>
                            <p className='font-semibold my-3 text-center'>Bruce Kambotuu</p>
                        </div>
                        <div className='w-[23%]'>
                            <div className=' teamone h-72'> </div>
                            <p className='font-semibold my-3 text-center'>Bruce Kambotuu</p>
                        </div>
                        <div className='w-[23%]'>
                            <div className=' teamone h-72'> </div>
                            <p className='font-semibold my-3 text-center'>Bruce Kambotuu</p>
                        </div>
                        <div className='w-[23%]'>
                            <div className=' teamone h-72'> </div>
                            <p className='font-semibold my-3 text-center'>Bruce Kambotuu</p>
                        </div>

                    </div>


                    <div className='bg-[#77D7D3] py-4 px-8 flex justify-center'>
                        <div className='items-center flex flex-col'>
                            <div className='w-14 h-14 rounded-full flex items-center justify-center  bg-[#2E4049]'>
                                <VolunteerActivismOutlinedIcon className='text-white' />
                            </div>

                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold mt-2 text-center text-[#2E4049] text-2xl'>Become A Volunteer</h1>
                            <p className='text-center'>Centuries but also the leap  electtypesetting, remaining </p>
                            <button className='bg-[#2E4049] text-white px-6 py-3 my-4 rounded-full hover:bg-opacity-80 active:bg-opacity-100'>Join Us Today</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
