import { createContext, useContext, useState, ReactNode } from 'react';

/**
 * AuthContext provides authentication state and methods for Project X.
 * @typedef AuthContextType
 * @property {boolean} isAuthenticated - Whether the user is logged in
 * @property {string | null} user - The current user (email or id)
 * @property {(user: string) => void} login - Log in a user
 * @property {() => void} logout - Log out the user
 */
export interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const isAuthenticated = !!user;

  const login = (user: string) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
