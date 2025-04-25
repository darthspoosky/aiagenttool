import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders a text input', () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  it('renders a textarea', () => {
    render(<Input as="textarea" placeholder="Multiline" />);
    expect(screen.getByPlaceholderText('Multiline')).toBeInTheDocument();
  });

  it('accepts input and calls onChange', async () => {
    const handleChange = jest.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('Type here');
    await userEvent.type(input, 'hello');
    expect(handleChange).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    render(<Input placeholder="Disabled" disabled />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
  });
});
