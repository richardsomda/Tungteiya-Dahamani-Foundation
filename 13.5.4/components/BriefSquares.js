import React from 'react'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';


export default function BriefSquares() {
    return (
        <div className='flex justify-center'>
            <div className='bg-ouryellow w-80 px-6 py-3 flex items-center justify-center'>
                <div>
                    <h1 style={{ fontFamily: 'Shippori Antique' }} className='font-bold text-lg my-2'>
                        Education
                    </h1 >
                    <p className='text-sm'>
                        Below Poverty Line is enchmark used by the government of India  economic disadvantage.
                    </p>
                    <button className='buttonsecondary text-sm mt-4'>
                        Discover
                    </button>
                </div>
            </div >

            <div className='bg-ourblack w-80 px-6 py-6 flex justify-center items-center'>
                <div>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold  text-white text-2xl my-3'>
                        Become a Volunteer
                    </h1 >
                    <p className='text-xs text-white'>
                        Below Poverty Line is enchmark used by the government of India  economic disadvantage.
                    </p>
                    <div className='mt-4'>
                        <a className='text-white underline' href="">Join Our Organisation</a>
                    </div>
                </div>
            </div >

            <div className='bg-ourblack videoImage w-80 px-6 py-6 flex justify-center items-center'>
                <div className='text-white ' >
                    <PlayCircleFilledOutlinedIcon className='w-20 h-20 cursor-pointer' />
                </div>
            </div >
        </div>
    )
}
