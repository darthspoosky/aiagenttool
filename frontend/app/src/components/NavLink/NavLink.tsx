import React from 'react';
import styles from './NavLink.module.css';

export type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

/**
 * Accessible navigation link with active state styling.
 */
export const NavLink: React.FC<NavLinkProps> = ({ to, children, active = false, className = '', onClick }) => (
  <a
    href={to}
    className={`${styles.navLink} ${active ? styles.active : ''} ${className}`}
    aria-current={active ? 'page' : undefined}
    onClick={onClick}
  >
    {children}
  </a>
);

export default NavLink;
