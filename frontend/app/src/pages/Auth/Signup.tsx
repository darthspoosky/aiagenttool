import React from 'react';
import styles from '../../styles/Signup.module.css';

/**
 * Signup page for Project X. Allows users to create an account.
 * @returns React component
 */
import { useState } from 'react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API and AuthContext
  };

  return (
    <div className={styles.signupContainer}>
      <h1>Sign Up for Project X</h1>
      <form onSubmit={handleSubmit} aria-label="Signup form">
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          required
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
