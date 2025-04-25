import React from 'react';
import styles from './Alert.module.css';
import { Icon } from '../Icon/Icon';

export type AlertProps = {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  dismissible?: boolean;
};

/**
 * Accessible Alert component for feedback/status messaging.
 */
export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  className = '',
  onClose,
  dismissible = false,
}) => (
  <div className={`${styles.alert} ${styles[type]} ${className}`} role="alert">
    <span className={styles.icon}><Icon name={type === 'danger' ? 'warning' : type} /></span>
    <div className={styles.content}>
      {title && <div className={styles.title}>{title}</div>}
      <div>{children}</div>
    </div>
    {dismissible && (
      <button className={styles.close} onClick={onClose} aria-label="Close alert">
        <Icon name="close" />
      </button>
    )}
  </div>
);

export default Alert;
