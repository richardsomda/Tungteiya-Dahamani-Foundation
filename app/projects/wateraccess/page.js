'use client'


import React, { useRef } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Image from 'next/image';
import ProjectGalleryComponent from '@/components/ProjectGalleryComponent';
import Link from 'next/link';
import DonateGeneral from '@/components/DonateGeneral';



export default function page() {


    const donateSectionRef = useRef(null);
    const gallerySectionRef = useRef(null);

    const scrollToDonate = () => {
        donateSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToGallery = () => {
        if (gallerySectionRef.current) {
            gallerySectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className='w-full waterBackground h-60 md:h-[600px]'>
                <div className=''></div>
                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>Our Work</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 text-white md:text-7xl text-4xl'>Water Access Project <br /> - Lungsi Fong

                    </h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>Water Access Project

                        </h1>
                        {/* <p className='my-1 text-ourpin text-base'>The Kaya Lahakani Project embodies the foundation's ethos of sustainable development and empowerment, contributing to a world where every individual, regardless of their background, has the opportunity to lead a dignified life free from the hardships of poverty.</p> */}

                        <div onClick={scrollToDonate} className='my-2 flex gap-4 flex-wrap md:flex'>
                            <button className='buttonprimary2 text-[10px] md:text-xs'>
                                Donate
                            </button>

                            <button onClick={scrollToGallery} className='border-2 hover:bg-gray-200 text-[10px] md:text-xs rounded-full px-6 py-3 border-ourblack'>
                                View Project Gallery
                            </button>
                        </div>
                    </div>



                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Overview</h1>
                        <p className='my-1 text-[#727272] text-base'>The commissioning of the borehole at Lungsi Fong, in collaboration with Universal Islamic and Cultural Trust, is a transformative initiative aimed at addressing a critical need within the Northern sector of Ghana. This project is crucial as it ensures improved access to clean water, thereby promoting community health, sanitation, and overall well-being.</p>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Key Objectives


                        </h1>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Improved Access to Clean Water
                                </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>The primary goal of the project is to provide the community of Lungsi Fong with a sustainable and reliable source of clean water, eliminating the challenges associated with limited access. </p>


                        </div>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Community Health and Sanitation
                                    : </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>Access to clean water is fundamental to maintaining good health and hygiene. The borehole project contributes to enhancing community health and sanitation practices.</p>


                        </div>




                    </div>


                    <div className='my-8'>




                        {/* impact */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Collaboration with Universal Islamic and Cultural Trust
                            </h1>

                            <p className='my-1 text-[#727272] text-base'>The collaboration with Universal Islamic and Cultural Trust underscores our commitment to forging partnerships that amplify the impact of our projects. Together, we aim to make a positive and lasting difference in the lives of the residents of Lungsi Fong.
                            </p>

                        </div>

                        {/* impact */}
                        <div className='my-8'>


                            <p className='my-1 text-[#727272] text-base'>The commissioning of the borehole brings about significant positive changes:


                            </p>

                            <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Community Health </span> Residents now have access to clean and safe water, reducing waterborne diseases and improving overall health.
                            </p>
                            <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Sanitation: </span> The project contributes to better sanitation practices within the community, promoting a healthier living environment.
                            </p>
                            <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Quality of Life: </span> Reliable access to clean water enhances the overall quality of life for the residents of Lungsi Fong.
                            </p>

                        </div>


                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Future Initiatives

                            </h1>

                            <p className='my-1 text-[#727272] text-base'>As we celebrate the success of the Water Access Project in Lungsi Fong, the Tung Teiya Dahamani Foundation remains committed to exploring new opportunities and addressing the essential needs of communities in the Northern sector of Ghana.
                            </p>

                        </div>





                        {/*conclusion*/}
                        {/* <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Gratitude


                            </h1>
                            <p className='my-1 text-ourpin text-base'>The Tung Teiya Dahamani Foundation expresses sincere gratitude to all participants, volunteers, and community members who actively contributed to the success of the cleanup exercise. Your dedication to creating a positive impact is commendable.
                            </p>
                        </div> */}


                        <div className='flex gap-6 flex-wrap md:flex'>
                            <button className='buttonprimary2'>
                                Join Our Organisation
                            </button>
                            <button onClick={scrollToDonate} className='border-2 hover:bg-gray-200 border-ourblack rounded-full px-6 py-3'>
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-6' ref={donateSectionRef}>
                <DonateGeneral />
            </div>


            <div className='w-full md:w-[80%] mx-auto my-12'>

                <div ref={gallerySectionRef}
                    className='w-[80%] md:w-[70%] mx-auto rounded-3xl'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold my-6 text-[20px]'>Project Gallery</h1>

                    <ProjectGalleryComponent
                        projectFolder={'waterphotos'}
                        numImages={3}
                        className='rounded-3xl scale-75'
                        imagesPerPage={1}

                    />
                </div>
            </div>
        </div >
    )
}
