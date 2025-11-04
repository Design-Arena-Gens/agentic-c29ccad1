/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { Listing } from '@/lib/types';

interface ListingCardProps {
  listing: Listing;
}

const formatPrice = (price: number) => `$${price.toFixed(2)}`;

const formatRelativeTime = (isoDate: string) => {
  const created = new Date(isoDate);
  const diff = Date.now() - created.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export const ListingCard = ({ listing }: ListingCardProps) => (
  <Link
    href={`/listings/${listing.id}`}
    className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    <div className="relative">
      <img
        src={listing.images[0]}
        alt={listing.title}
        className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
      />
      {listing.featured ? (
        <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
          Featured
        </span>
      ) : null}
    </div>
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="flex items-center text-xs font-medium uppercase tracking-wide text-emerald-600">
        {listing.category}
        {listing.subcategory ? <span className="ml-2 text-neutral-400">• {listing.subcategory}</span> : null}
      </div>
      <h3 className="text-lg font-semibold text-neutral-900">{listing.title}</h3>
      <p className="line-clamp-2 text-sm text-neutral-600">{listing.description}</p>
      <div className="mt-auto flex items-center justify-between text-sm text-neutral-500">
        <span>{formatRelativeTime(listing.createdAt)}</span>
        <span className="font-semibold text-neutral-900">{formatPrice(listing.price)}</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-neutral-500">
          {listing.verifiedSeller ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-600">
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6.173 11.233L3.584 8.644l.943-.943 1.646 1.646 4.3-4.3.943.943-5.243 5.243z" />
              </svg>
              Verified seller
            </span>
          ) : (
            <span className="rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-500">
              Community seller
            </span>
          )}
        </div>
        <span className="text-neutral-500">{listing.deliveryOptions.join(' • ')}</span>
      </div>
    </div>
  </Link>
);
