'use client';

import React from 'react';
import { useGetPosts } from '@/api/blog/post';

function BlogSite() {
  const { data: posts, isLoading } = useGetPosts();
  console.log('@#@# 22 posts data:', posts);

  return <>블로그 페이지</>;
}

export default BlogSite;
