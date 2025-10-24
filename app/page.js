import styles from './page.module.css';
import TickerClient from './components/TickerClient';
import GalleryClient, { images, repeats } from './components/GalleryClient';
import VideoPlayer from './components/VideoPlayer';

export default function Home() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "R&D Experiment: Client-side rendering — Next.js",
        "url": "https://r-d-experiment-client.vercel.app/",
        "description": "Exploring pre-rendering vs. client-side rendering — this site is client-side rendered with Next.js.",
        "author": {
            "@type": "Person",
            "name": "Jenelle0-0",
            "sameAs": [
                "https://github.com/Jenelle0-0",
                "https://twitter.com/",
                "https://www.linkedin.com/",
                "https://www.instagram.com/",
                "https://www.facebook.com/"
            ]
        },
        "publisher": {
            "@type": "Organization",
            "name": "R-D Experiment"
        }
    };

    return (
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <main id="top" className={styles.page}>
            <header className={styles.hero}>
                <h1 className={styles.title}>
                    R&D Experiment: Client-side Rendering
                    <span className={styles.accent}> — Next.js</span>
                </h1>
                <p className={styles.lead}>
                    Exploring pre-rendering vs. client-side rendering — this site is client-side rendered with Next.js.
                    HTML generated at build time for faster initial loads and better SEO. 
                    Client-side rendering, by contrast, builds the UI in the browser using JavaScript after the initial load.
                </p>
                <TickerClient />
            </header><section id="showcase" className={styles.showcase}>
                <div className={styles.card}>
                    <h3>Vibrant Images</h3>
                    <p>Experience the richness of vibrant images that captivate the senses.</p>
                </div>
                <div className={styles.card}>
                    <h3>Gradient Panels</h3>
                    <p>Pretty gradients with depth and motion.</p>
                </div>
                <div className={styles.card}>
                    <h3>Micro-interactions</h3>
                    <p>Buttons that pop, headings that glow.</p>
                </div>
            </section>
            <section id="social" className={styles.social} aria-labelledby="social-heading">
                <h2 id="social-heading" className={styles.sectionTitle}>Connect</h2>
                <div className={styles.socialList}>
                    <a href="https://github.com/Jenelle0-0" target="_blank" rel="noopener noreferrer me">
                        <span className={styles.socialIcon} aria-hidden>🐙</span>
                        <span>GitHub</span>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer me">
                        <span className={styles.socialIcon} aria-hidden>🐦</span>
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer me">
                        <span className={styles.socialIcon} aria-hidden>🔗</span>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer me">
                        <span className={styles.socialIcon} aria-hidden>📸</span>
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer me">
                        <span className={styles.socialIcon} aria-hidden>📘</span>
                        <span>Facebook</span>
                    </a>
                </div>
            </section>
            <section id="videos" className={styles.gallery} aria-labelledby="videos-heading">
                <h2 id="videos-heading" className={styles.sectionTitle}>Videos</h2>
                <VideoPlayer src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster="/images/nextjs3.avif" controls />
                <VideoPlayer src="https://media.w3.org/2010/05/bunny/trailer.mp4" poster="/images/nextjs2.avif" controls />
                <VideoPlayer src="https://media.w3.org/2010/05/video/movie_300.mp4" poster="/images/nextjs1.avif" controls />
            </section>
            <section id="gallery" className={styles.gallery} aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className={styles.sectionTitle}>Gallery</h2>
                {typeof repeats === 'number' && images && (
                    (() => {
                        const lastR = Math.max(0, repeats - 1);
                        const lastI = Math.max(0, images.length - 1);
                        const lastId = `img-${lastR}-${lastI}`;
                        return (
                            <p>
                                <a href={`#${lastId}`} className={styles.lastLink}>
                                    Jump to last image
                                </a>
                            </p>
                        );
                    })()
                )}
                <GalleryClient />
            </section>
            <footer className={styles.footer}>
                <p>R-D Experiment · Next.js</p>
            </footer>
        </main >
        </>
    );
}