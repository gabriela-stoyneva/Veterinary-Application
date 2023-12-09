import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import * as adoptAnimalService from '../services/adoptAnimalService';
import usePersistedState from '../hooks/usePersistedState';
import Path from '../lib/paths';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);

        } catch (error) {
            return error;
        }

    };

    const registerSubmitHandler = async (values) => {
        
        if (values.password === values['confirm-password']) {
            try {
                const result = await authService.register(values.email, values.password);
    
                setAuth(result);
    
                localStorage.setItem('accessToken', result.accessToken);
    
                navigate(Path.Home);
    
            } catch (error) {
                return error;
            }
             
        } else {
            throw new Error('Password miss match!');
        }
        

    };

    const logoutHandler = () => {
        setAuth({});
        try {
            localStorage.removeItem('accessToken');
            
        } catch (error) {
           return error; 
        }
        
    };

    const addItemHandler = async (data) => {
        try {
            const result = await adoptAnimalService.create(data)

        } catch (error) {
            return error;
        }

        navigate(Path.Find);

    };


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        addItemHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;