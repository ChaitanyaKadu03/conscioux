import { copyrightConst, socialMediaConst } from '@repo/constants/web'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        {socialMediaConst.map((info) => {
          return (
            <Image alt={info.name} key={info.id} src={info.logo} height={100} width={100}/>
          )
        })}
      </div>
      <p>{copyrightConst}</p>
    </div>
  )
}

export default Footer