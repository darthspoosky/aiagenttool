import React from 'react';
import styles from '../styles/Button.module.css';

/**
 * Primary button component for Project X.
 * @param props - React button props
 */
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={styles.button} {...props} />
  );
};

export default Button;
