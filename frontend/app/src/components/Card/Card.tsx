import React from 'react';
import styles from './Card.module.css';

export type CardProps = {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
};

/**
 * Card component for grouping content with optional variants.
 */
export const Card: React.FC<CardProps> = ({ children, variant = 'default', className = '' }) => (
  <div className={`${styles.card} ${styles[variant]} ${className}`}>{children}</div>
);

export default Card;
