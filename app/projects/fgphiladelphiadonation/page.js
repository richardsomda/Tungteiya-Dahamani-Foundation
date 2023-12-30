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
            <div className='w-full fgBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>Our Work</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-b mt-1 text-white md:text-7xl text-4xl'>Donation of 50 Bags <br /> of Rice and Provisions
                    </h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>Donation of 50 Bags of Rice and Provisions
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
                        <p className='my-1 text-[#727272] text-base'>In a profound display of compassion, the Tung Teiya Dahamani Foundation carried out a meaningful initiative by donating 50 bags of rice along with essential provisions. This heartfelt gesture was directed towards the widowed and aged women residing at FG Philadelphia Pastures. Recognizing the economic hardships faced by this vulnerable demographic, our aim was to ensure they have access to nutritious food, thereby providing sustenance and support.</p>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Key Key Objectives


                        </h1>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Alleviating Economic Hardships
                                    : </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>The primary objective of this initiative was to extend a helping hand to those experiencing economic challenges, particularly widowed and aged women. By providing essential food items, we aimed to alleviate their financial burden and contribute to their well-being.
                            </p>


                        </div>

                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Ensuring Access to Nutritious Food
                                </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>Access to nutritious food is a fundamental right, and our donation sought to address this aspect for the beneficiaries. The provision of 50 bags of rice, coupled with essential provisions, was a step towards ensuring a balanced and healthy diet for the widowed and aged women at FG Philadelphia Pastures.
                            </p>


                        </div>



                    </div>


                    <div className='my-8'>




                        {/* impact */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Impact</h1>

                            <p className='my-1 text-[#727272] text-base'>The impact of this initiative goes beyond the tangible items donated. It symbolizes solidarity, care, and a commitment to supporting those in need. The provision of nutritious food not only addresses immediate concerns but also contributes to the overall health and resilience of the beneficiaries.

                            </p>


                        </div>





                        {/*conclusion*/}
                        <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Gratitude


                            </h1>
                            <p className='my-1 text-ourpin text-base'>We express our sincere gratitude to all those who supported and contributed to making this initiative a reality. Your generosity has made a significant difference in the lives of the widowed and aged women at FG Philadelphia Pastures.
                            </p>
                        </div>


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
                        projectFolder={'fgphotos'}
                        numImages={8}
                        className='rounded-3xl scale-75'
                        imagesPerPage={1}

                    />
                </div>
            </div>
        </div >
    )
}
