'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase/client';
import { Listing } from '@/lib/types';
import { sampleListings } from '@/data/sampleListings';

export const useListing = (id: string | null) => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadListing = async () => {
      if (!id) return;
      setLoading(true);
      if (firestore) {
        try {
          const docRef = doc(firestore, 'listings', id);
          const snapshot = await getDoc(docRef);
          if (snapshot.exists()) {
            setListing(snapshot.data() as Listing);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error('Failed to load listing. Using fallback data.', error);
        }
      }

      const fallback = sampleListings.find((item) => item.id === id) ?? null;
      setListing(fallback);
      setLoading(false);
    };

    loadListing();
  }, [id]);

  return { listing, loading };
};
