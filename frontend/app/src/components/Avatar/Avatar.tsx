import React from 'react';
import styles from './Avatar.module.css';

export type AvatarProps = {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
  className?: string;
};

/**
 * Circular Avatar component with fallback and size options.
 */
export const Avatar: React.FC<AvatarProps> = ({ src, alt = '', size = 'md', fallback, className = '' }) => (
  <span className={`${styles.avatar} ${styles[size]} ${className}`} role="img" aria-label={alt}>
    {src ? <img src={src} alt={alt} className={styles.img} /> : fallback || <span className={styles.fallback}>?</span>}
  </span>
);

export default Avatar;
