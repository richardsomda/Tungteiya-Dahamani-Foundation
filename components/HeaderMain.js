import React from 'react'
import HeaderOne from './HeaderOne'
import HeaderTwo from './HeaderTwo'
import MobHeader from './MobHeader'

export default function HeaderMain() {
    return (
        <div className=''>
            <div className='hidden md:block'>
                <HeaderOne />
            </div>
            <div className='hidden md:block'>
                <HeaderTwo />
            </div>
            <div className='md:hidden'>
                <MobHeader />
            </div>
        </div>
    )
}
