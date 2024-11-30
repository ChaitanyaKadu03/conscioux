"use client"

import { signIn } from '@/auth'
import React from 'react'

const Signin = () => {

  async function signmein() {
    await signIn("google")
  }

  return (
    <button className='text-white' onClick={()=>{signmein()}}>Signin</button>
  )
}

export default Signin