import { createContext, ReactElement, useState } from "react";

interface AuthContexProps {
  setAuth: React.Dispatch<React.SetStateAction<AuthProperties>>;
  auth: AuthProperties;
}

interface AuthProviderProps {
  children?: ReactElement;
}

interface AuthProperties {
  user?: string;
  pwd?: string;
  roles?: string[];
  accessToken?: string;
}

const AuthContext = createContext<AuthContexProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthProperties>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
