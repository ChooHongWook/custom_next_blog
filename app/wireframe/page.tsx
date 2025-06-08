import React from 'react';
import Page from '@/components/layout/Page';

export default function Wireframe() {
  return (
    <Page>
      <WireframePrototype />
    </Page>
  );
}

function WireframePrototype() {
  return (
    <div>
      <HeaderWireframe />
      <main className="flex-1 p-6">
        <HomeWireframe />
      </main>
      <FooterWireframe />
    </div>
  );
}
// 스켈레톤 카드 컴포넌트
const SkeletonCard = () => {
  return (
    <>
      <div className="space-y-4 rounded-lg border border-gray-300 p-4">
        <div className="h-32 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="flex h-4 w-1/2 animate-pulse rounded bg-gray-200" />
        <div className="flex h-4 w-1/2 animate-pulse rounded bg-gray-200" />
      </div>
    </>
  );
};

// 헤더 와이어프레임
function HeaderWireframe() {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 p-4">
      <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />
      <nav className="flex space-x-4">
        <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
      </nav>
    </header>
  );
}

// 메인 홈 와이어프레임
function HomeWireframe() {
  return (
    <div className="flex flex-col gap-6 space-y-8">
      {/* Hero 섹션 */}
      <div className="h-48 w-full animate-pulse rounded-lg border border-gray-300 bg-gray-200" />
      {/* 포스트 리스트 그리드 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

// 푸터 와이어프레임
function FooterWireframe() {
  return (
    <footer className="flex justify-center border-t border-gray-300 p-4">
      <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
    </footer>
  );
}
