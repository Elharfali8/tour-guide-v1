import BenefitsBanner from '@/components/home/BenefitsBanner'
import AboutGuide from '@/components/home/AboutGuide'
import ContactSection from '@/components/home/ContactSection'
import Hero from '@/components/home/Hero'
import PopularPlaces from '@/components/home/PopularTours'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
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
      <TestimonialsCarousel />
      <ContactSection />
    </main>
  )
}

export default page
