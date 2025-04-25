import { render, screen } from '@testing-library/react';
import { FormRow } from './FormRow';

describe('FormRow', () => {
  it('renders label and children', () => {
    render(
      <FormRow label="Test Label" htmlFor="test-input">
        <input id="test-input" type="text" />
      </FormRow>
    );
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });
  it('shows error message when error prop is set', () => {
    render(
      <FormRow label="Test Label" htmlFor="test-input" error="Error!">
        <input id="test-input" type="text" />
      </FormRow>
    );
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });
});
