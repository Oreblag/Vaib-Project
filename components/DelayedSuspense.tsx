'use client';

import { useEffect, useState, ReactNode } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

interface DelayedSuspenseProps {
  children: ReactNode;
  delay?: number;
}

export default function DelayedSuspense({ 
  children, 
  delay = 4000 
}: DelayedSuspenseProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}