import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with default aria-label', () => {
    render(<Spinner />);
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument();
  });

  it('renders with custom aria-label', () => {
    render(<Spinner aria-label="Please wait" />);
    expect(screen.getByLabelText('Please wait')).toBeInTheDocument();
  });

  it('applies correct size class', () => {
    const { container } = render(<Spinner size="lg" />);
    expect(container.firstChild).toHaveClass('lg');
  });
});
