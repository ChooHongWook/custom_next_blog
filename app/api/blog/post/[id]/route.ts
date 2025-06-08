import { NextRequest, NextResponse } from 'next/server';
import { TReturnGetPost, TReturnGetPosts } from '@/api/blog/post';
import { blogPostsMockData } from '@/mock/blog';
import { IPost } from '@/type/blog.types';

// TODO: 추후 DB연결
let posts = blogPostsMockData;

/**
 * 블로그 포스트 가져오는 API
 *
 * - GET: Returns the list of blog posts.
 * @param req
 * @returns {NextResponse}
 */
export async function GET(): Promise<NextResponse<TReturnGetPost | { error: string }>> {
  const post = {
    id: 1,
    title: 'Next.js 13 App Router 완벽 가이드',
    excerpt:
      'Next.js 13의 새로운 App Router에 대해 알아보고, 실제 프로젝트에서 어떻게 활용할 수 있는지 살펴봅니다.',
    content: `
      <p>Next.js 15가 출시되었습니다! 이번 버전에서는 많은 개선사항과 새로운 기능들이 추가되었습니다.</p>
      
      <h2>주요 기능</h2>
      
      <p>Next.js 15는 개발자 경험을 크게 향상시키는 여러 기능을 제공합니다. 특히 빌드 시간이 크게 단축되었으며, 서버 컴포넌트의 성능이 개선되었습니다.</p>
      
      <h3>1. 향상된 빌드 성능</h3>
      
      <p>새로운 컴파일러 최적화를 통해 대규모 애플리케이션의 빌드 시간이 최대 40% 단축되었습니다. 이는 개발 과정에서 생산성을 크게 향상시킵니다.</p>
      
      <h3>2. 개선된 서버 컴포넌트</h3>
      
      <p>서버 컴포넌트의 스트리밍 성능이 개선되어 사용자 경험이 더욱 향상되었습니다. 또한 서버 컴포넌트와 클라이언트 컴포넌트 간의 상호작용이 더욱 원활해졌습니다.</p>
      
      <h3>3. 새로운 라우팅 기능</h3>
      
      <p>App Router에 새로운 기능들이 추가되어 더욱 복잡한 라우팅 패턴을 쉽게 구현할 수 있게 되었습니다.</p>
    `,
    date: '2024-03-15',
    author: '김개발자',
    category: 2,
    tags: ['Next.js', 'React', '웹개발'],
    readTime: '8분',
  };
  try {
    return NextResponse.json(
      {
        data: post,
      },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

/**
 * 블로그 포스트 추가하는 API
 *
 * - POST: Creates a new blog post and returns the created post.
 * @param req
 * @returns {NextResponse}
 */
export async function POST(
  req: NextRequest,
): Promise<NextResponse<TReturnGetPost | { error: string }>> {
  try {
    const body = await req.json();

    if (!body.title || !body.excerpt || !body.content) {
      return NextResponse.json(
        { error: 'title, excerpt, and content are required.' },
        { status: 400 },
      );
    }

    // 새 포스트 id 생성
    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPost: IPost = {
      id: newId,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      date: body.date || new Date().toISOString().slice(0, 10),
      author: body.author || '익명',
      category: body.category || 'etc',
      tags: body.tags || [],
      readTime: body.readTime || '1분',
    };
    posts = [newPost, ...posts];
    return NextResponse.json({ data: newPost }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
