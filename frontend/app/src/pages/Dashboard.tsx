import React from 'react';
import styles from '../styles/Dashboard.module.css';
import { DashboardNav } from '../components/DashboardNav/DashboardNav';

/**
 * Dashboard page skeleton with navigation structure.
 * Accessible, styled with CSS Modules and design tokens.
 */
const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardRoot}>
      <DashboardNav />
      <main className={styles.dashboardContent}>
        <h1>Dashboard</h1>
        <p>Welcome! This is your dashboard. Data and widgets will appear here.</p>
      </main>
    </div>
  );
};

export default Dashboard;
