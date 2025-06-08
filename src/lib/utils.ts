import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * clsx와 tailwind-merge를 결합한 유틸리티 함수
 *
 * @param inputs - clsx에 전달할 클래스 인자들 (문자열, 객체, 배열 등)
 * @returns 중복/충돌 없이 병합된 최종 클래스 문자열
 *
 * 사용 예시:
 *   cn('px-4 py-2', isActive && 'bg-blue-500', 'text-white')
 *   → twMerge(clsx('px-4 py-2', false, 'text-white')) = 'px-4 py-2 text-white'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
