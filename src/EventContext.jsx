import { createContext, useState } from 'react';

export const EventContext = createContext([]);

export const EventProvider = ({ children }) => {
    const [eventArray, setEventArray] = useState('');

    return (
        <EventContext.Provider value={{ eventArray, setEventArray }}>
            {children}
        </EventContext.Provider>
    );
}