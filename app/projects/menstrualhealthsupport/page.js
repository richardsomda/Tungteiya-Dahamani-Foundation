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
            <div className='w-full breastBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-1'>Our Work</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-b mt-1 text-white md:text-7xl text-4xl'>Menstrual Health <br /> Support
                    </h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>Menstrual Health Support</h1>
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
                        <p className='my-1 text-[#727272] text-base'>At the Tung Teiya Dahamani Foundation, we recognize the importance of menstrual health and its impact on the well-being of women and girls. Our commitment to positive change within communities extends to addressing the unique challenges faced by individuals in the Northern sector of Ghana. Through our Menstrual Health Support initiative, we strive to create awareness, provide resources, and contribute to a healthier and more informed community.</p>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Initiatives
                        </h1>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Menstrual Health Workshops
                                    : </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'>We conduct educational workshops focused on menstrual health. These sessions aim to empower young girls and women by providing crucial information on:
                            </p>
                            <p className='my-1 font-semibold text-[#727272]'>Proper menstrual hygiene practices.</p>
                            <p className='my-1 font-semibold text-[#727272]'>Correct Usage of Sanitary Products</p>
                            <p className='my-1 font-semibold text-[#727272]'>Understanding the Menstrual Cycle</p>
                            <p className='my-1 font-semibold text-[#727272]'>Dispelling Myths and misconceptions</p>

                            <p className='my-2 text-[#727272] text-base'>These workshops, held in schools and community centers, feature expert speakers and interactive discussions.
                            </p>
                        </div>


                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '> Sanitary Pad Distribution Drive: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>Collaborating with REEdAfrica, we actively participate in World Menstrual Health Month by organizing sanitary pad distribution drives. This initiative involves:
                            </p>

                            <div className='my-6'>
                                <p className='my-1 font-semibold text-[#727272]'>Distributing sanitary pads to young girls in schools.</p>
                                <p className='my-1 font-semibold text-[#727272]'>Promoting menstrual health awareness.
                                </p>
                                <p className='my-1 font-semibold text-[#727272]'>Partnering with local organizations for a broader impact.
                                </p>
                            </div>

                            <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Menstrual Health Support: </span> Collaborating with REEdAfrica, we celebrated World Menstrual Health Month by donating sanitary pads to young girls at the Zogbeli Block C school in Ghana, promoting menstrual health awareness.
                            </p>
                        </div>


                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '> Menstrual Health Advocacy Campaign </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>To break the stigma surrounding menstruation, we engage in advocacy campaigns. These campaigns include:
                            </p>

                            <div className='my-6'>
                                <p className='my-1 font-semibold text-[#727272]'>Community awareness events.
                                </p>
                                <p className='my-1 font-semibold text-[#727272]'>Interactive sessions, poster campaigns, and discussions.

                                </p>
                                <p className='my-1 font-semibold text-[#727272]'>Collaboration with schools, community leaders, and healthcare professionals.

                                </p>
                            </div>


                        </div>
                    </div>


                    <div className='my-8'>




                        {/* impact */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Impact</h1>

                            <p className='my-1 text-[#727272] text-base'>Our Menstrual Health Support initiative has shown tangible results:


                            </p>

                            <div className='my-6'>
                                <p className='my-1 font-semibold text-[#727272]'>Increased awareness and understanding of menstrual health.

                                </p>
                                <p className='my-1 font-semibold text-[#727272]'>Enhanced confidence and well-being among young girls.


                                </p>
                                <p className='my-1 font-semibold text-[#727272]'>Improved access to sanitary products, contributing to overall hygiene.


                                </p>
                            </div>
                        </div>





                        {/*conclusion*/}
                        <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Join Us in Supporting Menstrual Health

                            </h1>
                            <p className='my-1 text-ourpin text-base'>Improved access to sanitary products, contributing to overall hygiene.
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
