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
            <div className='w-full reproBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>Our Work</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-b mt-1 text-white md:text-7xl text-4xl'>Reproductive Health <br /> Symposium
                    </h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>Reproductive Health Symposium
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
                        <p className='my-1 text-[#727272] text-base'>The Tung Teiya Dahamani Foundation places a strong emphasis on holistic community well-being. As part of our commitment to addressing critical health needs, we organized a Reproductive Health Symposium. This symposium was specifically tailored for students of the UDS School of Business and Tamale Technical University.</p>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Key Highlights

                        </h1>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Educational Focus
                                    : </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>The symposium was designed to be informative and engaging. Expert speakers and healthcare professionals were invited to provide comprehensive education on various aspects of reproductive health, including:
                            </p>
                            <p className='my-1 font-semibold text-[#727272]'>Understanding reproductive systems.</p>
                            <p className='my-1 font-semibold text-[#727272]'>Family planning and contraception methods.</p>
                            <p className='my-1 font-semibold text-[#727272]'>Sexual health awareness.</p>
                            <p className='my-1 font-semibold text-[#727272]'>Healthy relationships and communication.</p>


                        </div>

                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Interactive Sessions
                                </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>To encourage active participation and open dialogue, the event featured interactive sessions. Students had the opportunity to ask questions, share experiences, and engage in meaningful discussions about reproductive health.
                            </p>


                        </div>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Access to Contraceptives
                                </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>Understanding the importance of accessible healthcare resources, the Reproductive Health Symposium went beyond education. Contraceptives were made available to attendees, ensuring that students had access to tools for family planning and reproductive health management.
                            </p>


                        </div>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Consultation Services
                                </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>Health professionals provided confidential consultation services during the symposium. Students could seek personalized advice on reproductive health matters, fostering a supportive environment for addressing individual needs and concerns.
                            </p>


                        </div>


                    </div>


                    <div className='my-8'>




                        {/* impact */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Impact</h1>

                            <p className='my-1 text-[#727272] text-base'>The Reproductive Health Symposium had a positive impact on the participating students:


                            </p>

                            <div className='my-6'>
                                <p className='my-1 font-semibold text-[#727272]'>Improved access to contraceptives, contributing to family planning.



                                </p>
                                <p className='my-1 font-semibold text-[#727272]'>Enhanced communication and understanding within relationships.



                                </p>

                            </div>
                        </div>





                        {/*conclusion*/}
                        <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Future Initiatives


                            </h1>
                            <p className='my-1 text-ourpin text-base'>Building on the success of this symposium, the Tung Teiya Dahamani Foundation is committed to organizing more events that focus on reproductive health education, access to healthcare resources, and community well-being.
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
                        projectFolder={'reprophotos'}
                        numImages={4}
                        className='rounded-3xl scale-75'
                        imagesPerPage={1}

                    />
                </div>
            </div>
        </div >
    )
}
