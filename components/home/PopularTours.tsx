import { tours } from '@/utils/tours'
import { ArrowRight, Clock, DollarSign, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PopularTours = () => {
  return (
    <section id="tours" className="bg-white py-14 text-neutral-950 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Handpicked Trips
            </p>
            <h3 className="mt-2 text-3xl font-black tracking-tight lg:text-4xl">
              Popular Tours
            </h3>
          </div>

          <button className="group inline-flex cursor-pointer items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-neutral-600 transition duration-300 hover:text-orange-600">
            See more
            <ArrowRight
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => {
            const { id, title, img, description, duration, price } = tour

            return (
              <article
                key={id}
                className="group flex h-full min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-900/10"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80 transition duration-500 group-hover:opacity-60" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-neutral-900 shadow-lg shadow-black/10">
                    <Clock aria-hidden="true" className="h-3.5 w-3.5 text-orange-500" />
                    {duration} {duration > 1 ? 'Days' : 'Day'}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-600">
                      <MapPin aria-hidden="true" className="h-4 w-4" />
                      Morocco
                    </div>
                    <h4 className="min-h-16 text-xl font-black leading-tight text-neutral-950">
                      {title}
                    </h4>
                    <p className="mt-3 min-h-12 text-sm font-medium leading-6 text-neutral-500">
                      {description}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-neutral-100 pt-5">
                    <div className="flex items-end justify-between gap-3">
                      <p className="text-sm font-semibold text-neutral-500">
                        From
                        <span className="mt-1 flex items-center text-2xl font-black text-neutral-950">
                          <DollarSign
                            aria-hidden="true"
                            className="h-5 w-5 text-orange-500"
                          />
                          {price}
                        </span>
                        <span className="text-xs font-medium text-neutral-500">
                          / person
                        </span>
                      </p>

                      <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition duration-300 group-hover:bg-orange-500 group-hover:shadow-lg group-hover:shadow-orange-900/20">
                        <ArrowRight aria-hidden="true" className="h-5 w-5" />
                        <span className="sr-only">View {title}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PopularTours
