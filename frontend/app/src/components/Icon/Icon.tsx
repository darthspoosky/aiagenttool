import React from 'react';
import styles from './Icon.module.css';

export type IconProps = {
  name: 'check' | 'close' | 'info' | 'warning' | 'user' | 'edit' | 'delete';
  size?: number;
  color?: string;
  className?: string;
  'aria-label'?: string;
};

/**
 * SVG Icon component for consistent iconography.
 */
export const Icon: React.FC<IconProps> = ({ name, size = 20, color, className = '', 'aria-label': ariaLabel }) => {
  const icons: Record<string, JSX.Element> = {
    check: (
      <svg viewBox="0 0 20 20" fill="none" width={size} height={size} stroke={color || 'currentColor'} aria-label={ariaLabel} className={styles.svg}><path d="M5 10l4 4 6-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    close: (
      <svg viewBox="0 0 20 20" fill="none" width={size} height={size} stroke={color || 'currentColor'} aria-label={ariaLabel} className={styles.svg}><path d="M6 6l8 8M6 14L14 6" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    info: (
      <svg viewBox="0 0 20 20" fill="none" width={size} height={size} stroke={color || 'currentColor'} aria-label={ariaLabel} className={styles.svg}><circle cx="10" cy="10" r="9" strokeWidth="2"/><path d="M10 7v1m0 2v3" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    warning: (
      <svg viewBox="0 0 20 20" fill="none" width={size} height={size} stroke={color || 'currentColor'} aria-label={ariaLabel} className={styles.svg}><path d="M10 3L2 17h16L10 3z" strokeWidth="2"/><circle cx="10" cy="13" r="1"/><path d="M10 8v3" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    user: (
      <svg viewBox="0 0 20 20" fill="none" width={size} height={size} stroke={color || 'currentColor'} aria-label={ariaLabel} className={styles.svg}><circle cx="10" cy="7" r="4" strokeWidth="2"/><path d="M2 17c0-2.761 3.582-5 8-5s8 2.239 8 5" strokeWidth="2"/></svg>
    ),
    edit: (
      <svg viewBox="0 0 20 20" fill="none" width={size} height={size} stroke={color || 'currentColor'} aria-label={ariaLabel} className={styles.svg}><path d="M12.5 5.5l2 2M4 13.5V16h2.5l7.5-7.5-2.5-2.5L4 13.5z" strokeWidth="2"/></svg>
    ),
    delete: (
      <svg viewBox="0 0 20 20" fill="none" width={size} height={size} stroke={color || 'currentColor'} aria-label={ariaLabel} className={styles.svg}><rect x="5" y="7" width="10" height="8" rx="2" strokeWidth="2"/><path d="M8 7V5a2 2 0 0 1 4 0v2" strokeWidth="2"/></svg>
    ),
  };
  return icons[name] || null;
};

export default Icon;
