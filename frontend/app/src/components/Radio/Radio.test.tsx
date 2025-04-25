import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders with label', () => {
    render(<Radio label="Pick me" />);
    expect(screen.getByLabelText('Pick me')).toBeInTheDocument();
  });

  it('can be checked', async () => {
    render(<Radio label="Pick me" />);
    const radio = screen.getByLabelText('Pick me');
    expect(radio).not.toBeChecked();
    await userEvent.click(radio);
    expect(radio).toBeChecked();
  });

  it('can be disabled', () => {
    render(<Radio label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });
});
