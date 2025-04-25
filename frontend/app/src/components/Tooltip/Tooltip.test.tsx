import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';
import React from 'react';

describe('Tooltip', () => {
  it('renders tooltip content on hover', async () => {
    render(
      <Tooltip content="Info tooltip" position="top">
        <button>Hover me</button>
      </Tooltip>
    );
    const trigger = screen.getByText('Hover me');
    await userEvent.hover(trigger);
    expect(screen.getByRole('tooltip')).toHaveTextContent('Info tooltip');
  });
});
