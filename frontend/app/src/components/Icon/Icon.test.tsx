import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders check icon', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('renders with correct color and size', () => {
    const { container } = render(<Icon name="info" color="#2563eb" size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
    // Can't test color directly, but ensures prop passes
  });
});
