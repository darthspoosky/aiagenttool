import React from 'react';
import styles from './Button.module.css';

/**
 * Primary button component for Project X.
 * @param props - React button props
 */
export type ButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

/**
 * Modern, accessible Button supporting variants, sizes, loading, and icons.
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  type = 'button',
  ...props
}) => (
  <button
    type={type}
    className={[
      styles.button,
      styles[variant],
      styles[size],
      loading ? styles.loading : '',
    ].join(' ')}
    onClick={onClick}
    disabled={disabled || loading}
    aria-busy={loading}
    {...props}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    <span>{label}</span>
    {loading && <span className={styles.spinner} aria-hidden="true"></span>}
  </button>
);

export default Button;
