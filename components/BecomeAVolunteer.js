import Image from 'next/image'
import React from 'react'
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';


export default function BecomeAVolunteer() {
    return (
        <div className='becomeAV'>
            <div className='w-[80%] py-16 flex flex-wrap md:flex text-white mx-auto'>
                <div className=' w-full md:w-[55%]'>
                    <p className='text-ourpink my-1'>Become A Member</p>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-3xl'>Join Our Community for Positive Change</h1>
                    <p className='text-white text-sm w-[80%]  my-4'>Join THE TUNG TEIYA DAHAMANI FOUNDATION's vibrant community dedicated to providing education for children in need.
                    </p>

                    <Image
                        src={'/join.png'}
                        width={350}
                        height={100}
                        className='mt-8 mb-4'

                    />

                    <button className='buttonprimary2  text-xs my-3'>
                        Donate Now
                    </button>
                </div>

                <div className='w-full md:w-[45%]'>
                    <div className='border-2 flex justify-cente items-center border-white my-12 md:my-0 px-5 py-5'>
                        <div className='w-full'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-left text-xl'>Become A Volunteer</h1>
                            <div className='border-2 my-6 border-white py-2 px-1 w-full'>
                                <input placeholder='Full Name *' className='px-3 bg-transparent outline-none w-full text-white' type="text" />
                            </div>
                            <div className='border-2 my-6 border-white py-2 px-1 w-full'>
                                <input placeholder='Email Address *' className='px-3 bg-transparent outline-none w-full text-white' type="text" />
                            </div>
                            <div className='border-2 my-6 border-white py-2 px-1 w-full'>
                                <input placeholder='Phone Number *' className='px-3 bg-transparent outline-none w-full text-white' type="text" />
                            </div>
                            {/* <div className='border-2  my-6 border-white py-2 px-1 w-full'>
                                <textarea className='bg-transparent outline-none px-3 py-1 md:cols-43' placeholder='message*' name="" id="" cols="28" rows="5"></textarea>
                            </div> */}

                            <button className='buttonsecondary text-sm'>
                                Submit Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
