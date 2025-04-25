import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { AuthProvider } from '../../context/AuthContext';

describe('Login Page', () => {
  it('renders login form', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
  });

  it('submits form with email and password', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByText('Login'));
    // TODO: Add assertion for form submission logic when implemented
  });
});
