import React from 'react';
import styles from '../../styles/Login.module.css';

/**
 * Login page for Project X. Handles user authentication via email/password and Google.
 * @returns React component
 */
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    login(email);
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login to Project X</h1>
      <form onSubmit={handleSubmit} aria-label="Login form">
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
        <button type="submit">Login</button>
      </form>
      <button className={styles.googleBtn} aria-label="Sign in with Google">Sign in with Google</button>
      <a href="#" aria-label="Forgot password?">Forgot password?</a>
    </div>
  );
};

export default Login;
