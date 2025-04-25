import React from 'react';
import styles from './Select.module.css';

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  label?: string;
};

/**
 * Accessible, styled Select component using design tokens.
 */
export const Select: React.FC<SelectProps> = ({ options, label, className = '', ...props }) => (
  <label className={styles.wrapper}>
    {label && <span className={styles.label}>{label}</span>}
    <select className={`${styles.select} ${className}`} {...props}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);

export default Select;
