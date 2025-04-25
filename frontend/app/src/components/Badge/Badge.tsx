import React from 'react';
import styles from './Badge.module.css';

export type BadgeProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  className?: string;
};

/**
 * Badge component for status/label display, color-coded.
 */
export const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className = '' }) => (
  <span className={`${styles.badge} ${styles[color]} ${className}`}>{children}</span>
);

export default Badge;
