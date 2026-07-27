import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const contactCards = [
  {
    icon: Phone,
    label: 'Call Houssin',
    value: '+212 600 000 000',
    href: 'tel:+212600000000',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Fast trip planning',
    href: '#',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@houssin.tours',
    href: 'mailto:hello@houssin.tours',
  },
]

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Contact
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight lg:text-5xl">
              Tell me what kind of Morocco trip you want.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/70">
              Share your dates, group size, and the places you have in mind.
              Houssin will help shape a clear route with fair pricing, local
              insight, and enough flexibility for the good surprises.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon

              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition duration-300 group-hover:scale-105">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-[0.14em] text-white/50">
                      {card.label}
                    </span>
                    <span className="mt-1 block text-base font-bold text-white">
                      {card.value}
                    </span>
                  </span>
                </a>
              )
            })}
          </div>

          <div className="mt-8 grid gap-4 rounded-3xl bg-white p-5 text-neutral-950 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 text-orange-500" />
              <div>
                <p className="font-black">Based in Morocco</p>
                <p className="mt-1 text-sm font-medium leading-6 text-neutral-600">
                  Marrakech, desert routes, coast, and custom private trips.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays
                aria-hidden="true"
                className="mt-1 h-5 w-5 text-orange-500"
              />
              <div>
                <p className="font-black">Quick replies</p>
                <p className="mt-1 text-sm font-medium leading-6 text-neutral-600">
                  Send your details and get a simple plan to review.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-5 text-neutral-950 shadow-2xl shadow-black/20 sm:p-7 lg:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-neutral-700">Full name</span>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 h-13 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium outline-none transition duration-300 placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-neutral-700">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 h-13 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium outline-none transition duration-300 placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-neutral-700">Travel date</span>
              <input
                type="text"
                placeholder="Month or exact date"
                className="mt-2 h-13 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium outline-none transition duration-300 placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-neutral-700">Group size</span>
              <input
                type="text"
                placeholder="2 guests"
                className="mt-2 h-13 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium outline-none transition duration-300 placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-neutral-700">Tour idea</span>
            <select className="mt-2 h-13 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium outline-none transition duration-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100">
              <option>Marrakech day tour</option>
              <option>Chefchaouen tour</option>
              <option>Essaouira coastal escape</option>
              <option>Sahara desert adventure</option>
              <option>Custom private route</option>
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-neutral-700">Message</span>
            <textarea
              placeholder="Tell me your route, interests, budget, and anything important."
              rows={6}
              className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm font-medium leading-6 outline-none transition duration-300 placeholder:text-neutral-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </label>

          <button
            type="button"
            className="group relative mt-6 flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-orange-500 px-8 text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-orange-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-900/30 active:translate-y-0"
          >
            <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[420%]" />
            <span className="relative">Send Request</span>
          </button>

          <p className="mt-4 text-center text-xs font-medium leading-5 text-neutral-500">
            This form is ready for UI. Connect it to email, WhatsApp, or a backend
            handler when you want real submissions.
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
