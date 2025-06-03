import NextImage from '@/components/common/NextImage';
import github from '@public/github.svg';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-white px-5 py-2">
      <div className="text-gray-600">© 2025 개발 블로그. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#" className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
          <NextImage src={github} alt="GitHub logo" className="h-5 w-5" />
        </a>
        <a href="#" className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
