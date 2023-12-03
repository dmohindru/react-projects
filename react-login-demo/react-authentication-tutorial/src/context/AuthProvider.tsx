import { createContext, ReactElement, useState } from "react";

interface AuthContexProps {
  setAuth: React.Dispatch<React.SetStateAction<AuthProperties>>;
  auth: AuthProperties;
  persist?: boolean;
  setPersist?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children?: ReactElement;
}

interface AuthProperties {
  user?: string;
  pwd?: string;
  roles?: number[];
  accessToken?: string;
}

const AuthContext = createContext<AuthContexProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthProperties>({});
  // const [persist, setPersist] = useState<boolean>(
  //   JSON.parse(localStorage.getItem("persist")!) || false
  // );

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
