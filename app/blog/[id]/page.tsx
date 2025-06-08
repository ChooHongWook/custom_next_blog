'use client';

import { useParams } from 'next/navigation';
import { useGetPost } from '@/api/blog/post';
import Page from '@/components/layout/Page';
import { Calendar, Clock } from 'lucide-react';

function PostDetail() {
  const { id: postId } = useParams();

  if (typeof postId !== 'string' || isNaN(Number(postId))) return <Page>잘못된 페이지 입니다</Page>;

  const { data: useGetPostsData, isLoading } = useGetPost(postId);
  const post = useGetPostsData?.data;

  if (isLoading) return <Page>로딩중</Page>;
  if (!post) return <Page>값이 없습니다.</Page>;

  return (
    <Page className="bg-gray-50 transition-colors duration-300">
      {/* Back button */}
      <section className="p-10">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="text-muted-foreground flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{post.readTime} 소요</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10"></div>
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-muted-foreground text-xs">작성자</p>
            </div>
          </div>
        </div>
        {/* Post content */}
        <div
          className="blog-content mb-12 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </Page>
  );
}

export default PostDetail;
