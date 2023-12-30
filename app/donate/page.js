'use client'

import React, { useRef } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ProjectGalleryComponent from '@/components/ProjectGalleryComponent';
import DonateGeneral from '@/components/DonateGeneral';
import Link from 'next/link';




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

            <div className='w-full donateBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>Support Us</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 text-white md:text-7xl text-4xl'> Your Donation </h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>
                            Donations
                        </h1>
                        {/* <p className='my-1 text-ourpin text-base'>The Kaya Lahakani Project embodies the foundation's ethos of sustainable development and empowerment, contributing to a world where every individual, regardless of their background, has the opportunity to lead a dignified life free from the hardships of poverty.</p> */}


                    </div>



                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Your Support Matters
                        </h1>
                        <p className='my-1 text-[#727272] text-base'>At the Tung Teiya Dahamani Foundation, we believe in the power of collective action to bring about positive change. Your support can make a significant impact on the lives of those in need. Every contribution, no matter how big or small, plays a crucial role in our mission to empower communities and break the cycle of poverty.</p>
                    </div>





                    <div className='my-8'>

                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>How You Can Help.</h1>

                            <p className=' text-[#727272] text-base my-2'> <span className='font-semibold'>Make a one-time donation: </span>Make a one-time donation and contribute to our ongoing projects. Your generosity directly supports initiatives focused on education, healthcare, community development, and more.
                            </p>

                            <p className=' text-[#727272] text-base my-2'> <span className='font-semibold'>Project-Specific Donations: </span> Choose to support a specific project that resonates with you. Whether it's education, healthcare, or community empowerment, you have the option to direct your donation to a cause that matters most to you.
                            </p>

                        </div>

                    </div>



                </div>

            </div>

            <div className='my-8'>
                <DonateGeneral />
            </div>


        </div >
    )
}
