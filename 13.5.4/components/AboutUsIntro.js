import React from 'react'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

export default function AboutUsIntro() {
    return (
        <div className='w-full flex justify-center my-44'>
            <div className='w-[60%]  mx-auto flex  justify-center '>

                <div className=' w-[60%]'>
                    <p className='text-ourpink my-1'>About us</p>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-3xl'>Help People,  <br /> Our Main Goals</h1>
                    <p className='text-[#727272] text-sm w-[80%]  my-2'>envisions a world where no one has to suffer from poverty and hunger.  <br /> <br /> It aims to create a global community where every individual, regardless of their background, has access to the resources...
                    </p>

                    <button className='buttonprimary2 text-xs my-3'>
                        More About
                    </button>
                </div>

                <div className='bg-[#ECF1F0] w-[45%] py-6 flex items-center justify-center'>
                    <div>
                        <div>
                            <div className='flex justify-between gap-12 text-sm '>
                                <div>
                                    <div className='flex gap-2 my-2 items-center'>
                                        <RadioButtonCheckedOutlinedIcon className='text-[#77D7D3]' />
                                        <p className='text-[#727272]'>Food Donation </p>
                                    </div>
                                    <div className='flex gap-2 my-2 items-center'>
                                        <RadioButtonCheckedOutlinedIcon className='text-[#77D7D3]' />
                                        <p className='text-[#727272]'>Money Donation </p>
                                    </div>
                                    <div className='flex gap-2 my-2 items-center'>
                                        <RadioButtonCheckedOutlinedIcon className='text-[#77D7D3]' />
                                        <p className='text-[#727272]'>Dress Donation </p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-2 my-2 items-center'>
                                        <RadioButtonCheckedOutlinedIcon className='text-[#77D7D3]' />
                                        <p className='text-[#727272]'>Water Donation </p>
                                    </div>
                                    <div className='flex gap-2 my-2 items-center'>
                                        <RadioButtonCheckedOutlinedIcon className='text-[#77D7D3]' />
                                        <p className='text-[#727272]'>Education Donation </p>
                                    </div>
                                    <div className='flex gap-2 my-2 items-center'>
                                        <RadioButtonCheckedOutlinedIcon className='text-[#77D7D3]' />
                                        <p className='text-[#727272]'>Toys Donation </p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center my-4'>
                                <div>
                                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold my-2 text-xl'>Our Impact</h1>

                                    <div className='items-center'>
                                        <div className='relative border-2 h- border-[#C5CECC] w-80'></div>
                                        <div className='absolute transform -translate-y-1 border-2 border-ourpink w-32'></div>
                                    </div>
                                    <div className='text-sm flex justify-between'>
                                        <p style={{ fontFamily: 'mincho' }} className='font-semibold my-2'>Lives Imparted - 307K</p>
                                        <p style={{ fontFamily: 'mincho' }} className='font-semibold my-2'>Goal - 1M</p>
                                    </div>
                                </div>
                            </div>

                            <button className='buttonsecondary my- text-xs'>
                                Donate Now
                            </button>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}
