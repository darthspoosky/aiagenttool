import React from 'react';
import { render, screen } from '@testing-library/react';
import { DashboardNav } from './DashboardNav';

describe('DashboardNav', () => {
  it('renders navigation links', () => {
    render(<DashboardNav />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('has accessible navigation role', () => {
    render(<DashboardNav />);
    expect(screen.getByRole('navigation', { name: /dashboard navigation/i })).toBeInTheDocument();
  });
});
