import BenefitsBanner from '@/components/home/BenefitsBanner'
import Hero from '@/components/home/Hero'
import Header from '@/components/layout/Header'
import React from 'react'

const page = () => {
  return (
    <main>
      <Header />
      <Hero />
      <BenefitsBanner />
      <section
        id="destinations"
        className="bg-white px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
            Explore
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black text-neutral-950 sm:text-4xl">
            Curated routes, clear days, and memorable local stops.
          </h2>
        </div>
      </section>
    </main>
  )
}

export default page
