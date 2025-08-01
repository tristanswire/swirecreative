'use client';

import { usePageView } from './lib/usePageView';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // This hook fires a page view on route change
  usePageView();

  return <>{children}</>;
}
