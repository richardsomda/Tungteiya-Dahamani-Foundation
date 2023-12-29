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
            <div className='w-full kayaBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>Our Flagship</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 text-white md:text-7xl text-4xl'>The Kaya Lahakani <br /> Project</h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>The Kaya Lahakani Project</h1>
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
                        <p className='my-1 text-[#727272] text-base'>The Kaya Lahakani Project, established by THE TUNG TEIYA DAHAMANI FOUNDATION, stands as a beacon of empowerment within underprivileged communities, particularly in the Northern sector of Ghana. Launched on March 11, 2023, this flagship initiative is meticulously designed to address the unique needs of young girls, offering them a transformative pathway out of poverty and towards sustainable livelihoods.</p>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Objective</h1>
                        <p className='my-1 text-[#727272] text-base'>At its core, the Kaya Lahakani Project aims to provide young girls with invaluable vocational skills, breaking the chains of poverty and offering a gateway to economic self-sufficiency. By focusing on skill development, the project seeks to empower these girls with the tools they need to carve out brighter futures for themselves and their communities.</p>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Key Achievements</h1>
                        <p className='my-1 text-[#727272] text-base'>The project has achieved significant milestones since its inception:
                        </p>


                        {/* empowering young girls */}
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Empowering Young Girls: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>To date, the project has provided 25 sewing machines, 5 hairdressing machines, and 5 smock weaving machines. These tools serve as instruments of empowerment, equipping young girls with practical skills that open doors to economic independence.
                            </p>
                        </div>
                        {/* Entrepreneurship Training: */}
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Entrepreneurship Training: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>In November 2022, the project conducted entrepreneurship training, with a focus on pastry making. Ten women underwent this training, receiving not only knowledge but also raw materials to kickstart their enterprises, promoting economic self-sufficiency within the community.
                            </p>
                        </div>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Donations</h1>
                        <p className='my-1 text-[#727272] text-base'>The Kaya Lahakani Project has been made possible through the generous contributions of materials and resources, enabling the foundation to empower young girls with valuable vocational skills. The following materials have been donated and utilized for the success of the project:
                        </p>


                        {/* Donations */}

                        {/* Donations */}
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Sewing Machines: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>25 sewing machines have been generously donated, providing the essential tools for teaching sewing skills to young girls, fostering economic empowerment through this valuable trade.
                            </p>
                        </div>

                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Hairdressing Machines </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>5 hairdressing machines have been contributed, facilitating the acquisition of hairdressing skills among young girls and offering opportunities for economic self-sufficiency in the beauty industry.
                            </p>
                        </div>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Smock Weaving Machines: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>5 smock weaving machines have been provided, allowing young individuals to learn the traditional craft of smock weaving. This not only preserves cultural heritage but also creates avenues for sustainable livelihoods.
                            </p>

                        </div>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Entrepreneurship Training Materials: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>Raw materials for pastry making were supplied during entrepreneurship training in November 2022. These materials served as the foundation for ten women to kickstart their enterprises, promoting economic independence within the community.
                            </p>

                        </div>

                        {/* impact */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Impact</h1>
                            <p className='my-1 text-[#727272] text-base'>The Kaya Lahakani Project extends beyond tangible tools and training; it fosters a profound impact on the lives of young girls. Beyond the acquisition of skills, the project instills a sense of empowerment and independence, creating a ripple effect that positively influences the entire community.</p>
                        </div>


                        {/*Future Plans */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Future Plans</h1>
                            <p className='my-1 text-[#727272] text-base'>Looking ahead, the Kaya Lahakani Project is committed to expanding its reach and impact. The goal is to provide even more young girls with the skills and opportunities they need to chart their paths towards a better future. The project remains a testament to the foundation's dedication to addressing the root causes of poverty and creating a lasting impact through investment in the potential of youth.</p>
                        </div>


                        {/*conclusion*/}
                        <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                            {/* <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Future Plans</h1> */}
                            <p className='my-1 text-ourpin text-base'>The Kaya Lahakani Project embodies the foundation's ethos of sustainable development and empowerment, contributing to a world where every individual, regardless of their background, has the opportunity to lead a dignified life free from the hardships of poverty.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={donateSectionRef}>
                <DonateGeneral />
            </div>


            <div className='w-full md:w-[80%] mx-auto my-12'>

                <div ref={gallerySectionRef}
                    className='w-[80%] md:w-[70%] mx-auto rounded-3xl'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold my-6 text-[20px]'>Project Gallery</h1>

                    <ProjectGalleryComponent
                        projectFolder={'kayaphotos'}
                        numImages={107}
                        className='rounded-3xl scale-75'
                        imagesPerPage={1}

                    />
                </div>
            </div>
        </div >
    )
}
