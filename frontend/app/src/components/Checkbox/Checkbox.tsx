import React from 'react';
import styles from './Checkbox.module.css';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

/**
 * Accessible Checkbox component using design tokens and CSS Modules.
 */
export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => (
  <label className={styles.wrapper}>
    <input type="checkbox" className={`${styles.checkbox} ${className}`} {...props} />
    {label && <span className={styles.label}>{label}</span>}
  </label>
);

export default Checkbox;
