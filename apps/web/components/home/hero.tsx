import React from 'react';
import { heroConst } from '@repo/constants/web';
import { EIBtnInType } from '@repo/types/web.js';
import Button from '../sub-components/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className='px-section bg-[url("https://i.ibb.co/HnJJP2D/home-hero-background.png")] bg-cover bg-center flex flex-row items-center justify-between'>
      <div className='flex flex-col gap-8 w-[680px]'>
        <div className='flex flex-row items-center bg-yellow-75 rounded-full w-fit py-1 px-1'>
          <p className='px-3 py-1 bg-yellow-300 rounded-full text-neutral-600 p3'>{heroConst.title}</p>
          <p className='px-3 text-neutral-500 p3'>{heroConst.text}</p>
        </div>
        <h1 className='h1-hero' dangerouslySetInnerHTML={{ __html: heroConst.headline }} />
        <h4 className='h6 text-neutral-40'>{heroConst.subHeadline} </h4>
        <div className='flex flex-row gap-8'>
          <Button type={EIBtnInType.PRIMARY} input={heroConst.primaryCTA} arrow={true} link="" background={true} />
          <Button type={EIBtnInType.SECONDARY} input={heroConst.secondaryCTA} arrow={true} link="" background={false} />
        </div>
      </div>
      <Image src={"https://i.ibb.co/mDyZLc9/hero.jpg"} alt='Conscioux' width={10} height={10} className='h-[680px] w-fit mix-blend-lighten' unoptimized={true} />
    </div>
  )
};

export default Hero;