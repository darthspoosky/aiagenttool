import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';
import React from 'react';

describe('Switch', () => {
  it('renders with label', () => {
    render(<Switch checked={false} onChange={() => {}} label="Toggle" />);
    expect(screen.getByLabelText('Toggle')).toBeInTheDocument();
  });

  it('calls onChange when toggled', async () => {
    const handleChange = jest.fn();
    render(<Switch checked={false} onChange={handleChange} label="Toggle" />);
    const checkbox = screen.getByLabelText('Toggle');
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('can be disabled', () => {
    render(<Switch checked={false} onChange={() => {}} label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });
});
