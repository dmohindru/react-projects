import { createContext, ReactElement, useState } from "react";

interface AuthContexProps {
  setAuth?: React.Dispatch<React.SetStateAction<{}>>;
  auth?: any;
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

const AuthContext = createContext<AuthContexProps>({});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthProperties>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
