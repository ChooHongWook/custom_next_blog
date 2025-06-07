import { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import NextLink from './common/NextLink';

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/30 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold text-gray-900">개발 블로그</h1>
        <nav className="flex gap-6">
          <HeaderNavItem href="/">홈</HeaderNavItem>
          <HeaderNavItem href="/blog">블로그</HeaderNavItem>
          {/* <HeaderNavItem href="#">카테고리</HeaderNavItem> */}
          {/* <HeaderNavItem href="#">소개</HeaderNavItem> */}
          {/* <HeaderNavItem href="#">연락처</HeaderNavItem> */}
        </nav>
      </div>
    </header>
  );
}

type HeaderNavItemProp = {
  href: string;
  children: ReactNode;
  className?: string;
};

const HeaderNavItem = ({ href, children, className }: HeaderNavItemProp) => {
  return (
    <NextLink
      href={href}
      className={cn(
        'text-gray-600 transition-colors',
        'hover:font-bold hover:text-blue-600',
        className,
      )}
    >
      {children}
    </NextLink>
  );
};

export default Header;
