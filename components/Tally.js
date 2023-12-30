import React from 'react'

export default function Tally() {
    return (
        <>
            <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-3xl mt-32 text-center text-ourblack'>Our Ipact So Far</h1>

            <div className='w-[60%] mx-auto flex flex-wrap  md:flex justify-center gap-10 my-32'>


                <div className='w-full md:w-[27%] md:my-2 my-4'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-4xl text-center text-ourblack'>GHS 200K</h1>
                    <p className='text-center text-[#727272] w-[70%] my-2 mx-auto'>Worth Of Generous Donations Received </p>
                </div>
                <div className='w-full md:w-[27%] md:my-2 my-4'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-4xl text-center text-ourblack'>15 Projects</h1>
                    <p className='text-center text-[#727272] w-[70%] my-2 mx-auto'>Well and Succesfully executed</p>
                </div>
                <div className='w-full md:w-[27%] md:my-2 my-4'>
                    <h1 style={{ fontFamily: 'mincho' }} className='font-bold text-4xl text-center text-ourblack'>307K Lives</h1>
                    <p className='text-center text-[#727272] w-[70%] mx-auto my-2'>Impacted through our compelling projects</p>
                </div>
            </div>
        </>
    )
}
