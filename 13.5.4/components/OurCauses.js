import Image from 'next/image'
import React from 'react'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';


export default function OurCauses() {
    return (
        <div className='bg-ouryellow py-12'>

            <div className='w-[50%]  mx-auto'>
                <div className=' flex justify-between items-center'>
                    <div>
                        <p className=' my-1'>Our Causes</p>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-2xl'>You can help lots of people by
                            donating little.</h1>
                    </div>

                    <button className='buttonprimary2 text-xs my-3'>
                        More Causes
                    </button>
                </div>
            </div>
            {/* projects */}
            <div className='flex items-center justify-center'>
                <div>
                    <div className='flex gap-4 my-12'>
                        <div className='w-[%] bg-white'>
                            <Image
                                src={'/cause2.jpeg'}
                                width={200}
                                height={50}
                                className='w-full'

                            />

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-semibold'>Big charity: build school for  <br />poor children</h1>
                            </div>

                            <div className='items-center w-[80%] mx-auto'>
                                <div className='relative border-2 h- border-[#C5CECC] w-full'></div>
                                <div className=' transform -translate-y-1 border-2 border-ourpink w-[30%]'></div>
                            </div>
                            <div className='items-center w-[80%] mx-auto'>
                                <div className='text-sm flex justify-between'>
                                    <p style={{ fontFamily: 'mincho' }} className=' my-2'>Lives Imparted - 307K</p>
                                    <p style={{ fontFamily: 'mincho' }} className=' my-2'>Goal - 1M</p>
                                </div>
                            </div>
                            <div className='items-center w-[80%] mx-auto'>
                                <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>



                        </div>

                        <div className='w-[%] bg-white'>
                            <Image
                                src={'/cause2.jpeg'}
                                width={200}
                                height={50}
                                className='w-full'

                            />

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-semibold'>Big charity: build school for  <br />poor children</h1>
                            </div>

                            <div className='items-center w-[80%] mx-auto'>
                                <div className='relative border-2 h- border-[#C5CECC] w-full'></div>
                                <div className=' transform -translate-y-1 border-2 border-ourpink w-[30%]'></div>
                            </div>
                            <div className='items-center w-[80%] mx-auto'>
                                <div className='text-sm flex justify-between'>
                                    <p style={{ fontFamily: 'mincho' }} className=' my-2'>Lives Imparted - 307K</p>
                                    <p style={{ fontFamily: 'mincho' }} className=' my-2'>Goal - 1M</p>
                                </div>
                            </div>
                            <div className='items-center w-[80%] mx-auto'>
                                <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>



                        </div>


                        <div className='w-[%] bg-white'>
                            <Image
                                src={'/cause2.jpeg'}
                                width={200}
                                height={50}
                                className='w-full'

                            />

                            <div className='w-[80%] my-3  mx-auto'>
                                <h1 style={{ fontFamily: 'mincho' }} className='font-semibold'>Big charity: build school for  <br />poor children</h1>
                            </div>

                            <div className='items-center w-[80%] mx-auto'>
                                <div className='relative border-2 h- border-[#C5CECC] w-full'></div>
                                <div className=' transform -translate-y-1 border-2 border-ourpink w-[30%]'></div>
                            </div>
                            <div className='items-center w-[80%] mx-auto'>
                                <div className='text-sm flex justify-between'>
                                    <p style={{ fontFamily: 'mincho' }} className=' my-2'>Lives Imparted - 307K</p>
                                    <p style={{ fontFamily: 'mincho' }} className=' my-2'>Goal - 1M</p>
                                </div>
                            </div>
                            <div className='items-center w-[80%] mx-auto'>
                                <button className='buttonprimary3 mb-6 mt-2 text-xs'>
                                    Donate Now
                                </button>
                            </div>



                        </div>

                    </div>

                    <div className='flex gap-4 justify-center'>
                        <button className='bg-white hover:bg-opacity-80 active:bg-opacity-100 px-2 py-2 rounded-full'>
                            <ChevronLeftRoundedIcon />
                        </button>

                        <button className='bg-white hover:bg-opacity-80 active:bg-opacity-100 px-2 py-2 rounded-full'>
                            <ChevronRightRoundedIcon />
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}
