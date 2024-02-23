import styles from './rainingImages.module.css';
import React from 'react';

interface RainingImagesProps {
  imageUrl: string;
  delay: number;
  style: React.CSSProperties;
}

const RainingImages: React.FC<RainingImagesProps> = ({ imageUrl, delay, style }) => {

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

export default RainingImages;