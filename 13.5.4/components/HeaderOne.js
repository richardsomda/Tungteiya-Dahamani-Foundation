import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Image from 'next/image';


export default function HeaderOne() {
    return (
        <div className='bg-black  flex   '>

            <div className='flex w-[60%] mx-auto justify-between '>
                <div className='flex gap-8 py-3 text-ouryellow head1style'>

                    <div className='flex gap-1 items-center'>
                        <div className='text-sm'>
                            <CallOutlinedIcon className=' text-sm ' />
                        </div>
                        <p>0247105639</p>
                    </div>



                    <div className='flex gap-1 items-center'>
                        <div className='text-sm'>
                            <EmailOutlinedIcon className=' text-sm' />
                        </div>
                        <p>tungteiyaifoundation@gmail.com</p>
                    </div>

                </div>

                <div className='bg-ouryellow items-center flex px-4'>
                    <Image
                        src={'/scl.png'}
                        width={60}
                        height={100}
                    />
                </div>
            </div>

        </div>
    )
}
