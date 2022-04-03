import React from "react";
import {useSelector} from "react-redux";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <AuthContext.Provider value={{ currentUser:currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
