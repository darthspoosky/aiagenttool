import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  it('applies correct variant class', () => {
    const { container } = render(<Card variant="elevated">Elevated</Card>);
    expect(container.firstChild).toHaveClass('elevated');
  });
});
