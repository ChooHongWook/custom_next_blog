import { IPost } from '@/type/blog.types';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: IPost;
  onClickPost: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClickPost }) => (
  <article
    className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:transform hover:shadow-lg"
    onClick={onClickPost}
  >
    <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <span>{post.date}</span>
      </div>
      <div className="flex items-center gap-1">
        <User className="h-4 w-4" />
        <span>{post.author}</span>
      </div>
      <span>{post.readTime}</span>
    </div>

    <h3 className="mb-3 text-xl font-bold text-gray-900">{post.title}</h3>

    <p className="mb-4 line-clamp-3 text-gray-600">{post.excerpt}</p>

    <div className="flex items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag: any) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
          >
            #{tag}
          </span>
        ))}
      </div>
      <ArrowRight className="h-5 w-5 text-gray-500" />
    </div>
  </article>
);

export default BlogCard;
