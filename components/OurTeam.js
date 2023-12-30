import Image from 'next/image'
import React from 'react'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import Link from 'next/link';



export default function OurTeam() {
    return (
        <div className='bg-[#F1EEEC] py-16 w-full'>
            <div className='w-[70%] mx-auto'>
                <div>
                    <p className='text-ourpink my-1 text-center'>Our Team</p>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-center text-3xl'>Meet Our Volunteers</h1>

                    {/* people */}
                    <div className='flex flex-wrap md:flex items-cente gap-8 my-6 justify-center'>
                        {/* queen */}
                        <div className='w-full md:w-[23%]'>
                            <div className=' teamone h-72 rounded-xl'> </div>
                            <p className='font-semibold mt-2 w-full text-center '>QUEEN TUNG-TEIYA DAHAMANI</p>
                            <p className='text-[#727272] text-center'>Founder & Executive Director</p>
                        </div>


                        {/* frank */}
                        <div className='w-full md:w-[23%]'>
                            <div className=' teamtwo rounded-xl h-72'> </div>
                            <p className='font-semibold mt-2 w-full text-center '>FRANK YOBAL</p>
                            <p className='text-[#727272] text-center'>Administrator</p>
                        </div>
                        {/* bruce */}
                        <div className='w-full md:w-[23%]'>
                            <div className=' teamthree rounded-xl h-72'> </div>
                            <p className='font-semibold mt-2 w-full text-center '>BRUCE KAMBOTUU</p>
                            <p className='text-[#727272] text-center'>PA & Co-Administrator</p>
                        </div>



                    </div>

                    <div className='flex justify-center mt-4 mb-8'>
                        <Link href={'/team'}>
                            <button className='buttonprimary'>
                                Meet The Team
                            </button>
                        </Link>
                    </div>

                    <div className='bg-[#77D7D3] w-full py-4 px-8 flex justify-center'>
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
