import React from 'react';
import styles from './Tooltip.module.css';

export type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
};

/**
 * Accessible Tooltip component with design tokens and CSS Modules.
 */
export const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top', className = '' }) => (
  <span className={styles.wrapper + ' ' + className} tabIndex={0}>
    {children}
    <span className={`${styles.tooltip} ${styles[position]}`} role="tooltip">{content}</span>
  </span>
);

export default Tooltip;
