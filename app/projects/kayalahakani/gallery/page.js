import ProjectGalleryComponent from '@/components/ProjectGalleryComponent'
import Image from 'next/image'
import React from 'react'


export default function page() {
    return (
        <div className='w-full md:w-[90%] mx-auto'>
            {/* <h1 className='w-[55%] mx-auto text-2xl my-2'>kaya lahakani <span className='font-bold'>/Project Gallery</span></h1> */}
            {/* gallery */}
            <div className='w-full md:w-[80%] mx-auto'>
                <div className='w-[80%] md:w-[70%] mx-auto rounded-3xl'>
                    <ProjectGalleryComponent
                        projectFolder={'kayaphotos'}
                        numImages={107}
                        className='rounded-3xl'
                        imagesPerPage={1}

                    />
                </div>
            </div>

        </div>
    )
}
