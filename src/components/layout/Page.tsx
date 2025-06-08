import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type PageProps = ComponentPropsWithoutRef<'main'>;

export default function Page({ className, children, ...res }: PageProps) {
  return (
    <main {...res} className={cn('flex-1', className)}>
      {children}
    </main>
  );
}
