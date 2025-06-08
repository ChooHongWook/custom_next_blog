import { NextResponse } from 'next/server';
import { TReturnGetPosts } from '@/api/blog/post';
import { blogPostsMockData } from '@/mock/blog';
import { IPost } from '@/type/blog.types';

// TODO: 추후 DB연결
let posts: IPost[] = blogPostsMockData;

/**
 * 블로그 포스트 가져오는 API
 *
 * Handles GET and POST requests for blog posts.
 *
 * - GET: Returns the list of blog posts.
 *
 * @param req
 * @returns {NextResponse}
 */
export async function GET(): Promise<NextResponse<TReturnGetPosts | { error: string }>> {
  try {
    return NextResponse.json(
      {
        data: posts,
        // NOTE: 추후 수정 (페이지 네이션 고려)
        lastId: 5,
      },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
