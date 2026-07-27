'use client'

import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const testimonials = [
  {
    name: 'Amelia Carter',
    country: 'United Kingdom',
    trip: 'Marrakech Day Tour',
    quote:
      'Houssin made the city feel easy, warm, and personal. We saw beautiful places, but the stories behind them were what made the day special.',
  },
  {
    name: 'Lucas Martin',
    country: 'France',
    trip: 'Sahara Desert Adventure',
    quote:
      'Everything was clear from the first message. The desert route was comfortable, well timed, and full of small stops we would never have found alone.',
  },
  {
    name: 'Sofia Alvarez',
    country: 'Spain',
    trip: 'Essaouira Coastal Escape',
    quote:
      'A relaxed and thoughtful experience. Houssin gave us space when we wanted it and great local context when we asked questions.',
  },
  {
    name: 'Daniel Kim',
    country: 'Canada',
    trip: 'Chefchaouen Tour',
    quote:
      'Professional, kind, and very patient. The whole trip felt safe and flexible, especially with our family schedule changing during the day.',
  },
  {
    name: 'Maya Jensen',
    country: 'Denmark',
    trip: 'Custom Morocco Route',
    quote:
      'The best part was how natural it felt. No rushed checklist, just a beautiful route with good food, real conversation, and thoughtful planning.',
  },
]

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleTestimonials = useMemo(() => {
    return [0, 1, 2].map((offset) => {
      const index = (activeIndex + offset) % testimonials.length

      return testimonials[index]
    })
  }, [activeIndex])

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  useEffect(() => {
    const interval = window.setInterval(goToNext, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="overflow-hidden bg-neutral-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Testimonials
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-neutral-950 lg:text-5xl">
              Travelers remember the way the trip felt.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={goToPrevious}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 shadow-sm shadow-black/5 transition duration-300 hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-900/20"
            >
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-orange-900/20"
            >
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${activeIndex}`}
              className={`flex min-h-80 flex-col rounded-3xl border bg-white p-6 shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-900/10 ${
                index === 0
                  ? 'border-orange-200 md:scale-100'
                  : 'border-neutral-100 md:scale-[0.97] md:opacity-80'
              }`}
            >
              <div className="flex items-center gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                    strokeWidth={1.8}
                  />
                ))}
              </div>

              <p className="mt-6 flex-1 text-base font-medium leading-8 text-neutral-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8 border-t border-neutral-100 pt-5">
                <p className="text-lg font-black text-neutral-950">
                  {testimonial.name}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-neutral-500">
                  <span>{testimonial.country}</span>
                  <span aria-hidden="true" className="text-orange-500">
                    /
                  </span>
                  <span>{testimonial.trip}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-9 bg-orange-500'
                  : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
