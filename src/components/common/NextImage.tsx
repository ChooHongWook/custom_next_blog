import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface NextImageProps {
  src: string | StaticImport;
  alt: string;
  className?: string;
}

export default function NextImage({ src, alt, className, ...rest }: NextImageProps) {
  return <Image src={src} alt={alt} className={className} />;
}
