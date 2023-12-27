import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import Image from 'next/image';


export default function HeaderOne() {
    return (
        <div>
            <div className='bg-black  flex   '>
                <div className='bg-ouryellow w-1/3 h-8'>
                    <div className='flex items-center gap-1 justify-center w-full'>
                        {/* <p>The</p> */}
                        {/* <p className='text-ourblack font-bold py-2 text-lg text-center'>Tungteiya Dahamani Foundation</p> */}
                    </div>

                </div>
                <div className='bg-ourblack w-2/3 font-regukar flex items-center justify-center text-ouryellow'>
                    <div className='flex items-center gap-2 gap- justify-center w-full'>
                        <div className='bg-ouryellow h-4 w-4 flex items-center  justify-center rounded-full'>
                            <CallOutlinedIcon className='text-xs text-ourblack' />
                        </div>

                        <p className='text-xs'> 0247105639  |  0247105639</p>
                    </div>

                    <div className='flex items-center gap-2 gap- justify-center w-full'>
                        <div className='bg-ouryellow h-4 w-4 flex items-center  justify-center rounded-full'>
                            <EmailOutlinedIcon className='text-xs text-ourblack' />
                        </div>

                        <p className='text-xs'> info@tungteiyadahamanifoundation.org</p>
                    </div>

                    <div className='flex items-center gap-2 gap- justify-center w-full'>
                        <div className='bg-ouryellow h-4 w-4 flex items-center  justify-center rounded-full'>
                            <BusinessOutlinedIcon className='text-xs text-ourblack' />
                        </div>

                        <p className='text-xs'> 12 ABC Street, Gumani, Tamale</p>
                    </div>

                </div>



            </div>
        </div>
    )
}
