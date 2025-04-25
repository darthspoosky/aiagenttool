import React from 'react';
import styles from './AnnouncementBar.module.css';

/**
 * AnnouncementBar displays a prominent message at the top of the app.
 * Use for updates, launches, or important info.
 * @param message The announcement text to display
 * @param variant Visual style: 'info', 'success', 'warning', 'danger'
 * @param onClose Optional close handler
 */
export interface AnnouncementBarProps {
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  onClose?: () => void;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ message, variant = 'info', onClose }) => (
  <div className={`${styles.announcementBar} ${styles[variant]}`} role="status">
    <span className={styles.message}>{message}</span>
    {onClose && (
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close announcement">×</button>
    )}
  </div>
);

export default AnnouncementBar;
