import Image from 'next/image'
import React from 'react'


export default function Footer() {
    return (
        <div className='w-full bg-[#2E4049] py-16'>
            <div className='w-[60%] mx-auto flex'>
                <div className='1/3'>
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

                <div className='bg-[#384C56] w-2/3 py-4 flex justify-center items-center'>
                    <div>
                        <h1 style={{ fontFamily: 'mincho' }} className='text-white text-lg' >Get Involved</h1>
                        <div className='text-white text-xs flex flex-col gap-1'>
                            <p>About Use</p>
                            <p>Volunteer</p>
                            <p>Causes</p>
                            <p>Projects</p>
                            <p>Team</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
