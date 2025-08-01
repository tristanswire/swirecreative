'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Combine path and query string (if any)
    const search = searchParams.toString();
    const pagePath = search ? `${pathname}?${search}` : pathname;

    // Send page_view event to GA
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
