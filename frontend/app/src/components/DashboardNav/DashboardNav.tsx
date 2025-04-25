import React from 'react';
import styles from './DashboardNav.module.css';

/**
 * Accessible navigation for the dashboard.
 * Uses design tokens and CSS Modules.
 */
export const DashboardNav: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label="Dashboard Navigation">
      <ul className={styles.navList}>
        <li><a href="#" className={styles.navLink}>Home</a></li>
        <li><a href="#" className={styles.navLink}>Profile</a></li>
        <li><a href="#" className={styles.navLink}>Settings</a></li>
        <li><a href="#" className={styles.navLink}>Logout</a></li>
      </ul>
    </nav>
  );
};
