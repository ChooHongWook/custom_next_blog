import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

type NextLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function NextLink({ href, children, className, ...rest }: NextLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
