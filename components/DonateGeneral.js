'use client'

import React, { useRef } from 'react';
import Image from 'next/image';


export default function DonateGeneral() {
    const bankDetailsRef = useRef(null);

    const copyAccountDetails = () => {
        // Select the text inside the hidden textarea
        bankDetailsRef.current.select();
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        // Deselect the text
        window.getSelection().removeAllRanges();
    };
    return (
        <div>
            {/* donations */}
            <div className='w-[90%] md:w-[40%] justify-between mx-auto flex flex-wrap gap-12 md:flex bg-[#ECF1F0] px-6 py-3 md:py-[83px] md:px-[102px]'>

                <div className='w-full lg:w-full'>
                    <div>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-extrabold mt-1 md:text-2xl text-lg'>Donate Here</h1>
                        <p className='my-1 text-[#727272] text-base'>We encourage you to consider supporting us continue the work we're doing with this and other projects</p>
                    </div>

                    <div className='bg-white rounded-2xl my-6 py-3 px-3 flex gap-4 items-center'>
                        <Image
                            src={'/qr.webp'}
                            width={90}
                            height={100}
                        />

                        <p className=' w-[70%] text-sm md:text-base'>Scan this QR code to Donate the <span className='text-ourpink'>Tungteiya Dahamani Foundation</span></p>
                    </div>

                    <div>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-extrabold mt-1 md:text-2xl text-lg'>Acceptable methods</h1>

                        <Image
                            src={'/payment.webp'}
                            width={300}
                            height={100}
                            className='my-2'
                        />
                    </div>
                </div>


                <div className='lg:w-[45%]'>
                    {/* <div>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-extrabold mt-1 md:text-2xl text-lg'>Bank Details</h1>
                        <p className='my-1 text-[#727272] text-base'>If you would consider a direct bank deposit, Please make payment to the following Account</p>
                    </div> */}

                    {/* <div className='my-12 text-sm border-y-2 py-3'>
                        <div className=' my-2 items-center justify-between flex flex-wrap lg:flex'>
                            <p className='text-[#2E4049]'> Bank:</p>
                            <p className='text-[#2E4049] font-semibold'> Access Bank Ghana PLC</p>
                        </div>
                        <div className=' my-2 items-center justify-between flex flex-wrap lg:flex'>
                            <p className='text-[#2E4049]'> Account Number:</p>
                            <p className='text-[#2E4049] font-semibold'> 2223330000456987</p>
                        </div>

                        <div className=' my-2 items-center justify-between flex flex-wrap lg:flex'>
                            <p className='text-[#2E4049]'> Account Name:</p>
                            <p className='text-[#2E4049] font-semibold'> TugteiyaDahamani Foundation</p>
                        </div>
                        <div className=' my-2 items-center justify-between flex flex-wrap lg:flex'>
                            <p className='text-[#2E4049]'> Branch</p>
                            <p className='text-[#2E4049] font-semibold'> Tamale Central Branch</p>
                        </div>

                        <textarea
                            ref={bankDetailsRef}
                            style={{ position: 'absolute', left: '-9999px' }} // Hide the textarea off-screen
                            value={`Bank: Access Bank Ghana PLC\nAccount Number: 2223330000456987\nAccount Name: TugteiyaDahamani Foundation\nBranch: Tamale Central Branch`}
                            readOnly
                        />
                    </div> */}


                    {/* <button className='bg-[#2E4049] px-6 py-3 rounded-full text-white'>
                        Copy Account Details
                    </button> */}
                </div>
            </div>



        </div>
    )
}
