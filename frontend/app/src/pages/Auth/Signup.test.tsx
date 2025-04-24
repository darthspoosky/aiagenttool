import { render, screen, fireEvent } from '@testing-library/react';
import Signup from './Signup';

describe('Signup Page', () => {
  it('renders signup form', () => {
    render(<Signup />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('submits form with email and passwords', () => {
    render(<Signup />);
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByText('Sign Up'));
    // TODO: Add assertion for form submission logic when implemented
  });
});
