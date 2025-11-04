import Link from 'next/link';

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-emerald-50">
    <div className="absolute right-32 top-10 hidden h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl sm:block" />
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-28">
      <span className="rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
        Empowering Somali Learners
      </span>
      <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
        Swap, sell, and discover educational resources tailored for Somalia.
      </h1>
      <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
        EduSwap Somalia is the first C2C marketplace dedicated to textbooks, supplies, and learning electronics.
        Discover verified sellers, trusted resources, and a community committed to advancing education.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/listings"
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
        >
          Explore marketplace
        </Link>
        <Link
          href="/sell"
          className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-emerald-300 hover:text-emerald-600"
        >
          Start selling
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { metric: '70+', label: 'Active sellers across regions' },
          { metric: '1.8k', label: 'Educational items listed in 2024' },
          { metric: '35%', label: 'Average savings for learners' },
        ].map((stat) => (
          <div key={stat.metric} className="rounded-2xl border border-emerald-100 bg-white/80 p-6">
            <div className="text-3xl font-semibold text-emerald-600">{stat.metric}</div>
            <div className="mt-1 text-sm text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
