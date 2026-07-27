import { BadgePercent, Globe2, Headphones, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: Globe2,
    title: 'Local Expertise',
    description: 'Our guides are local experts who share real stories.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Trusted',
    description: 'Your safety and comfort are our top priorities.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: "We're here for you anytime, anywhere.",
  },
  {
    icon: BadgePercent,
    title: 'Best Price',
    description: 'Top experiences at the best value.',
  },
]

const BenefitsBanner = () => {
  return (
    <section className="bg-white px-5 pb-12 pt-56 sm:px-8 sm:pt-52 md:pt-48 lg:px-10 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {benefits.map((benefit) => {
          const Icon = benefit.icon

          return (
            <article
              key={benefit.title}
              className="flex items-center gap-5 rounded-2xl bg-white p-2"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500 sm:h-18 sm:w-18">
                <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-lg font-black text-neutral-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 max-w-56 text-sm font-medium leading-6 text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BenefitsBanner
