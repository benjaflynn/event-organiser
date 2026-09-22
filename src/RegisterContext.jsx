import { createContext, useState } from 'react';

{/**keeps registration data available throughout rerenders to make sure the user can log out and log back in*/}

export const RegisterContext = createContext('');

export const RegisterProvider = ({ children }) => {
    const [userData, setUserData] = useState('');

    return (
        <RegisterContext.Provider value={{ userData, setUserData }}>
            {children}
        </RegisterContext.Provider>
    );
}