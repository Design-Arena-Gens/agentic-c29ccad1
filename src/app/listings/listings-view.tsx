'use client';

import { useSearchParams } from 'next/navigation';
import { useListings } from '@/hooks/useListings';
import { ListingCard } from '@/components/listings/ListingCard';

const categories = ['All', 'Textbooks', 'Supplies', 'Educational Electronics', 'Tutoring & Services'];

export const ListingsView = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const normalizedCategory = categoryParam === 'all' ? null : categoryParam;
  const { listings, loading } = useListings({
    category: normalizedCategory,
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 sm:items-center sm:text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
          Marketplace Inventory
        </span>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">Browse educational resources</h1>
        <p className="text-sm text-neutral-500 sm:max-w-2xl sm:text-base">
          Filter by category to discover textbooks, supplies, and electronics from trusted sellers across Somali regions.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {categories.map((category) => {
          const value = category.toLowerCase().replace(/\s+/g, '-');
          const isActive =
            (!normalizedCategory && category === 'All') || value === normalizedCategory?.toLowerCase();
          return (
            <a
              key={category}
              href={category === 'All' ? '/listings' : `/listings?category=${value}`}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-neutral-200 bg-white text-neutral-600 hover:border-emerald-300 hover:text-emerald-600'
              }`}
            >
              {category}
            </a>
          );
        })}
      </div>

      <div className="mt-12">
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500" />
          </div>
        ) : listings.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-neutral-200 bg-white p-16 text-center">
            <h2 className="text-2xl font-semibold text-neutral-900">No listings yet</h2>
            <p className="max-w-md text-sm text-neutral-500 sm:text-base">
              There are no items in this category just yet. Be the first to list a resource and support Somali learners.
            </p>
            <a
              href="/sell"
              className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Create a listing
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
