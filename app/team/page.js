'use client'


import React, { useRef } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ProjectGalleryComponent from '@/components/ProjectGalleryComponent';
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

            <div className='w-full teamBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>The Team</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 text-white md:text-7xl text-4xl'>Our Dedicated <br /> Volunteers</h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>
                            The Tung-Teiya Dahamani Foundation Team

                        </h1>
                        {/* <p className='my-1 text-ourpin text-base'>The Kaya Lahakani Project embodies the foundation's ethos of sustainable development and empowerment, contributing to a world where every individual, regardless of their background, has the opportunity to lead a dignified life free from the hardships of poverty.</p> */}


                    </div>



                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Overview</h1>
                        <p className='my-1 text-[#727272] text-base'>Welcome to the dedicated and passionate team behind The TUNGTEIYA DAHAMANI FOUNDATION Each member of our team contributes unique skills and expertise to drive our mission forward. Get to know the faces and stories behind the impact we're making together.</p>
                    </div>





                    <div className='my-8'>




                        {/* impact */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Our Values
                            </h1>

                            <p className='my-1 text-[#727272] text-base'>At The TUNGTEIYA DAHAMANI FOUNDATION, we believe in collaboration, innovation, and a shared commitment to making a positive difference. Learn more about our team culture and the values that guide us in our mission.
                            </p>

                            <div className='flex flex-wrap md:flex gap-6 my-6'>
                                <div className='bg-[#e6e6e6] rounded-full'>
                                    <p className='my-1 text-ourpink text-base font-semibold px-6'>Empathy </p>
                                </div>
                                <div className='bg-[#e6e6e6] rounded-full'>
                                    <p className='my-1 text-ourpink text-base font-semibold px-6'>Collaboration </p>
                                </div>
                                <div className='bg-[#e6e6e6] rounded-full'>
                                    <p className='my-1 text-ourpink text-base font-semibold px-6'>Inclusitivity </p>
                                </div>
                            </div>


                        </div>








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
            <div className='my-8'>
                <h1 style={{ fontFamily: 'mincho' }} className='font-bold w-[40%] mx-auto text-[20px]'>The Team </h1>

                <div className='w-[80%] md:w-[76%] mx-auto'>
                    <div className='flex flex-wrap md:flex items-cente gap-8 my-6 justify-center '>
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
                        {/* basit */}
                        <div className='w-full md:w-[23%]'>
                            <div className=' teamfour rounded-xl h-72'> </div>
                            <p className='font-semibold mt-2 w-full text-center '>Abdul Basit</p>
                            <p className='text-[#727272] text-center'>Creative Director</p>
                        </div>
                        {/* malik */}
                        <div className='w-full md:w-[23%]'>
                            <div className=' teamfive rounded-xl h-72'> </div>
                            <p className='font-semibold mt-2 w-full text-center '>Abdulai Abdul Malik Dasana Nkabo</p>
                            <p className='text-[#727272] text-center'>Graphic Designer</p>
                        </div>



                    </div>
                    <div className='flex gap-6 my-16 justify-center flex-wrap md:flex'>
                        <button className='buttonprimary2'>
                            Join Our Organisation
                        </button>
                    </div>
                </div>

            </div>


        </div >
    )
}
