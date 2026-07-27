import Image from 'next/image'

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'Instagram', href: '#' },
]

const AboutGuide = () => {
  return (
    <section id="about" className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-orange-200" />
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-100 shadow-2xl shadow-black/10">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/me.jpg"
                alt="Houssin, local tour guide in Morocco"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 right-5 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/10">
            <p className="text-3xl font-black text-orange-500">8+</p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">
              Years guiding
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            About Me
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-neutral-950 lg:text-5xl">
            I&apos;m Houssin, your local guide for honest Morocco experiences.
          </h2>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-neutral-600">
            I help travelers discover Morocco through real places, local stories,
            and relaxed routes that feel personal instead of rushed. From the
            quiet corners of Marrakech to coastal escapes and desert roads, I
            build each tour around comfort, safety, and the kind of moments you
            remember after the trip ends.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-2xl font-black text-neutral-950">Local</p>
              <p className="mt-2 text-sm font-medium leading-6 text-neutral-600">
                Born and raised with deep regional knowledge.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-50 p-5">
              <p className="text-2xl font-black text-neutral-950">Flexible</p>
              <p className="mt-2 text-sm font-medium leading-6 text-neutral-600">
                Routes can adapt to your pace and interests.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-950 p-5 text-white">
              <p className="text-2xl font-black">Trusted</p>
              <p className="mt-2 text-sm font-medium leading-6 text-white/70">
                Clear plans, fair prices, and friendly support.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {socialLinks.map((link) => (
              <button
                key={link.label}
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 px-6 text-sm font-bold uppercase tracking-[0.12em] text-neutral-800 transition duration-300 hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-900/20 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutGuide
