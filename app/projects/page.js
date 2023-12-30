'use client'


import Image from 'next/image'
import React, { useRef } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';


export default function page() {


    return (
        <>
            <div className='w-full projectsBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-3'>Undertaken Projects</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-2 text-white md:text-7xl text-4xl'>Our Causes</h1>
                </div>

            </div>

            {/*  projects  */}
            <div className='w-full  bg-[#F1EEEC] '>
                <div className="w-[80%]  md:w-[70%] mx-auto bg-blue-20  py-12 md:py-16 ">
                    <div className='flex flex-wrap lg:flex justify-betwee gap-4'>

                        {/* kayalahakani */}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>

                            <div className='h-48 proImage1'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>Kaya Lahakani Project</h1>
                                <p className='my-3 text-[#727272] text-xs'>Designed to address the specific needs of young girls in underprivileged communities, particularly within the Northern sector of Ghana.</p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-1 items-center'>
                                    <CheckCircleOutlineIcon className='text-[14px]' />
                                    <p className='text-[12px]'>No Poverty</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Gender Equality</p>
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




                        {/* Breast Screening Exercise */}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>


                            <div className='h-48 proImage2'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>Breast Screening Exercise</h1>
                                <p className='my-3 text-[#727272] text-xs'>A free breast
                                    screening exercise for kayayo women in Madina, Accra, contributing to early
                                    detection and awareness.
                                </p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'> Good Health & Wellbeing</p>
                                </div>

                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>
                                <Link href={'/projects/breastscreeningexercise'}>
                                    <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                        View Project
                                    </button>
                                </Link>

                                <button className='px-3 rounded-full py-2 border-ourblack border mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>
                        </div>


                        {/* menstrual day */}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>


                            <div className='h-48 proImage3'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>Menstrual Health Support</h1>
                                <p className='my-3 text-[#727272] text-xs'>celebrated
                                    World Menstrual Health Month with the Zogbeli Block C school in Ghana, promoting menstrual health awareness.
                                </p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Good Health</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Gender Equality</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Quality Education</p>
                                </div>
                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>
                                <Link href={'/projects/menstrualhealthsupport'}>
                                    <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                        View Project
                                    </button>
                                </Link>

                                <button className='px-3 rounded-full py-2 border-ourblack border mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>
                        </div>

                        {/* reproductive health */}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>


                            <div className='h-48 proImage3'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>Reproductive Health Symposium</h1>
                                <p className='my-3 text-[#727272] text-xs'>A reproductive health symposium was
                                    organized for students of the UDS School of Business and Tamale Technical
                                    University.
                                </p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Good Health</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Gender Equality</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Quality Education</p>
                                </div>
                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>
                                <Link href={'/projects/reproductivehealthsymposium'}>
                                    <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                        View Project
                                    </button>
                                </Link>

                                <button className='px-3 rounded-full py-2 border-ourblack border mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>
                        </div>

                        {/* Philadelphia donation*/}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>


                            <div className='h-48 proImage4'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>Donation to FG Philadelphia Pastures</h1>
                                <p className='my-3 text-[#727272] text-xs'>the Tung Teiya Dahamani Foundation carried out a meaningful initiative by donating 50 bags of rice along with essential provisions.
                                </p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>No Poverty</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Zero Hunger</p>
                                </div>
                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>
                                <Link href={'/projects/fgphiladelphiadonation'}>
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
                                    <p className='text-[12px]'>Zero Hunger</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Quality Education</p>
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

                        {/* cleanup exercise*/}
                        <div className='w-full md:w-[30%] cursor-pointer my-3   bg-white'>


                            <div className='h-48 proImage6'></div>

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>
                                    Community clean-up exercise                                 </h1>
                                <p className='my-3 text-[#727272] text-xs'>contributing to environmental
                                    sustainability and community well-being.


                                </p>


                            </div>


                            <div className='flex w-[80%] mx-auto gap-2 flex-wrap md:flex '>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Good Health & Well being</p>
                                </div>

                            </div>




                            <div className='flex gap-3 items-center w-[80%] my-3 mx-auto'>
                                <Link href={'/projects/cleanupexercise'}>
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
                                    <p className='text-[12px]'>Good Health</p>
                                </div>
                                <div className='text-ourpink bg-[#F2F2F2] rounded-full py-2 px-3 flex gap-2 items-center'>
                                    <CheckCircleOutlineIcon className='text-sm' />
                                    <p className='text-[12px]'>Clean Water</p>
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



        </>
    )
}
