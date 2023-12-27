import React from 'react'

export default function Newsletter() {
    return (
        <div className='w-full bg-[#2E4049] py-16 '>

            <div className='w-[90%] md:w-[60%] mx-auto'>
                <p className='text-ourpink my-1 text-center'>Subscribe</p>
                <h1 style={{ fontFamily: 'mincho' }} className='font-bol text-center text-white text-2xl'>Join Our Newsletter</h1>
                <p className='text-white my-1 text-center'>Sign up for our monthly newsletter to get the latest news, volunteer opportunities,</p>

                <div className='w-full md:w-[50%] my-6 focus-within:border-ourpink  flex items-center border-2  py-1 px-3 bg-white rounded-full mx-auto'>

                    <div className='w-[75%] founded-full px-3 text-lg'>
                        <input className='bg-transparent outline-none w-full rounded-full' type="text" />
                    </div>

                    <div className='w-[25%] md:mr-0 mr-4'>
                        <button className='bg-[#2E4049] text-white px-4 py-2  rounded-full'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
