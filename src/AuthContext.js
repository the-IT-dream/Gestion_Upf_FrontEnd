import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    role: null,
    access_token: null,
    refresh_token: null,
  });

  const setAuthInfo = ({ role, access_token, refresh_token }) => {
    setAuthData({
      role,
      access_token,
      refresh_token,
    });
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { authData, setAuthInfo } = authContext;

  const isAuthenticated = () => {
    return authData && authData.access_token !== null;
  };

  return { authData, setAuthInfo, isAuthenticated };
};
