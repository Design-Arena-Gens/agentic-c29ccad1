export type ListingCondition = 'new' | 'like-new' | 'good' | 'fair';

export interface Listing {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  images: string[];
  condition: ListingCondition;
  sellerId: string;
  sellerName: string;
  sellerAvatar?: string;
  location: string;
  deliveryOptions: string[];
  createdAt: string;
  tags?: string[];
  featured?: boolean;
  verifiedSeller?: boolean;
  stock?: number;
}

export interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
  phone?: string | null;
  location?: string | null;
  bio?: string | null;
  verificationStatus?: 'pending' | 'verified' | 'unverified';
  favoriteListings?: string[];
  createdAt?: string;
}
