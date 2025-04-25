import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('../components/DashboardNav/DashboardNav', () => ({
  DashboardNav: () => <nav>Mock Nav</nav>,
}));

describe('Dashboard Page', () => {
  it('renders dashboard heading and content', () => {
    render(<Dashboard />);
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
    expect(screen.getByText(/welcome! this is your dashboard/i)).toBeInTheDocument();
  });
});
