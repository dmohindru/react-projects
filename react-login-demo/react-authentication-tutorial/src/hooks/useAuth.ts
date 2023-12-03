import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    // something can be done here to fix this type AuthContexProps | undefined
    return useContext(AuthContext);
    
    
}

export default useAuth;