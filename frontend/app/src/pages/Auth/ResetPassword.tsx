import React from 'react';
import styles from '../../styles/ResetPassword.module.css';

/**
 * Password reset page for Project X. Allows users to request a password reset email.
 * @returns React component
 */
const ResetPassword: React.FC = () => {
  return (
    <div className={styles.resetContainer}>
      <h1>Reset Password</h1>
      {/* TODO: Add reset form */}
      <form>
        <input type="email" placeholder="Email" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
