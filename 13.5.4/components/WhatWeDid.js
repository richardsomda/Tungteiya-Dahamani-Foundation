import React from 'react'
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import HdrWeakOutlinedIcon from '@mui/icons-material/HdrWeakOutlined';

export default function WhatWeDid() {
    return (
        <div className='w-full'>
            <div className='w-[70%] mx-auto py-16'>
                <div className=''>
                    <p className='text-ourpink text-center my-1'>What We Do</p>
                    <h1 style={{ fontFamily: 'mincho' }} className='text-center font-bold text-3xl'>We do it for People in Need</h1>

                    {/* row one */}
                    <div className=' my-16 flex items-center justify-center'>
                        <div className='w-[30%] flex flex-col gap-1 justify-center items-center'>
                            <div className='text-2xl'>
                                <StreamOutlinedIcon className='text-ourpink w-10 h-10 ' />
                            </div>
                            <h1 className='font-semibold text-center'>Vocational Training</h1>
                            <p className='text-[#727272] w-[90%]  text-sm text-center'>Our flagship project, Kaya Lahakani, focuses on empowering young girls with vocational skills such as sewing, hairdressing, and smock weaving. </p>
                        </div>
                        <div className='w-[30%] flex flex-col gap-1 justify-center items-center'>
                            <div className='text-2xl'>
                                <BloodtypeOutlinedIcon className='text-ourpink w-10 h-10 ' />
                            </div>
                            <h1 className='font-semibold text-center'> Health Initiatives</h1>
                            <p className='text-[#727272] w-[90%]  text-sm text-center'>We prioritize health with projects like breast screening exercises, menstrual health support, and reproductive health symposiums.</p>
                        </div>
                        <div className='w-[30%] flex flex-col gap-1 justify-center items-center'>
                            <div className='text-2xl'>
                                <WaterDropOutlinedIcon className='text-ourpink w-10 h-10 ' />
                            </div>
                            <h1 className='font-semibold text-center'>Water Access and Sanitation</h1>
                            <p className='text-[#727272] w-[90%]  text-sm text-center'>In collaboration with organizations like Universal Islamic and Cultural Trust, we commission boreholes to improve access to clean water. </p>
                        </div>
                    </div>
                    <div className=' my-16 flex items-center justify-center'>
                        <div className='w-[30%] flex flex-col gap-1 justify-center items-center'>
                            <div className='text-2xl'>
                                <StreamOutlinedIcon className='text-ourpink w-10 h-10 ' />
                            </div>
                            <h1 className='font-semibold text-center'> Hunger Mitigation and Food Security</h1>
                            <p className='text-[#727272] w-[90%]  text-sm text-center'>We are actively involved in initiatives addressing hunger challenges. From farming food crops to donating food items to widowed and aged women.</p>
                        </div>
                        <div className='w-[30%] flex flex-col gap-1 justify-center items-center'>
                            <div className='text-2xl'>
                                <BloodtypeOutlinedIcon className='text-ourpink w-10 h-10 ' />
                            </div>
                            <h1 className='font-semibold text-center'>Education Empowerment</h1>
                            <p className='text-[#727272] w-[90%]  text-sm text-center'> Beyond the Kaya Lahakani project, we support special needs students with donations and advocate for education accessibility to empower all inclusively

                            </p>
                        </div>
                        <div className='w-[30%] flex flex-col gap-1 justify-center items-center'>
                            <div className='text-2xl'>
                                <HdrWeakOutlinedIcon className='text-ourpink w-10 h-10 ' />
                            </div>
                            <h1 className='font-semibold text-center'>Solutions for Evolving Needs</h1>
                            <p className='text-[#727272] w-[80%]  text-sm text-center'>Our work extends beyond these themes, and we continuously adapt our strategies to meet the evolving needs of the communities we serve.</p>
                        </div>
                    </div>
                    {/*                     
                    <p className='text-[#727272] text-sm w-[80%]  my-2'>envisions a world where no one has to suffer from poverty and hunger.  <br /> <br /> It aims to create a global community where every individual, regardless of their background, has access to the resources...
                    </p>

                    <button className='buttonprimary2 text-xs my-3'>
                        More About
                    </button> */}
                </div>
            </div>
        </div>
    )
}
