'use client'

import Link from 'next/link'
import { links } from './navigations'

type NavbarProps = {
  isScrolled: boolean
  isMenuOpen: boolean
  onMenuToggle: () => void
}

const Navbar = ({ isScrolled, isMenuOpen, onMenuToggle }: NavbarProps) => {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
      <Link
        href="/"
        className={`text-2xl font-black tracking-[0.12em] transition-colors duration-500 ${
          isScrolled ? 'text-neutral-950' : 'text-white'
        }`}
      >
        HOUCEIN
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`text-sm font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
              isScrolled
                ? 'text-neutral-700 hover:text-orange-600'
                : 'text-white/90 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="#contact"
        className="group relative hidden h-12 items-center justify-center overflow-hidden rounded-full bg-orange-500 px-6 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-orange-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-900/30 active:translate-y-0 md:inline-flex"
      >
        <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[420%]" />
        <span className="relative">Book Now</span>
      </Link>

      <button
        type="button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={onMenuToggle}
        className={`relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 md:hidden ${
          isScrolled || isMenuOpen
            ? 'border-neutral-200 bg-white text-neutral-950 shadow-lg shadow-black/10'
            : 'border-white/30 bg-white/10 text-white backdrop-blur-sm'
        }`}
      >
        <span className="relative h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
              isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>
    </nav>
  )
}

export default Navbar
