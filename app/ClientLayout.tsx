'use client';
import { Suspense } from 'react';
import { usePageView } from './lib/usePageView';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // This hook fires a page view on route change
  <Suspense>
    usePageView();
  </Suspense>

  return <>{children}</>;
}
