import React from 'react'
import Hero from './Hero'
import AboutUsIntro from './AboutUsIntro'
import OurCauses from './OurCauses'
import BecomeAVolunteer from './BecomeAVolunteer'
import WhatWeDid from './WhatWeDid'
import FeaturedProjects from './FeaturedProjects'
import Tally from './Tally'
import OurTeam from './OurTeam'
import Newsletter from './Newsletter'

export default function LandingPage() {
    return (
        <div className=''>
            <Hero />
            <div className='mt-[800px] md:my-2'>
                <AboutUsIntro />
            </div>

            <OurCauses />
            <BecomeAVolunteer />
            <WhatWeDid />
            <FeaturedProjects />
            <Tally />
            <OurTeam />
            <Newsletter />


        </div>


    )
}
