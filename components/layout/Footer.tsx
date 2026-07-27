import Link from 'next/link'
import { links } from './navigations'

const Footer = () => {
  return (
    <footer className="bg-neutral-950 px-5 pb-8 pt-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="text-2xl font-black tracking-[0.12em] text-white"
          >
            HOUSSIN
          </Link>
          <p className="mt-3 max-w-md text-sm font-medium leading-6 text-white/60">
            Private Morocco tours shaped around real places, clear plans, and
            local stories.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.14em] text-white/60 transition duration-300 hover:text-orange-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm font-medium text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 Houssin Tours. All rights reserved.</p>
        <p>Made for memorable Morocco travel.</p>
      </div>
    </footer>
  )
}

export default Footer
