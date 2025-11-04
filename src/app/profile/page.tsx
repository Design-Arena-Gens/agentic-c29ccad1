'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/components/providers/AuthProvider';
import { sampleListings } from '@/data/sampleListings';
import { ListingCard } from '@/components/listings/ListingCard';

const ProfilePage = () => {
  const { user, profile, loading, signInWithGoogle } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">You are not signed in</h1>
        <p className="max-w-xl text-sm text-neutral-500 sm:text-base">
          Sign in with Google to manage your listings, saved searches, and seller reputation.
        </p>
        <button
          type="button"
          onClick={signInWithGoogle}
          className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col gap-8 rounded-3xl border border-neutral-200 bg-white p-10 shadow-sm lg:flex-row">
        <div className="flex flex-col items-center gap-4 text-center lg:w-1/3 lg:text-left">
          <Image
            src={profile?.photoURL ?? user.photoURL ?? 'https://api.dicebear.com/9.x/initials/svg?seed=EduSwap'}
            alt="Profile avatar"
            width={96}
            height={96}
            className="rounded-full border border-neutral-200"
          />
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900">{profile?.displayName ?? user.displayName}</h1>
            <p className="mt-1 text-sm text-neutral-500">{profile?.email ?? user.email}</p>
            {profile?.location ? (
              <p className="mt-1 text-sm text-neutral-500">Based in {profile.location}</p>
            ) : null}
          </div>
          <Link
            href="/sell"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Post New Listing
          </Link>
        </div>
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Seller reputation</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <div className="text-2xl font-semibold text-neutral-900">12</div>
                <p className="mt-1 text-xs text-neutral-500">Listings published</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <div className="text-2xl font-semibold text-neutral-900">4.9</div>
                <p className="mt-1 text-xs text-neutral-500">Average rating</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <div className="text-2xl font-semibold text-neutral-900">28</div>
                <p className="mt-1 text-xs text-neutral-500">Successful trades</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Your active listings</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Manage inventory, update availability, or mark items as donated.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {sampleListings.slice(0, 2).map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
