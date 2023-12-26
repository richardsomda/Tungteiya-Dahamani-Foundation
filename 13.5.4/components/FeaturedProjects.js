import React from 'react'

export default function FeaturedProjects() {
    return (
        <>
            <div className='w-full flex'>
                <div className='bg-[#202D33] hover:flagshipbg w-[40%] py-12 px-16 h-72'>
                    <div className=' w-[90%]'>
                        <p className='text-ourpink my-1'>Our Flagship</p>
                        <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-white text-3xl'>Kaya Lahakani Project</h1>
                        <p className='text-white text-sm w-full font-regular my-2'>Kaya Lahakani Project is to empower young girls in underprivileged communities by providing them with valuable vocational skills. </p>
                        <button className='bg-ourpink px-6 py-3  rounded-full text-xs my-3'>
                            View Project
                        </button>
                    </div>
                </div>

                <div className='protwo w-[30%] py-12 px-16 h-72'></div>
                <div className='proone w-[30%] py-12 px-16 h-72'></div>

            </div>

            <div className='w-full flex'>
                <div className='prothree w-[20%] py-12 px-16 h-72'></div>
                <div className='profour w-[20%] py-12 px-16 h-72'></div>
                <div className='bg-ourpink w-[40%] flex flex-col justify-end  py-12 px-16 h-72'>
                    <div className='my-6'>
                        <button className='bg-[#E85353] mr-3 text-white rounded-full px-3 py-2 text-xs'>
                            Education
                        </button>
                        <button className='bg-[#E85353] mx-1 text-white rounded-full px-3 py-2 text-xs'>
                            Health
                        </button>
                        <button className='my-2  bg-[#E85353] mx-1 text-white rounded-full px-3 py-2 text-xs'>
                            Vocation
                        </button>
                        <button className='my-2  bg-[#E85353] mx-1 text-white rounded-full px-3 py-2 text-xs'>
                            Food & Water
                        </button>
                    </div>
                    <p className='text-2xl text-white'>
                        More than One Life <br /> Changed
                    </p>
                </div>

                <div className='profive w-[35%] py-12 px-16 h-72'></div>

            </div>

        </>

    )
}
