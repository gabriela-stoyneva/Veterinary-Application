import { createContext, useState } from "react";
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
    const [err, setError] = useState(null)

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            setError(null)

            navigate(Path.Home);

        } catch (error) {
            setError(error);
        }

    };

    const registerSubmitHandler = async (values) => {

        if (values.password === values['confirm-password']) {
            try {
                const result = await authService.register(values.email, values.password);
    
                setAuth(result);
    
                localStorage.setItem('accessToken', result.accessToken);
                setError(null)
    
                navigate(Path.Home);
               
    
            } catch (error) {
                setError(error);
            }
             
        } else {
            setError({'message':'Password miss match!'});
        }
    
    };

    const logoutHandler = () => {
        setAuth({});

        try {
            localStorage.removeItem('accessToken');
            setError(null)
            
        } catch (error) {

           setError(error); 
        }
        
    };

    const addItemHandler = async (data) => {
        try {
            const result = await adoptAnimalService.create(data)
            setError(null)

        } catch (error) {
           setError(error.message);
        }
        navigate(Path.Find);

    };


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        addItemHandler,
        err,
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