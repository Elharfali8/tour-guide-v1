'use client'

import Link from 'next/link'
import { links } from './navigations'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        aria-hidden={!isOpen}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[min(86vw,22rem)] flex-col bg-white px-6 pb-8 pt-24 text-neutral-950 shadow-2xl shadow-black/25 transition-transform duration-500 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
            Menu
          </p>
          <p className="mt-2 text-2xl font-black tracking-[0.08em]">HOUSSIN</p>
        </div>

        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={onClose}
              className={`rounded-lg px-1 py-4 text-lg font-bold uppercase tracking-[0.12em] text-neutral-800 transition duration-300 hover:translate-x-1 hover:text-orange-600 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${180 + index * 70}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          onClick={onClose}
          className={`group relative mt-auto inline-flex h-13 items-center justify-center overflow-hidden rounded-full bg-orange-500 px-6 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-orange-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 active:translate-y-0 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: isOpen ? '420ms' : '0ms' }}
        >
          <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[420%]" />
          <span className="relative">Book Now</span>
        </Link>
      </aside>
    </>
  )
}

export default Sidebar
