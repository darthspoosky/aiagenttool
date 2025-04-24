import React from 'react';
import styles from '../../styles/Signup.module.css';

/**
 * Signup page for Project X. Allows users to create an account.
 * @returns React component
 */
const Signup: React.FC = () => {
  return (
    <div className={styles.signupContainer}>
      <h1>Sign Up for Project X</h1>
      {/* TODO: Add signup form */}
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
