// context/AuthContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextProps = {
  isLoggedIn: boolean,
  login: (username: string, password: string) => Promise<void>,
  logout: () => void,
};

const AuthContext =
  (createContext < AuthContextProps) | (undefined > undefined);

type AuthProviderProps = {
  children: ReactNode,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      // Add your authentication logic here (e.g., API call, checking credentials)
      // For simplicity, we're just checking if the username and password are provided
      if (username && password) {
        // Simulate a delay, replace with actual asynchronous logic
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoggedIn(true);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  const logout = () => {
    // Add your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
