import React from 'react';
import { render, screen } from '@testing-library/react';
import { DashboardProvider, useDashboardContext } from './DashboardContext';

describe('DashboardContext', () => {
  function Consumer() {
    const { state, dispatch } = useDashboardContext();
    return (
      <>
        <div>user: {state.user ? state.user.name : 'none'}</div>
        <button onClick={() => dispatch({ type: 'SET_USER', payload: { id: '1', name: 'Alice' } })}>Set User</button>
      </>
    );
  }

  it('provides initial state and allows dispatch', () => {
    render(
      <DashboardProvider>
        <Consumer />
      </DashboardProvider>
    );
    expect(screen.getByText(/user: none/i)).toBeInTheDocument();
    screen.getByText('Set User').click();
    expect(screen.getByText(/user: Alice/i)).toBeInTheDocument();
  });
});
