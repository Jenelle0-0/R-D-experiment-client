import styles from '../page.module.css';

export default function TickerClient() {
  return (
    <div className={styles.ticker} aria-hidden>
      <div className={styles.track}>Next.js • React • Web Animations • Image loading</div>
    </div>
  );
}
