import Image from 'next/image'
import React from 'react'


export default function Footer() {
    return (
        <div className='w-full bg-[#2E4049] pt-16 pb-2'>
            <div className='w-[60%] mx-auto flex'>
                <div className=''>
                    <Image
                        src={'/logo.png'}
                        width={80}
                        height={100}
                    />

                    <p className='text-white text-xs font-regular my-2 w-[50%]'>Care about people to transforming their lives
                        and exudes a positives Impressiono believe. fundraising
                        NGO organizations.
                    </p>
                    <Image
                        src={'/Follow.png'}
                        width={120}
                        height={100}
                        className='my-3'

                    />
                </div>

                <div className='bg-[#384C56] w-[90%] py-6 gap-28  flex justify-center items-center'>
                    <div>
                        <h1 style={{ fontFamily: 'mincho' }} className='text-white text-lg' >Get Involved</h1>
                        <div className='text-white text-xs flex flex-col my-6 gap-1'>
                            {/* <button className='text-left my-1 hover:font-bold'>About Use</button> */}
                            <button className='text-left my-1 hover:font-bold'>Volunteer</button>
                            <button className='text-left my-1 hover:font-bold'>Causes</button>
                            <button className='text-left my-1 hover:font-bold'>Projects</button>
                            {/* <button className='text-left my-1 hover:font-bold'>Team</button> */}
                        </div>
                    </div>


                    <div>
                        <h1 style={{ fontFamily: 'mincho' }} className='text-white text-lg ' >Reach Us</h1>
                        <div className='text-white text-xs   my-4 gap-1'>
                            <button className='text-left my-1 hover:font-bold'>660 Tamale Street, <br />88 Tamale</button>
                            <div className='flex flex-col mt-1'>
                                <button className='text-left my-1 hover:font-bold'>info@tdfoundation.com</button>
                                <button className='text-left my-1 hover:font-bold'>024345678</button>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
            <div className='border-t mt-12 py-6  border-white'>
                <div className='text-white text-xs flex justify-center'>
                    <p>Copyright © Tungteiya Dahamani Foundation | Designed by Richard Somda - Powered by Skytech Limited</p>
                </div>
            </div>
        </div>
    )
}
