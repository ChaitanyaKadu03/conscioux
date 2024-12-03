"use client"

import { signIn } from 'next-auth/react'
import React from 'react'

const Signin = () => {

  async function handleClick() {
    await signIn('google')
  }

  return (
    <>
      <div onClick={() => handleClick()}>Signin</div>
    </>
  )
}

export default Signin