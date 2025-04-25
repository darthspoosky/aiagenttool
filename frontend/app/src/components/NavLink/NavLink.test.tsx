import { render, screen } from '@testing-library/react';
import { NavLink } from './NavLink';

describe('NavLink', () => {
  it('renders children', () => {
    render(<NavLink to="#">Test Link</NavLink>);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });
  it('applies active class and aria-current', () => {
    const { container } = render(<NavLink to="#" active>Active Link</NavLink>);
    expect(container.firstChild).toHaveClass('active');
    expect(screen.getByText('Active Link')).toHaveAttribute('aria-current', 'page');
  });
});
