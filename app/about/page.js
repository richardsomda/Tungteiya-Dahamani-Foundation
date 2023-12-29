import Image from 'next/image'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Newsletter from '@/components/Newsletter';


export default function page() {
    return (
        <>
            <div className='w-full aboutBackground h-60 md:h-[600px]'>

                <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                    <h1 className='text-ourpink  text-lg mb-3'>What We Do</h1>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-2 text-white md:text-7xl text-4xl'>About Our <br /> Organization</h1>
                </div>

            </div>

            {/*  Our Story  */}
            <div className='w-full  '>
                <div className="w-[80%]  md:w-[70%] mx-auto bg-blue-20  py-12 md:py-16 ">
                    <div className='flex flex-wrap md:flex justify-between'>

                        <div className='w-full md:w-[40%]'>
                            <Image
                                src={'/ourstory.png'}
                                width={200}
                                height={100}
                                className=' md:w-[400px] w-full '

                            />
                        </div>


                        <div className='my-6 md:my-0 w-full md:w-1/2 bg-red-20'>
                            <h1 className='text-ourpink font-bold text-lg mb-'>Our Story</h1>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 w-full md:text-4xl text-2xl'>THE TUNG TEIYA  DAHAMANI FOUNDATION
                            </h1>
                            <p className='my-3 text-[#727272]'>Established in 2022, THE TUNG TEIYA DAHAMANI FOUNDATION was born out of a vision for a world without poverty and hunger. Our journey is grounded in the belief that every individual, regardless of their background, deserves access to resources for a dignified life. Since our inception, we've been on a mission to break the cycle of poverty and empower communities for sustainable development.
                            </p>

                            <div className='bg-[#DEF1F0] py-2 px-6 W-full rounded-full'>
                                <p className='text-[#538582] text-sm text-'>Empowering Lives: Crafting a World without Poverty and Hunger.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            {/* mission and sdgs */}
            <div className='w-full  '>
                <div className="w-[80%] border-y-2 md:w-[70%] mx-auto bg-blue-20  py-12 md:py-16 ">

                    <div className='flex flex-wrap md:flex justify-between'>


                        <div className='my-6 md:my-0 w-full md:w-[46%] bg-red-20'>
                            <h1 className='text-ourpink font-bold text-lg mb-'>Our Goals </h1>

                            <p className='my-3 text-[#727272]'>Aiming for a world without poverty and hunger, we are committed to eradicating these challenges through youth empowerment and sustainable community development.
                            </p>

                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Mission
                            </h1>

                            <p className='my-3 text-[#727272]'>Eradicate Poverty and Hunger, Empower Youth for Sustainable Impact, and Foster Sustainable Development in Communities.
                            </p>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 w-full md:text-2xl text-2xl'>
                                Vision
                            </h1>

                            <p className='my-3 text-[#727272]'>A World without Poverty and Hunger, where individuals thrive, empowered youth drive impact, and communities achieve sustainable development.
                            </p>

                        </div>


                        <div className='my-6 md:my-0 w-full md:w-1/2 bg-red-20'>
                            <h1 className='text-ourpink font-bold text-lg mb-'>We Are </h1>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-1 w-full md:text-4xl text-2xl'>Alligned With The SDGs
                            </h1>
                            <p className='my-3 text-[#727272]'>Committed to the Sustainable Development Goals (SDGs), our foundation actively works towards fulfilling Goals 1, 2, 5, 6, 13, and 17 – addressing poverty, hunger, quality education, gender equality, clean water and sanitation, climate action, and partnerships for the goals.
                            </p>

                            <Image
                                src={'/sdgs.png'}
                                width={400}
                                height={100}
                                className='my-2 '
                            />
                        </div>

                    </div>

                </div>
            </div>


            {/* focus and achievements */}
            <div className='w-full  '>
                <div className="w-[80%] border-b-2 md:w-[70%] mx-auto bg-blue-20  py-12 md:py-16 ">

                    <div className='flex flex-wrap md:flex justify-between'>


                        <div className='my-6 md:my-0 w-full md:w-[46%] bg-red-20'>
                            <h1 className='text-ourpink font-bold text-lg mb-'>Our Focus </h1>

                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Poverty Alleviation
                            </h1>

                            <p className='my-3 text-[#727272]'>Through projects like <a className='text-ourpink' href="">Kaya Lahakani</a>, we empower young girls with vocational skills to foster economic independence.
                            </p>



                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Health Initiatives
                            </h1>

                            <p className='my-3 text-[#727272]'>Breast screening, menstrual health support, and reproductive health symposiums contribute to overall well-being.
                            </p>


                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Water Access
                            </h1>

                            <p className='my-3 text-[#727272]'>Borehole commissions ensure improved access to clean water for communities.
                            </p>



                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Hunger Mitigation
                            </h1>

                            <p className='my-3 text-[#727272]'>Food security initiatives, donations, and support for special needs students address hunger challenges.
                            </p>


                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Sanitation                            </h1>

                            <p className='my-3 text-[#727272]'>Community clean-up exercises contribute to environmental sustainability and community well-being.
                            </p>


                        </div>


                        <div className='my-6 md:my-0 w-full md:w-[45%] bg-red-20'>
                            <h1 className='text-ourpink font-bold text-lg mb-'>Notable Milestones </h1>

                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Impactful Water Project
                            </h1>

                            <p className='my-3 text-[#727272]'>The construction of a borehole at Lungsi Fong ensures access to clean water, positively impacting health and sanitation.
                            </p>


                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Vocational Skills Empowerment                            </h1>

                            <p className='my-3 text-[#727272]'>Over 85 women have been empowered through the Kaya Lahakani project, fostering economic independence.
                            </p>



                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Reproductive Health Education                          </h1>

                            <p className='my-3 text-[#727272]'>The reproductive health symposium educated students on crucial health matters, contributing to improved well-being.
                            </p>

                            <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-4 w-full md:text-2xl text-2xl'>
                                Community Support                        </h1>

                            <p className='my-3 text-[#727272]'>Donating food items to widowed and aged women, as well as special needs students, showcases our commitment to addressing hunger.
                            </p>


                        </div>

                    </div>

                </div>
            </div>

            <div className='w-[80%] md:w-[70%] mx-auto py-6 md:py-40'>
                <div className='bg-red-400 rounded-xl my-6 px-16 py-6'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-2 text-white font-bold md:text-2xl text-2xl'>Our Challenges</h1>
                    <p className='mt-2 text-white'>While our achievements are significant, we acknowledge challenges, including limited resources and the need for sustainable funding to expand our reach.</p>
                </div>
                <div className='bg-green-400 rounded-xl my-6 px-16 py-6'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bol mt-2 text-white font-bold md:text-2xl text-2xl'>
                        Future Outlook
                    </h1>
                    <p className='mt-2 text-white'>Looking ahead, we remain dedicated to our mission. We plan to strengthen existing projects, explore new opportunities, and seek strategic partnerships for enhanced impact.</p>
                </div>

            </div>
            <Newsletter />
        </>
    )
}
