import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('renders label and value', () => {
    render(<ProgressBar value={40} label="Progress" />);
    expect(screen.getByText('Progress')).toBeInTheDocument();
    expect(screen.getByText('40%')).toBeInTheDocument();
  });
  it('sets correct aria attributes', () => {
    render(<ProgressBar value={75} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '75');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });
});
