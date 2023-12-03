import axios from '../api/axios';
import useAuth from './useAuth';

const useLogout = () => {
    const context = useAuth();
    const setAuth = context?.setAuth;

    const logout = async () => {
        setAuth && setAuth({});
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
        } catch(err) {
            console.error(err);
        }
    }

    return logout;

}

export default useLogout;