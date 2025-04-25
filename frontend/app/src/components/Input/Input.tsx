import React from 'react';
import styles from './Input.module.css';

/**
 * Input component supporting text, email, password, and textarea types.
 * Applies design tokens for color, spacing, and typography.
 * @param props - Input props extending native input/textarea attributes.
 */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  as?: 'input' | 'textarea';
};

export const Input: React.FC<InputProps> = ({ as = 'input', className = '', ...props }) => {
  if (as === 'textarea') {
    return <textarea className={`${styles.input} ${className}`} {...(props as any)} />;
  }
  return <input className={`${styles.input} ${className}`} {...props} />;
};

export default Input;
