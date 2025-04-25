import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('Select', () => {
  const options = [
    { value: '', label: 'Choose an option' },
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];

  it('renders all options', () => {
    render(<Select options={options} label="Fruit" />);
    expect(screen.getByLabelText('Fruit')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('calls onChange when selection changes', async () => {
    const handleChange = jest.fn();
    render(<Select options={options} label="Fruit" onChange={handleChange} />);
    const select = screen.getByLabelText('Fruit');
    await userEvent.selectOptions(select, 'banana');
    expect(handleChange).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    render(<Select options={options} label="Fruit" disabled />);
    expect(screen.getByLabelText('Fruit')).toBeDisabled();
  });
});
