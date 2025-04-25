import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders fallback when no src', () => {
    render(<Avatar fallback="A" alt="User avatar" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    render(<Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="John" />);
    const img = screen.getByAltText('John');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://randomuser.me/api/portraits/men/32.jpg');
  });

  it('applies correct size class', () => {
    const { container } = render(<Avatar fallback="A" size="lg" />);
    expect(container.firstChild).toHaveClass('lg');
  });
});
