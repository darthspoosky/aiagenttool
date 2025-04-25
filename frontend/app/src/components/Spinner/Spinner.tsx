import React from 'react';
import styles from './Spinner.module.css';

export type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  'aria-label'?: string;
};

/**
 * Accessible loading Spinner using design tokens and CSS Modules.
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color, className = '', 'aria-label': ariaLabel = 'Loading...' }) => (
  <span
    className={`${styles.spinner} ${styles[size]} ${className}`}
    style={color ? { borderColor: color, borderTopColor: 'transparent' } : {}}
    role="status"
    aria-label={ariaLabel}
  />
);

export default Spinner;
