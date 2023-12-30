import Image from 'next/image'
import React from 'react'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';



export default function OurCauses() {
    return (
        <div className='bg-ouryellow py-12'>

            <div className='w-[65%]   mx-auto'>
                <div className=' flex flex-wrap md:flex justify-between items-center'>
                    <div className='w-[85%] md:w-[70%]'>
                        <p className=' my-1'>Our Causes</p>

                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold md:w-[80%] w-full text-2xl md:text-3xl'>
                            Transforming Little Donations <br /> into Big Impacts
                        </h1>

                    </div>

                    <Link href={'/projects'}>
                        <button className='buttonprimary2 text-xs my-6'>
                            More Causes
                        </button>
                    </Link>

                </div>
            </div>


            {/* projects */}
            <div className='flex items-center justify-center'>
                <div className="w-[80%]  md:w-[70%] mx-auto bg-blue-20  py-12 md:py-16 ">
                    <div className='flex flex-wrap lg:flex justify-center gap-4'>

                        {/* kayalahakani */}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>

                            <div className='h-48 proImage1'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>Kaya Lahakani Project</h1>
                                <p className='my-3 text-[#727272] text-xs'>Designed to address the specific needs of young girls in underprivileged communities, particularly within the Northern sector of Ghana.</p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-xs'>No Poverty</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-xs'>Gender Equality</p>
                                </div>
                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>
                                <Link href={'/projects/kayalahakani'}>
                                    <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                        View Project
                                    </button>
                                </Link>

                                <button className='px-3 rounded-full py-2 border-ourblack border mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>
                        </div>















                        {/* special needs donation*/}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>


                            <div className='h-48 proImage5'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>
                                    Supporting Special Needs Students
                                </h1>
                                <p className='my-3 text-[#727272] text-xs'>food items were donated to special needs students at the
                                    Dakpema B/A primary school in Tamale, addressing hunger challenges
                                    among vulnerable groups.

                                </p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-xs'>Zero Hunger</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-xs'>Quality Education</p>
                                </div>

                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>

                                <Link href={'/projects/specialneedssupport'}>
                                    <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                        View Project
                                    </button>
                                </Link>

                                <button className='px-3 rounded-full py-2 border-ourblack border mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>

                            </div>
                        </div>





                        {/* water access*/}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>


                            <div className='h-48 proImage7'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>
                                    Water Access Project - Lungsi Fong
                                </h1>
                                <p className='my-3 text-[#727272] text-xs'> This project is crucial as it ensures improved access to clean water, thereby promoting community health, sanitation, and overall well-being.


                                </p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-xs'>Good Health</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-xs'>Clean Water</p>
                                </div>
                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>
                                <Link href={'/projects/wateraccess'}>
                                    <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                        View Project
                                    </button>
                                </Link>

                                <button className='px-3 rounded-full py-2 border-ourblack border mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
