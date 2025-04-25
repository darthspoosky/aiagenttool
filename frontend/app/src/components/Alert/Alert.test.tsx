import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';
import React from 'react';

describe('Alert', () => {
  it('renders info alert', () => {
    render(<Alert type="info" title="Info">This is an info alert.</Alert>);
    expect(screen.getByText('This is an info alert.')).toBeInTheDocument();
    expect(screen.getByText('Info')).toBeInTheDocument();
  });

  it('renders dismissible alert and can be closed', async () => {
    const handleClose = jest.fn();
    render(<Alert type="danger" title="Error" dismissible onClose={handleClose}>Danger alert</Alert>);
    const closeBtn = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });
});
