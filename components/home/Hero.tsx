import Image from 'next/image'
import HeaderSearchItems from './HeaderSearchItems'

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-visible">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-32 pt-24 text-white sm:px-8 md:pb-40 lg:px-10 lg:pb-24">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
          Private tours in Morocco
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
          Discover places that stay with you.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
          Bespoke guided experiences, local stories, and warm routes designed
          around how you want to travel.
        </p>
      </div>

      <HeaderSearchItems />
    </section>
  )
}

export default Hero
