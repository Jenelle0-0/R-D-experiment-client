import styles from '../page.module.css';
import Image from 'next/image';

export const images = [
  { src: '/images/nextjs1.webp', alt: 'Next.js 1' },
  { src: '/images/nextjs2.webp', alt: 'Next.js 2' },
  { src: '/images/nextjs3.avif', alt: 'Next.js 3' },
  { src: '/images/nextjs4.webp', alt: 'Next.js 4' },
  { src: '/images/nextjs5.png', alt: 'Next.js 5' },
];

export const repeats = 50;

export default function GalleryClient() {
  const nodes = [];
  for (let r = 0; r < repeats; r++) {
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const key = `img-${r}-${i}`;
      nodes.push(
        <figure id={`img-${r}-${i}`} className={styles.galleryItem} key={key}>
          <Image src={img.src} alt={img.alt} width={400} height={300} />
        </figure>
      );
    }
  }

  nodes.push(
    <div className={styles.backToTop} key="back-to-top">
      <a href="#top" className={styles.backToTopLink}>
        Back to top
      </a>
    </div>
  );

  return <div className={styles.galleryGrid}>{nodes}</div>;
}
