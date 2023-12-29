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
                    <h1 style={{ fontFamily: 'mincho' }} className='font-b mt-1 text-white md:text-7xl text-4xl'>Breast Cancer <br /> Screening  Exercise</h1>
                </div>

            </div>


            <div className='w-[80%] md:w-[40%] mx-auto flex flex-wrap md:flex'>
                <div className='w-full'>

                    {/* Headline Image */}
                    {/* <div className='w-full my-6 h-80 md:h-96 mx-auto kaya2'></div> */}

                    <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[24px] md:text-[32px]'>Breast Cancer Screening Exercise</h1>
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
                        <p className='my-1 text-[#727272] text-base'>In October 2022, the Tung Teiya Dahamani Foundation organized a free Breast Cancer Screening Exercise in Madina, Accra, as part of its commitment to promoting health and early detection. This initiative aimed to contribute to the well-being of Kayayo women by providing essential screenings and raising awareness about breast health.</p>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Objectives</h1>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Early Detection and Awareness: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>The primary goal was to facilitate early detection of breast cancer, a crucial factor in improving treatment outcomes. By offering free screenings, we aimed to empower women with knowledge about the importance of regular check-ups.
                            </p>
                        </div>
                        <div>
                            <div className='mt-6 flex items-center gap-2'>
                                <CheckCircleOutlineIcon className='text-xl text-ourpink font-bold ' />
                                <p className=' text-ourpink '>Community Engagement: </p>
                            </div>

                            <p className='my-1 text-[#727272] text-base'>Beyond screenings, the program fostered community engagement and education. We believe that informed communities are better equipped to prioritize health and well-being.
                            </p>
                        </div>
                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Impact and Results</h1>
                        <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Number of Screenings Conducted:</span>  377
                        </p>
                        <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Positive Outcomes:</span>   Two instances of early detection were reported, leading to timely interventions and positive health outcomes.
                        </p>



                    </div>


                    <div className='my-8'>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Empowering Women Through Health
                        </h1>
                        <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Education and Support
                            :</span>  As part of the Breast Cancer Screening Exercise, informational sessions were conducted to educate participants about breast health. The foundation believes in providing not only medical support but also empowering women with knowledge to take charge of their well-being.
                        </p>
                        <p className='my-2 text-[#727272] text-base'> <span className='font-semibold'>Collaborative Partnerships
                            :</span>  The success of this initiative was made possible through collaboration with healthcare professionals, volunteers, and community leaders. These partnerships strengthened our ability to reach and positively impact the target audience.
                        </p>




                        {/* impact */}
                        <div className='my-8'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Looking Ahead</h1>
                            <p className='my-1 text-[#727272] text-base'>While the Breast Cancer Screening Exercise was a significant milestone, our commitment to women's health continues. We aspire to expand our reach, conduct more awareness programs, and explore additional initiatives to address health challenges faced by women in the Northern sector of Ghana.</p>
                        </div>





                        {/*conclusion*/}
                        <div className='my-12 border-y-2 bg- py-6 bg-[#F2F2F2] px-6 '>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-[20px]'>Join Us in Building Healthier Communities
                            </h1>
                            <p className='my-1 text-ourpin text-base'>At the Tung Teiya Dahamani Foundation, we believe that community health is a collective responsibility. Join us in our mission to create lasting change, promote health awareness, and make a positive impact on the lives of women in need.</p>
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
