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
