import Image from 'next/image'
import React from 'react'


export default function BecomeAVolunteer() {
    return (
        <div className='becomeAV'>
            <div className='w-[60%] py-16 flex text-white mx-auto'>
                <div className=' w-[60%]'>
                    <p className='text-ourpink my-1'>About us</p>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-3xl'>Join The Community To <br />Give Education For <br />Children</h1>
                    <p className='text-white text-sm w-[80%]  my-2'>Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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

                <div className='w-[40%]'>
                    <div className='border-2 flex justify-cente items-center border-white px-5 py-5'>
                        <div className='w-full'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-left text-xl'>Become A Volunteer</h1>
                            <div className='border-2 my-6 border-white py-2 px-1 w-full'>
                                <input placeholder='Full Name *' className='px-3 bg-transparent outline-none text-white' type="text" />
                            </div>
                            <div className='border-2 my-6 border-white py-2 px-1 w-full'>
                                <input placeholder='Email Address *' className='px-3 bg-transparent outline-none text-white' type="text" />
                            </div>
                            <div className='border-2 my-6 border-white py-2 px-1 w-full'>
                                <input placeholder='Phone Number *' className='px-3 bg-transparent outline-none text-white' type="text" />
                            </div>
                            <div className='border-2  my-6 border-white py-2 px-1 w-full'>
                                <textarea className='bg-transparent outline-none px-3 py-1' placeholder='message*' name="" id="" cols="33" rows="5"></textarea>
                            </div>

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
