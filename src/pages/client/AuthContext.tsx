import { createContext, useContext, useState, ReactNode } from 'react';
import { IPusers } from '../../types/users';

type AuthContextType = {
  user: IPusers | null;
  signin: (userData: IPusers) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IPusers | null>(null);

  const signin = (userData: IPusers) => {
    setUser(userData);
  };
  
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout }}>
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
