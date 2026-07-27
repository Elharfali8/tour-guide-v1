'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 py-3 text-neutral-950 shadow-lg shadow-black/5 backdrop-blur-md'
            : 'bg-transparent py-5 text-white'
        }`}
      >
        <Navbar
          isScrolled={isScrolled}
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen((open) => !open)}
        />
      </header>
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header
