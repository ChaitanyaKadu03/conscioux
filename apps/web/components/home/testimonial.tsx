import { testimonialsConst } from '@repo/constants/web'
import React from 'react'

const Testimonial = () => {
  return (
    <div>
      {testimonialsConst.map((info)=> {
        return (
          <div key={info.id}>
            <p>{info.username}</p>
            <p>{info.username}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Testimonial