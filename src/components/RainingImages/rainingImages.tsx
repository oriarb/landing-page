import styles from './rainingImages.module.css';


export default function RainingImages({ imageUrl, delay, style }) {

  return (
    <div
      className={styles.rain}
      style={{
        backgroundImage: `url(${imageUrl})`,
        animationDelay: `${delay}s`,
        ...style
      }}
    />
  );
}