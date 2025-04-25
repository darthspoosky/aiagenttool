import React from 'react';
import styles from './Radio.module.css';

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

/**
 * Accessible Radio component using design tokens and CSS Modules.
 */
export const Radio: React.FC<RadioProps> = ({ label, className = '', ...props }) => (
  <label className={styles.wrapper}>
    <input type="radio" className={`${styles.radio} ${className}`} {...props} />
    {label && <span className={styles.label}>{label}</span>}
  </label>
);

export default Radio;
