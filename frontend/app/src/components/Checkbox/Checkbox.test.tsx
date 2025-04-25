import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Accept" />);
    expect(screen.getByLabelText('Accept')).toBeInTheDocument();
  });

  it('can be checked and unchecked', async () => {
    render(<Checkbox label="Accept" />);
    const checkbox = screen.getByLabelText('Accept');
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('can be disabled', () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });
});
