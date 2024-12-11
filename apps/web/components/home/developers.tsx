import { developersConst } from '@repo/constants/web'
import React from 'react'

const Developers = () => {
  return (
    <div>
      <h3>{developersConst.title}</h3>
      <p>{developersConst.body}</p>
      <button>{developersConst.cta}</button>
    </div>
  )
}

export default Developers