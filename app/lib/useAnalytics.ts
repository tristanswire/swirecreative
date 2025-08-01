'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (event: 'event', action: string, params: Record<string, unknown>) => void;
  }
}

export function usePageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
      });
    }
  }, [pathname]);
}
