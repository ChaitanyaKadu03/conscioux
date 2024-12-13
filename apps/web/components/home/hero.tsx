import React from 'react';
import { heroConst } from '@repo/constants/web';
import { EIBtnInType } from '@repo/types/web.js';
import Button from '../sub-components/button';

const Hero = () => {
  return (
    <div className='px-section py-section flex flex-col items-center gap-8 text-center'>
      <span className='h-[28%] w-[42%] bg-neutral-80 absolute z-[-1] blur-[120px] opacity-40 top-[32%]' />
      {/* <span className='h-[5%] w-[24%] bg-neutral-10 absolute z-[-1] blur-md opacity-80 top-[34%]' /> */}
      <h1 className='h1-hero' dangerouslySetInnerHTML={{ __html: heroConst.headline }} />
      <h4 className='h6 w-[40%] text-neutral-40'>{heroConst.subHeadline} </h4>
      <div className='flex flex-row gap-8'>
        <Button type={EIBtnInType.PRIMARY} input={heroConst.primaryCTA} arrow={true} link="" background={true} />
        <Button type={EIBtnInType.SECONDARY} input={heroConst.secondaryCTA} arrow={true} link="" background={false} />
      </div>
    </div>
  )
};

export default Hero;