import React, { createContext, useContext, useState } from "react";

type Role = "admin" | "recruiter" | "user" | null;

interface AuthContextType {
  isAuth: boolean;
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [role, setRole] = useState<Role>(null);

  const login = (userRole: Role) => {
    setIsAuth(true);
    setRole(userRole);
  };

  const logout = () => {
    setIsAuth(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};