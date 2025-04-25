import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

/**
 * Dashboard global state shape
 */
export interface DashboardState {
  user: {
    id: string;
    name: string;
  } | null;
  loading: boolean;
  error: string | null;
}

/**
 * Dashboard actions
 */
export type DashboardAction =
  | { type: 'SET_USER'; payload: { id: string; name: string } }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: DashboardState = {
  user: null,
  loading: false,
  error: null,
};

function dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload, error: null };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

interface DashboardContextProps {
  state: DashboardState;
  dispatch: Dispatch<DashboardAction>;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(undefined);

/**
 * DashboardProvider wraps children with dashboard global state.
 */
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

/**
 * useDashboardContext hook for accessing dashboard state.
 */
export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboardContext must be used within a DashboardProvider');
  }
  return context;
}
