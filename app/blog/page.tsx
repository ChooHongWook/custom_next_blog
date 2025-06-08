'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useGetPosts } from '@/api/blog/post';
import Page from '@/components/Page';
import { categories } from '@/mock/blog';
import { IPost } from '@/type/blog.types';
import { cn } from '@/utils/cn';
import { Search } from 'lucide-react';
import BlogCard from './components/BlogCard';

function BlogSite() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const { data: useGetPostsData, isLoading } = useGetPosts();
  const posts = useGetPostsData?.data;

  if (isLoading) return <Page>로딩중</Page>;
  if (!posts) return <Page>값이 없습니다.</Page>;

  // TODO: 포스트 양 많아질 경우 백에서 처리
  // 포스트 필터링
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 0 || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleClickPostHOF = (post: IPost) => () => {
    router.push(`/blog/${post.id}`);
  };

  const handleClickCategoryBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryId = e.currentTarget.getAttribute('data-category-id');
    if (categoryId) {
      setSelectedCategory(Number(categoryId));
    }
  };

  const handleChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <Page className="bg-gray-50 transition-colors duration-300">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="p-6 text-center">
          <h2 className="p-2 text-4xl font-bold text-gray-900 md:text-5xl">
            개발자의 일상과 기술 이야기
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            프론트엔드, 백엔드, DevOps까지 다양한 개발 경험과 지식을 공유합니다
          </p>
        </section>
        {/* Search and Filter Section */}
        <section className="mb-8 py-2">
          <div className="mb-6 flex flex-col gap-4 py-2 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform p-3 text-gray-500" />
              <input
                type="text"
                placeholder="포스트 검색..."
                value={searchTerm}
                onChange={handleChangeSearchTerm}
                className={cn(
                  'w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-900 placeholder-gray-500',
                  'focus:border-transparent focus:ring-2 focus:ring-blue-500',
                )}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="m-1 flex gap-2 overflow-x-auto py-2 pb-2">
            <button
              onClick={handleClickCategoryBtn}
              data-category-id={0}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                selectedCategory === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100',
              )}
            >
              전체 ({posts.length})
            </button>
            {Object.keys(categories).map((categoryId) => {
              const category = categories[Number(categoryId)];
              return (
                <button
                  key={category.key}
                  data-category-id={category.id}
                  onClick={handleClickCategoryBtn}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100',
                  )}
                >
                  {category.name} ({category.count})
                </button>
              );
            })}
          </div>
        </section>
        {/* Post section */}
        <section>
          {filteredPosts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-500">검색 결과가 없습니다.</p>
            </div>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} onClickPost={handleClickPostHOF(post)} />
            ))}
          </div>
        </section>
      </main>
    </Page>
  );
}

export default BlogSite;
