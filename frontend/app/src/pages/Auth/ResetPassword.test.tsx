import { render, screen, fireEvent } from '@testing-library/react';
import ResetPassword from './ResetPassword';

describe('ResetPassword Page', () => {
  it('renders reset password form', () => {
    render(<ResetPassword />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByText('Send Reset Link')).toBeInTheDocument();
  });

  it('submits email for reset', () => {
    render(<ResetPassword />);
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText('Send Reset Link'));
    // TODO: Add assertion for form submission logic when implemented
  });
});
