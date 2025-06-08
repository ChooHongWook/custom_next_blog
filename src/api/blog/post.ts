import { fetch } from '@/configs/axios';
import { IPost } from '@/type/blog.types';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

export const baseUrl = '/blog/post';

export type TReturnGetPosts = {
  data: IPost[];
  lastId: number;
};
export const useGetPosts = (
  options?: Omit<
    UseQueryOptions<TReturnGetPosts, Error, TReturnGetPosts, [string]>,
    'queryKey' | 'queryFn'
  >,
) => {
  const queryKey = `${baseUrl}/list`;
  const queryFn = async () =>
    fetch.get(`${queryKey}`).then((res: { data: TReturnGetPosts }) => res.data);

  return useQuery<TReturnGetPosts, Error, TReturnGetPosts, [string]>({
    queryKey: [queryKey],
    queryFn,
    ...options,
  });
};

export type TReturnGetPost = {
  data: IPost;
};
export const useGetPost = (
  postId: string,
  options?: Omit<
    UseQueryOptions<TReturnGetPost, Error, TReturnGetPost, [string]>,
    'queryKey' | 'queryFn'
  >,
) => {
  const queryKey = `${baseUrl}/${postId}`;
  const queryFn = async () =>
    fetch.get(`${queryKey}?postId=${postId}`).then((res: { data: TReturnGetPost }) => res.data);

  return useQuery<TReturnGetPost, Error, TReturnGetPost, [string]>({
    queryKey: [queryKey],
    queryFn,
    ...options,
  });
};

export const useAddPost = (
  data: IPost,
  options?: UseMutationOptions<IPost, Error, IPost, unknown>,
) => {
  const mutationKey = `${baseUrl}`;
  const mutationFn = async () =>
    fetch.post(mutationKey, data).then((res: { data: IPost }) => res.data);

  return useMutation<IPost, Error, IPost, unknown>({
    mutationKey: [mutationKey],
    mutationFn,
    ...options,
  });
};
