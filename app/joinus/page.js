'use client'


import React, { useRef } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ProjectGalleryComponent from '@/components/ProjectGalleryComponent';
import DonateGeneral from '@/components/DonateGeneral';
import { Call, Email } from '@mui/icons-material';



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

            <div className='w-full contactBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>Join Us</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 text-white md:text-7xl text-4xl'>Volunteer With Us</h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>
                            Join Us
                        </h1>
                        {/* <p className='my-1 text-ourpin text-base'>The Kaya Lahakani Project embodies the foundation's ethos of sustainable development and empowerment, contributing to a world where every individual, regardless of their background, has the opportunity to lead a dignified life free from the hardships of poverty.</p> */}


                    </div>









                    <div className='my-8'>



                    </div>
                </div>
            </div>


            <div className=' bg-white w-[80%] md:w-[40%] mb-32 mx-auto my-16'>
                <h1 style={{ fontFamily: 'mincho' }} className='font-bold w text-cente mb-6 mx-auto text-[20px]'> Tell Us About You </h1>

                <div>
                    <div className='w-full flex gap-8 md:gap-2 md:justify-between flex-wrap md:flex'>
                        <div className='w-full md:w-[48%]'>
                            <input type="text" placeholder='Name' className='outline-none w-full py-3 border-b border-b-gray-300' />
                        </div>
                        <div className='w-full md:w-[48%]'>
                            <input type="text" placeholder='Phone Number' className='outline-none w-full py-3 border-b border-b-gray-300' />
                        </div>

                    </div>

                    <div className='w-full my-8'>
                        <input type="text" placeholder='Role (eg: I wish to volunteer as a Graphic Designer)' className='outline-none w-full py-3 border-b border-b-gray-300' />
                    </div>

                    <div className='w-full flex justify-enter'>
                        <button className='buttonprimary2 w-[50%]'>
                            Submit                        </button>
                    </div>
                </div>

            </div>





        </div >
    )
}
