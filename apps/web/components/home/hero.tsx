import React from 'react';
import { heroConst } from '@repo/constants/web';

const Hero = () => {
  return (
    <div>
      <h1>{heroConst.headline}</h1>
      <h4>{heroConst.subHeadline}</h4>
      <div>
        <button>{heroConst.primaryCTA}</button>
        <button>{heroConst.secondaryCTA}</button>
      </div>
    </div>
  )
};

export default Hero;