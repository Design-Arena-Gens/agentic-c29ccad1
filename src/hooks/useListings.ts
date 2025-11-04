'use client';

import { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '@/lib/firebase/client';
import { Listing } from '@/lib/types';
import { sampleListings } from '@/data/sampleListings';

interface UseListingsOptions {
  category?: string | null;
  featured?: boolean;
}

export const useListings = ({ category, featured }: UseListingsOptions = {}) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadListings = async () => {
      setLoading(true);
      if (firestore) {
        try {
          const listingsCollection = collection(firestore, 'listings');
          const listingsQuery = query(listingsCollection);
          const snapshot = await getDocs(listingsQuery);
          const data = snapshot.docs.map((docSnapshot) => docSnapshot.data() as Listing);
          setListings(data.length ? data : sampleListings);
        } catch (error) {
          console.error('Failed to load listings from Firestore. Falling back to sample data.', error);
          setListings(sampleListings);
        }
      } else {
        setListings(sampleListings);
      }
      setLoading(false);
    };

    loadListings();
  }, []);

  const filteredListings = useMemo(() => {
    let results = listings;
    if (category) {
      const normalized = category.toLowerCase();
      results = results.filter((listing) => listing.category.toLowerCase().includes(normalized));
    }
    if (featured) {
      results = results.filter((listing) => listing.featured);
    }
    return results;
  }, [listings, category, featured]);

  return { listings: filteredListings, loading };
};
