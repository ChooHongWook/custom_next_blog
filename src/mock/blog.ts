import { IPost } from '@/type/blog.types';

/**
 * 샘플 블로그 포스트 데이터
 */
export const blogPostsMockData: IPost[] = [
  {
    id: 1,
    title: 'Next.js 13 App Router 완벽 가이드',
    excerpt:
      'Next.js 13의 새로운 App Router에 대해 알아보고, 실제 프로젝트에서 어떻게 활용할 수 있는지 살펴봅니다.',
    content:
      'Next.js 13에서 도입된 App Router는 기존의 Pages Router와는 완전히 다른 접근 방식을 제공합니다. 이 새로운 라우팅 시스템은 React 18의 Server Components를 기반으로 하여 더 나은 성능과 개발자 경험을 제공합니다...',
    date: '2024-03-15',
    author: '김개발자',
    category: 2,
    tags: ['Next.js', 'React', '웹개발'],
    readTime: '8분',
  },
  {
    id: 2,
    title: 'TypeScript 고급 타입 시스템 마스터하기',
    excerpt:
      'TypeScript의 고급 타입 시스템을 활용하여 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아봅시다.',
    content:
      'TypeScript는 단순히 JavaScript에 타입을 추가하는 것 이상의 강력한 기능들을 제공합니다. 유니온 타입, 제네릭, 조건부 타입 등을 활용하면 더욱 견고한 애플리케이션을 만들 수 있습니다...',
    date: '2024-03-10',
    author: '박타입스크립트',
    category: 2,
    tags: ['TypeScript', 'JavaScript', '타입시스템'],
    readTime: '12분',
  },
  {
    id: 3,
    title: 'Docker로 개발 환경 구축하기',
    excerpt:
      'Docker를 활용하여 일관된 개발 환경을 구축하고, 팀 협업의 효율성을 높이는 방법을 다룹니다.',
    content:
      "개발 환경의 일관성은 팀 프로젝트에서 매우 중요합니다. Docker를 사용하면 '내 컴퓨터에서는 잘 되는데'라는 문제를 해결할 수 있습니다. Docker의 기본 개념부터 실제 활용까지 살펴보겠습니다...",
    date: '2024-03-05',
    author: '이도커',
    category: 4,
    tags: ['Docker', 'DevOps', '개발환경'],
    readTime: '15분',
  },
  {
    id: 4,
    title: 'React Hook의 올바른 사용법',
    excerpt:
      'useState, useEffect를 비롯한 React Hook들을 올바르게 사용하는 방법과 주의사항을 알아봅시다.',
    content:
      'React Hook은 함수형 컴포넌트에서 상태와 생명주기를 관리할 수 있게 해주는 강력한 기능입니다. 하지만 잘못 사용하면 성능 문제나 버그를 야기할 수 있습니다. 올바른 Hook 사용법을 익혀봅시다...',
    date: '2024-02-28',
    author: '최리액트',
    category: 2,
    tags: ['React', 'Hooks', '상태관리'],
    readTime: '10분',
  },
  {
    id: 5,
    title: 'GraphQL vs REST API 비교 분석',
    excerpt: 'GraphQL과 REST API의 장단점을 비교하고, 언제 어떤 것을 선택해야 하는지 알아봅시다.',
    content:
      'API 설계에서 GraphQL과 REST는 각각의 장단점을 가지고 있습니다. 프로젝트의 요구사항에 따라 적절한 선택을 하는 것이 중요합니다. 두 방식을 자세히 비교해보겠습니다...',
    date: '2024-02-20',
    author: '정그래프큐엘',
    category: 3,
    tags: ['GraphQL', 'REST', 'API'],
    readTime: '14분',
  },
  {
    id: 6,
    title: '테스트타이틀',
    excerpt: '카테고리가 없는 블로그',
    content: '카테고리가 없는 블로그//',
    date: '2024-02-20',
    author: '정그래프큐엘',
    category: undefined,
    tags: ['GraphQL', 'REST', 'API'],
    readTime: '14분',
  },
];

interface ICategory {
  id: number;
  key: string;
  name: string;
  count: number;
}

export const categories: Record<number, ICategory> = {
  1: {
    id: 1,
    key: 'cs',
    name: 'CS',
    count: blogPostsMockData.filter((post) => post.category === 1).length,
  },
  2: {
    id: 2,
    key: 'frontend',
    name: '프론트엔드',
    count: blogPostsMockData.filter((post) => post.category === 2).length,
  },
  3: {
    id: 3,
    key: 'backend',
    name: '백엔드',
    count: blogPostsMockData.filter((post) => post.category === 3).length,
  },
  4: {
    id: 4,
    key: 'devops',
    name: 'DevOps',
    count: blogPostsMockData.filter((post) => post.category === 4).length,
  },
};
