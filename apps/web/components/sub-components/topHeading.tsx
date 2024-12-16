import { ITopHeading } from '@repo/types/web.js'
import React from 'react'

const TopHeading = ({ h6, h2, h4 }: ITopHeading) => {
    return (
        <div className='flex flex-col items-center w-[820px] text-center gap-4'>
            <h4 className='h4-title text-neutral-60'>{h4}</h4>
            <h2 className='h2 text-neutral-0'>{h2}</h2>
            <h6 className='h6 text-neutral-40'>{h6}</h6>
        </div>
    )
}

export default TopHeading