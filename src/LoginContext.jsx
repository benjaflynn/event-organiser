import { createContext, useState } from 'react';

export const LoginContext = createContext('loggedIn');

export const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState('loggedOut');

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    );
}