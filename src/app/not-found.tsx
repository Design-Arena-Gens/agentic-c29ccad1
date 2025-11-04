import Link from 'next/link';

const NotFound = () => (
  <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
    <span className="rounded-full border border-neutral-200 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600">
      404
    </span>
    <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">We could not find that page</h1>
    <p className="max-w-xl text-sm text-neutral-500 sm:text-base">
      The listing or page you were looking for is unavailable. Explore the marketplace or post a new listing to support
      Somali learners.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/listings"
        className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
      >
        Browse listings
      </Link>
      <Link
        href="/sell"
        className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-600 transition hover:border-emerald-300 hover:text-emerald-600"
      >
        Create a listing
      </Link>
    </div>
  </div>
);

export default NotFound;
