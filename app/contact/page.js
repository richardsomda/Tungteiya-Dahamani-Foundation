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
                    <h1 className='text-ourpink  text-lg mb-1'>Contact Us</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 text-white md:text-7xl text-4xl'>How To Reach Us</h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>
                            Contact Us

                        </h1>
                        {/* <p className='my-1 text-ourpin text-base'>The Kaya Lahakani Project embodies the foundation's ethos of sustainable development and empowerment, contributing to a world where every individual, regardless of their background, has the opportunity to lead a dignified life free from the hardships of poverty.</p> */}


                    </div>









                    <div className='my-8'>








                        {/*conclusion*/}
                        {/* <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Gratitude


                            </h1>
                            <p className='my-1 text-ourpin text-base'>The Tung Teiya Dahamani Foundation expresses sincere gratitude to all participants, volunteers, and community members who actively contributed to the success of the cleanup exercise. Your dedication to creating a positive impact is commendable.
                            </p>
                        </div> */}



                    </div>
                </div>
            </div>


            <div className=' bg-white w-[80%] md:w-[40%] mx-auto my-16'>
                <h1 style={{ fontFamily: 'mincho' }} className='font-bold w-[40%] mx-auto text-[20px]'>Request A Call Back </h1>

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
                        <input type="text" placeholder='Note (eg: partnership with growthfund)' className='outline-none w-full py-3 border-b border-b-gray-300' />
                    </div>

                    <div className='w-full flex justify-center'>
                        <button className='buttonprimary2'>
                            Request Call Back
                        </button>
                    </div>
                </div>

            </div>

            {/* map comp */}

            <div className='w-[70%] md:w-[50%] h-96 mx-auto my-16' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1373.722404372825!2d-0.8551493225258134!3d9.452145221152776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43c26c51751b7%3A0x724e1e3e8a7bff04!2sJiso%20Plaza!5e0!3m2!1sen!2sgh!4v1703949421053!5m2!1sen!2sgh" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>



            <div className='my-8 bg-[#384C56] w-[80%] md:w-[40%] mx-auto'>
                <div className='py-6 md:py-16 px-3 md:px-12'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold  text-white text-[20px]'>Contact Information</h1>


                    <div className='flex gap-2 md:gap-4 my-3 items-center'>
                        <Call className='text-white text-xs md:text-sm' />
                        <p className='my-1 text-white text-xs md:text-base'>0247105639 | 0247105639</p>
                    </div>
                    <div className='flex gap-2 md:gap-4 my-3 items-center'>
                        <Email className='text-white text-xs md:text-sm' />
                        <p className='my-1 text-white text-xs md:text-base w-[60%] md:w-full'>info@thetungteiyadahamanifoundation.org</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
