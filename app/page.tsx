import BenefitsBanner from '@/components/home/BenefitsBanner'
import AboutGuide from '@/components/home/AboutGuide'
import Hero from '@/components/home/Hero'
import PopularPlaces from '@/components/home/PopularTours'
import Header from '@/components/layout/Header'
import React from 'react'

const page = () => {
  return (
    <main className='bg-white'>
      <Header />
      <Hero />
      <BenefitsBanner />
      <PopularPlaces />
      <AboutGuide />
    </main>
  )
}

export default page
