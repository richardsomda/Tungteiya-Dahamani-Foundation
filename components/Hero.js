import Image from 'next/image'
import React from 'react'
import BriefSquares from './BriefSquares'
import Link from 'next/link'





export default function Hero() {
    return (
        <div className='heroBackground w-full h-[600px] md:h-[700px] lg:[540px] items-cent flex justify-start '>
            <div className='my-16 w-[85%] md:w-[70%] mx-auto fle justify-between'>
                <div className='flex flex-wrap md:flex items-center justify-between'>
                    <div>
                        <h1 style={{ fontFamily: 'Sue Ellen' }} className='text-white text-xl md:text-2xl my-2'>
                            We're Helping Move...
                        </h1>

                        <h1 className='font-extrabold text-left text-white text-4xl md:text-6xl customFont'>
                            Poverty And <br /> Hunger
                        </h1>

                        <Image
                            src={'/line.png'}
                            width={400}
                            height={100}
                            className='my-4 w-[200px] md:w-[400px]'
                        />
                    </div>
                    <div className='text-white text-sm md:text-base w-full sm:w-[60%] md:w-[70%] lg:w-[44%]'>
                        <p className='font-bold text-ourpink my-2'>Join us in</p>

                        <p className='font-semibold md:font-regular'> "our mission to move poverty and hunger below the line. Together, let's build a future without limits.</p>
                        <div className='flex justify-start my-4'>
                            <p className='text-left flex justify-left text-sm'>- Queen Teiya [Ghana's Most Beautiful, 2022]</p>
                        </div>
                    </div>


                </div>



                <div className='my-6 w-full'>
                    <Link href={'/donate'}>
                        <button className='bg-ourpink px-6 py-3 rounded-full text-white mr-4 hover:bg-opacity-90 active:bg-opacity-100 text-base'>
                            Donate
                        </button>
                    </Link>

                    <Link href={'/about'}>
                        <button className='buttonsecondary text-base'>
                            Discover
                        </button>
                    </Link>
                </div>

                <div className='my-12 md:my-8 lg:my-16'>
                    <BriefSquares />
                </div>
            </div>


        </div>
    )
}
