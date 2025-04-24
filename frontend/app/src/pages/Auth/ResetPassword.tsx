import React from 'react';
import styles from '../../styles/ResetPassword.module.css';

/**
 * Password reset page for Project X. Allows users to request a password reset email.
 * @returns React component
 */
import { useState } from 'react';

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
  };

  return (
    <div className={styles.resetContainer}>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit} aria-label="Reset password form">
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
