import React from 'react';
import styles from '../../styles/Login.module.css';

/**
 * Login page for Project X. Handles user authentication via email/password and Google.
 * @returns React component
 */
const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <h1>Login to Project X</h1>
      {/* TODO: Add login form and Google auth button */}
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <button className={styles.googleBtn}>Sign in with Google</button>
      <a href="#">Forgot password?</a>
    </div>
  );
};

export default Login;
