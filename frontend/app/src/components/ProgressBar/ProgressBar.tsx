import React from 'react';
import styles from './ProgressBar.module.css';

export type ProgressBarProps = {
  value: number; // 0-100
  label?: string;
  className?: string;
};

/**
 * Accessible progress bar for indicating completion percentage.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, className = '' }) => (
  <div className={`${styles.progressBar} ${className}`} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    {label && <span className={styles.label}>{label}</span>}
    <div className={styles.track}>
      <div className={styles.fill} style={{ width: `${value}%` }} />
    </div>
    <span className={styles.value}>{value}%</span>
  </div>
);

export default ProgressBar;
