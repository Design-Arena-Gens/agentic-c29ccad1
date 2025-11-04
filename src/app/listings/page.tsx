import { Suspense } from 'react';
import { ListingsView } from './listings-view';

export const dynamic = 'force-dynamic';

const ListingsPage = () => (
  <Suspense
    fallback={
      <div className="mx-auto flex min-h-[50vh] max-w-6xl items-center justify-center px-6">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500" />
      </div>
    }
  >
    <ListingsView />
  </Suspense>
);

export default ListingsPage;
