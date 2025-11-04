'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { useListing } from '@/hooks/useListing';

const ListingDetailPage = () => {
  const params = useParams<{ id: string }>();
  const listingId = params?.id ?? null;
  const { listing, loading } = useListing(listingId);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500" />
      </div>
    );
  }

  if (!listing) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={listing.images[0]}
              alt={listing.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-neutral-900">Description</h2>
            <p className="mt-3 text-sm text-neutral-600">{listing.description}</p>
            {listing.tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {listing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              {listing.category}
            </span>
            <h1 className="mt-3 text-3xl font-semibold text-neutral-900">{listing.title}</h1>
            <div className="mt-6 text-3xl font-semibold text-neutral-900">${listing.price.toFixed(2)}</div>
            <div className="mt-4 text-sm text-neutral-500">
              Condition: <span className="font-semibold text-neutral-700">{listing.condition}</span>
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              Location: <span className="font-semibold text-neutral-700">{listing.location}</span>
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              Delivery: <span className="font-semibold text-neutral-700">{listing.deliveryOptions.join(' • ')}</span>
            </div>
            {listing.stock ? (
              <div className="mt-3 text-sm text-emerald-600">Stock available: {listing.stock}</div>
            ) : null}
            <div className="mt-8 space-y-3">
              <button
                type="button"
                className="w-full rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Message seller
              </button>
              <button
                type="button"
                className="w-full rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-emerald-300 hover:text-emerald-600"
              >
                Save listing
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <Image
                src={listing.sellerAvatar ?? 'https://api.dicebear.com/9.x/initials/svg?seed=EduSwap'}
                alt={listing.sellerName}
                width={56}
                height={56}
                className="rounded-full border border-neutral-200"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900">{listing.sellerName}</p>
                <p className="text-xs text-neutral-500">Active educator community member</p>
              </div>
            </div>
            {listing.verifiedSeller ? (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.173 11.233L3.584 8.644l.943-.943 1.646 1.646 4.3-4.3.943.943-5.243 5.243z" />
                </svg>
                Verified organization partner
              </div>
            ) : null}
            <div className="mt-6 text-sm text-neutral-600">
              We encourage safe meetups in well-lit public spaces and provide optional pickup hubs in Mogadishu,
              Hargeisa, and Bosaso. For courier deliveries, confirm payment via EVC+ or Zaad once the item arrives.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ListingDetailPage;
