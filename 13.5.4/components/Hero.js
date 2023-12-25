import Image from 'next/image'
import React from 'react'
import BriefSquares from './BriefSquares'




export default function Hero() {
    return (
        <div className='heroBackground w-full h-[540px] items-cent flex justify-start '>
            <div className='my-16 w-[60%] mx-auto'>
                <h1 style={{ fontFamily: 'Sue Ellen' }} className='text-white text-2xl my-2'>
                    Helping Move...
                </h1>

                <h1 style={{ fontFamily: 'Shippori Antique' }} className='font-extrabold text-left text-white text-6xl customFont'>
                    Poverty And <br />Hunger
                </h1>

                <Image
                    src={'/line.png'}
                    width={500}
                    height={100}
                    className='my-4'
                />
                {/* <div>
                    <p className='text-white w-[60%] text-sm'>
                        At The Tung Teiya Dahamani Foundation, we're on a mission to eradicate poverty and hunger from underprivileged communities. Our vision is a global community where every individual, regardless of background, experiences a dignified life, free from the hardships of poverty and hunger.
                    </p>
                </div> */}

                <div className='my-6'>
                    <button className='buttonprimary2 text-base'>
                        Donate
                    </button>
                    <button className='buttonsecondary text-base'>
                        Discover
                    </button>
                </div>

                <div className='absolute my-12 flex justify-center'>
                    <BriefSquares />
                </div>
            </div>


        </div>
    )
}
