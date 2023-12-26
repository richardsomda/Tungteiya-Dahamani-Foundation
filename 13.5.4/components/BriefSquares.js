import React from 'react'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';


export default function BriefSquares() {
    return (
        <div className='flex justify-center '>
            <div className='bg-ouryellow w-[30%]  h-60 flex items-center justify-center'>
                <div className='w-[80%] mx-auto'>
                    <h1 style={{ fontFamily: 'Shippori Antique' }} className='font-bold text-base my-2'>
                        Sustainable Development Goals 1, 2, 3, 5, 6, 13, & 17.
                    </h1 >
                    <p className='text-sm'>
                        Addressing poverty, hunger, and related challenges in underprivileged communities.                    </p>
                    <button className='buttonsecondary text-sm mt-4'>
                        Discover
                    </button>
                </div>
            </div >

            <div className='bg-ourblack w-[30%] h-60 flex justify-center items-center'>
                <div className='w-[80%] mx-auto'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold  text-white text-2xl my-2'>
                        Become a Volunteer
                    </h1 >
                    <p className='text-xs text-white'>
                        Join our mission to create a world where no one is left behind, where compassion drives change, and every individual, regardless of economic background, has the opportunity to thrive.                    </p>
                    <div className='mt-4'>
                        <a className='text-white underline text-sm' href="">Join Our Organisation</a>
                    </div>
                </div>
            </div >

            <div className='bg-ourblack videoImage w-[30%] px-6 py-6 h-60 flex justify-center items-center'>
                <div className='text-white ' >
                    <PlayCircleFilledOutlinedIcon className='w-20 h-20 cursor-pointer' />
                </div>
            </div >
        </div>
    )
}
