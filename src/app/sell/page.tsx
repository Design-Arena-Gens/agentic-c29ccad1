'use client';

import { FormEvent, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/lib/firebase/client';
import { useAuth } from '@/components/providers/AuthProvider';
import { ListingCondition } from '@/lib/types';

const categories = [
  { value: 'Textbooks', label: 'Textbooks' },
  { value: 'Supplies', label: 'Supplies & Stationery' },
  { value: 'Educational Electronics', label: 'Educational Electronics' },
  { value: 'Tutoring & Services', label: 'Tutoring & Services' },
];

const SellPage = () => {
  const { user, loading, signInWithGoogle } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) {
      signInWithGoogle();
      return;
    }

    if (!firestore) {
      setError('Firestore is not configured. Add Firebase environment variables to enable publishing.');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      price: Number(formData.get('price') ?? 0),
      location: formData.get('location') as string,
      condition: formData.get('condition') as ListingCondition,
      deliveryOptions: (formData.get('deliveryOptions') as string).split(',').map((option) => option.trim()),
      images: [(formData.get('imageUrl') as string) || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=60'],
      sellerId: user.uid,
      sellerName: user.displayName ?? 'EduSwap Seller',
      sellerAvatar: user.photoURL ?? undefined,
      createdAt: serverTimestamp(),
      tags: (formData.get('tags') as string)
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    try {
      setSubmitting(true);
      setError(null);
      await addDoc(collection(firestore, 'listings'), payload);
      setSuccess(true);
      event.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError('We could not publish your listing. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 space-y-3 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Post a listing</span>
        <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">Share educational resources</h1>
        <p className="text-sm text-neutral-500 sm:text-base">
          Fill in the details to reach Somali learners who need affordable textbooks, supplies, and electronics.
        </p>
      </div>

      {!loading && !user ? (
        <div className="mb-8 rounded-3xl border border-neutral-200 bg-white p-6 text-center">
          <h2 className="text-lg font-semibold text-neutral-900">Sign in to post listings</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Use your Google account or school email to list educational resources and manage your inventory.
          </p>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
          >
            Continue with Google
          </button>
        </div>
      ) : null}

      <form
        className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Listing title
            <input
              required
              name="title"
              placeholder="Cambridge IGCSE Mathematics Textbook"
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Category
            <select
              name="category"
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Price (USD)
            <input
              required
              type="number"
              name="price"
              min="0"
              step="0.5"
              placeholder="25"
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Location
            <input
              required
              name="location"
              placeholder="Mogadishu"
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
          Description
          <textarea
            required
            name="description"
            rows={4}
            placeholder="Share condition, edition, included materials, and any delivery notes."
            className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </label>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Primary image URL
            <input
              name="imageUrl"
              placeholder="https://images.unsplash.com/..."
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
            <span className="text-xs font-normal text-neutral-400">
              Upload to Firebase Storage and paste the public URL for live listings.
            </span>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Condition
            <select
              name="condition"
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            >
              <option value="new">New</option>
              <option value="like-new">Like new</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Delivery options
            <input
              name="deliveryOptions"
              placeholder="Pickup, Nationwide Courier"
              defaultValue="Pickup, Nationwide Courier"
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            Tags (comma separated)
            <input
              name="tags"
              placeholder="IGCSE, Mathematics, Secondary"
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </label>
        </div>

        {error ? <p className="text-sm font-semibold text-red-500">{error}</p> : null}
        {success ? (
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-600">
            🎉 Listing created! It will appear once approved.
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-neutral-400"
          >
            {submitting ? 'Publishing...' : 'Publish listing'}
          </button>
          <span className="text-xs text-neutral-400">
            Listings are reviewed within 12 hours to maintain quality and authenticity.
          </span>
        </div>
      </form>
    </div>
  );
};

export default SellPage;
