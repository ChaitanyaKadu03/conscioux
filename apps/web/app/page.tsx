import Cta from '@/components/home/cta'
import Dashboard from '@/components/home/dashboard'
import Developers from '@/components/home/developers'
import Features from '@/components/home/features'
import Footer from '@/components/home/footer'
import Hero from '@/components/home/hero'
import Navbar from '@/components/home/navbar'
import Testimonial from '@/components/home/testimonial'
import Work from '@/components/home/work'
import { url } from 'inspector'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <Dashboard />
      <Features />
      {/* <Work />
      <Cta />
      <Footer /> */}
    </>
  )
}

export default Home