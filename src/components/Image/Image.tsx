interface ImageProps {
  src: string;
  alt: string;
  width: string;
  className?: string;
}

export const Image = ({ src, alt, width, className }: ImageProps) => {
  return <img src={src} alt={alt} width={width} className={className} />;
};
