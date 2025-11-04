import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { StepsSection } from '@/components/home/StepsSection';
import { ListingCard } from '@/components/listings/ListingCard';
import { sampleListings } from '@/data/sampleListings';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Trending in the marketplace
          </span>
          <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">Featured learning resources</h2>
          <p className="text-sm text-neutral-500 sm:text-base">
            Curated picks from trusted sellers across Mogadishu, Hargeisa, Bosaso, and beyond.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleListings.slice(0, 3).map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
      <CategoryGrid />
      <StepsSection />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-white p-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900">Partner with schools & NGOs</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Schools, community libraries, and NGOs can request verified accounts to list surplus inventory, learning
              kits, or donation drives. We encourage bulk discounts to keep education affordable throughout the year.
            </p>
            <a
              href="mailto:team@eduswap.so"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
            >
              Become a community partner →
            </a>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-sm text-neutral-600">
            <h4 className="text-lg font-semibold text-neutral-900">Upcoming roadmap</h4>
            <ul className="mt-4 space-y-3">
              <li>• School pickup hubs launching Q1 2025 in Mogadishu & Hargeisa</li>
              <li>• In-app payments via Hormuud EVC+ and Zaad to simplify settlements</li>
              <li>• Learning kit subscriptions for exam preparation cohorts</li>
              <li>• Verified teacher marketplace for virtual tutoring sessions</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
