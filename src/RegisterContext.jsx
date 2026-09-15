import { createContext, useState } from 'react';

export const RegisterContext = createContext('');

export const RegisterProvider = ({ children }) => {
    const [userData, setUserData] = useState('');

    return (
        <RegisterContext.Provider value={{ userData, setUserData }}>
            {children}
        </RegisterContext.Provider>
    );
}