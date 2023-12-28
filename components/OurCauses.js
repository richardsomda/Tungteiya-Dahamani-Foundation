import Image from 'next/image'
import React from 'react'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';


export default function OurCauses() {
    return (
        <div className='bg-ouryellow py-12'>

            <div className='w-[60%]   mx-auto'>
                <div className=' flex flex-wrap md:flex justify-between items-center'>
                    <div className='w-[70%]'>
                        <p className=' my-1'>Our Causes</p>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold md:w-[80%] w-full text-2xl md:text-3xl'>Transforming Little Donations <br /> into Big Impacts</h1>
                    </div>

                    <button className='buttonprimary2 text-xs my-6'>
                        More Causes
                    </button>
                </div>
            </div>


            {/* projects */}
            <div className='flex items-center justify-center'>
                <div className='w-[70%]'>
                    <div className='flex flex-wrap md:flex justify-center gap-4 my-12'>
                        <div className='w-full md:w-[25%] cursor-pointer my-3   bg-white'>
                            {/* <Image
                                src={'/pro2.jpg'}
                                width={200}
                                height={50}
                                className='full'

                            /> */}

                            <div className='h-44 proImage1'></div>

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
                        <div className='w-full md:w-[25%] cursor-pointer my-3   bg-white'>
                            {/* <Image
                                src={'/pro2.jpg'}
                                width={200}
                                height={50}
                                className='full'

                            /> */}

                            <div className='h-44 proImage1'></div>

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
                        <div className='w-full md:w-[25%] cursor-pointer my-3   bg-white'>
                            {/* <Image
                                src={'/pro2.jpg'}
                                width={200}
                                height={50}
                                className='full'

                            /> */}

                            <div className='h-44 proImage1'></div>

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

                    <div className=' gap-4 hidden md:flex justify-center'>
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
