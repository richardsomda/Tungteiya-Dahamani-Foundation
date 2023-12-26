import React from 'react'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

export default function AboutUsIntro() {
    return (
        <div className='w-full flex justify-center mt-44 mb-28'>
            <div className='w-[70%]  mx-auto flex  justify-center '>

                <div className=' w-[45%]'>
                    <p className='text-ourpink my-1'>About us</p>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-3xl'>Empowering Lives, <br /> Inspiring Change</h1>
                    <p className='text-[#727272] text-sm w-[80%]  my-2'>Our core mission is to empower lives and inspire positive change. We envision a world where the grip of poverty and hunger is replaced with opportunities for growth and prosperity.
                    </p>

                    <button className='buttonprimary2 text-xs my-3'>
                        More About
                    </button>
                </div>



                <div className='bg-[#ECF1F0] w-[55%] py-6 flex items-center justify-center'>
                    <div className='w-full'>
                        <div className='w-[80%] mx-auto'>
                            <h1 style={{ fontFamily: 'mincho' }} className='font-bold   text-xl'>
                                Donations Receivable</h1 >
                            <div className='flex justify-between gap-12 text-sm w-full '>
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

                            <div className='flex justify-center  my-4 w-full'>
                                <div className='w-full mx-auto'>
                                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold my-2 text-xl'>Our Impact</h1>

                                    <div className='items-center'>
                                        <div className='relatie border-2 h- border-[#C5CECC] w-full'></div>
                                        <div className='absolut transform -translate-y-1 border-2 border-ourpink w-[37%]'></div>
                                    </div>
                                    <div className='text-sm flex justify-between'>
                                        <p className='font-semibold my-2'>Lives Imparted - 307K</p>
                                        <p className='font-semibold my-2'>Goal - 1M</p>
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
