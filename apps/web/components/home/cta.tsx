import { ctaConst } from '@repo/constants/web'
import React from 'react'

const Cta = () => {
  return (
    <div>
      <h3>{ctaConst.title}</h3>
      <p>{ctaConst.body}</p>
      <button>{ctaConst.cta}</button>
    </div>
  )
}

export default Cta