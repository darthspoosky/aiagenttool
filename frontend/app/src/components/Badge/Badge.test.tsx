import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Label</Badge>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('applies correct color class', () => {
    const { container } = render(<Badge color="danger">Danger</Badge>);
    expect(container.firstChild).toHaveClass('danger');
  });
});
