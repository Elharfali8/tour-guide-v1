const searchItems = [
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5h.01" />
      </svg>
    ),
    label: 'Where to?',
    value: 'Search destinations',
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
        />
      </svg>
    ),
    label: 'Tour Type',
    value: 'All types',
    hasChevron: true,
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 3v3m8-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        />
      </svg>
    ),
    label: 'Date',
    value: 'Select date',
    hasChevron: true,
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 20a6 6 0 0 0-12 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
      </svg>
    ),
    label: 'Guests',
    value: '2 Guests',
    hasChevron: true,
  },
]

const HeaderSearchItems = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 rounded-3xl bg-white p-3 text-neutral-950 shadow-2xl shadow-black/20 sm:p-4 lg:h-24 lg:flex-row lg:items-center lg:gap-0 lg:rounded-2xl lg:p-5">
        <div className="grid flex-1 grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-0">
          {searchItems.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`group flex min-w-0 items-center gap-3 rounded-2xl bg-neutral-50 px-3 py-3 text-left transition duration-300 hover:bg-orange-50 sm:gap-4 sm:px-4 sm:py-4 lg:rounded-none lg:bg-transparent lg:px-5 ${
                index > 0 ? 'lg:border-l lg:border-neutral-200' : ''
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-800 shadow-sm shadow-black/5 transition duration-300 group-hover:bg-orange-100 group-hover:text-orange-600 sm:h-10 sm:w-10 lg:h-auto lg:w-auto lg:rounded-none lg:bg-transparent lg:shadow-none">
                {item.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-black sm:text-xs">
                  {item.label}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-neutral-500 sm:gap-2 sm:text-sm">
                  <span className="truncate">{item.value}</span>
                  {item.hasChevron ? (
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  ) : null}
                </span>
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="group relative h-13 overflow-hidden rounded-full bg-orange-500 px-8 text-sm font-black text-white shadow-lg shadow-orange-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-900/30 active:translate-y-0 sm:h-14 lg:ml-5 lg:w-40"
        >
          <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[420%]" />
          <span className="relative">Search Tours</span>
        </button>
      </div>
    </div>
  )
}

export default HeaderSearchItems
