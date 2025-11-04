/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';

const navLinks = [
  { label: 'Explore', href: '/listings' },
  { label: 'Sell', href: '/sell' },
  { label: 'Community', href: '/community' },
  { label: 'Resources', href: '/resources' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const { user, profile, signInWithGoogle, signOutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-semibold text-emerald-600">
          EduSwap Somalia
        </Link>

        <button
          type="button"
          className="sm:hidden rounded-md border border-neutral-300 p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-full border-b border-neutral-200 bg-white px-6 pb-4 sm:static sm:flex sm:h-auto sm:items-center sm:gap-8 sm:border-none sm:bg-transparent sm:p-0`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition hover:text-emerald-600 ${
                  isActive ? 'text-emerald-700' : 'text-neutral-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/sell"
            className="hidden rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 sm:inline-flex"
          >
            Post a Listing
          </Link>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          {!user ? (
            <button
              type="button"
              className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
              onClick={signInWithGoogle}
            >
              Sign in
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-2 text-sm text-neutral-700">
                <img
                  src={profile?.photoURL ?? user.photoURL ?? 'https://api.dicebear.com/9.x/initials/svg?seed=EduSwap'}
                  alt="Profile avatar"
                  className="h-9 w-9 rounded-full border border-neutral-200 object-cover"
                />
                <span className="hidden text-sm font-medium sm:inline">
                  {profile?.displayName ?? user.displayName ?? 'Your profile'}
                </span>
              </Link>
              <button
                type="button"
                onClick={signOutUser}
                className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
