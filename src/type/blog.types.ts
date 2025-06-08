export interface IPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category?: number;
  tags: string[];
  readTime: string;
}
