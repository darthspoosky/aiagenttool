import React from 'react';
import styles from './Switch.module.css';

export type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
};

/**
 * Accessible Switch/Toggle component using design tokens and CSS Modules.
 */
export const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled = false, label, id }) => (
  <label className={styles.wrapper} htmlFor={id}>
    <input
      id={id}
      type="checkbox"
      className={styles.input}
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      disabled={disabled}
      role="switch"
      aria-checked={checked}
    />
    <span className={styles.slider} aria-hidden="true"></span>
    {label && <span className={styles.label}>{label}</span>}
  </label>
);

export default Switch;
