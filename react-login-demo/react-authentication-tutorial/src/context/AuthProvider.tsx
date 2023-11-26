import { createContext, ReactElement, useState } from "react";

interface AuthContexProps {
    setAuth?: React.Dispatch<React.SetStateAction<{}>>
    auth?: any
}


interface AuthProviderProps {
    children?: ReactElement;
}

const AuthContext = createContext<AuthContexProps>({});

export const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;