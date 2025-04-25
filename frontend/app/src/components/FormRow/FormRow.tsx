import React from 'react';
import styles from './FormRow.module.css';

export type FormRowProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
};

/**
 * FormRow component: label + input + error message.
 */
export const FormRow: React.FC<FormRowProps> = ({ label, htmlFor, children, error, className = '' }) => (
  <div className={`${styles.formRow} ${className}`}>
    <label htmlFor={htmlFor} className={styles.label}>{label}</label>
    <div className={styles.input}>{children}</div>
    {error && <div className={styles.error} role="alert">{error}</div>}
  </div>
);

export default FormRow;
