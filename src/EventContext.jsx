import { createContext, useState } from 'react';

{/**keeps list of events as an array available to all components*/}

export const EventContext = createContext([]);

export const EventProvider = ({ children }) => {
    const [eventArray, setEventArray] = useState('');

    return (
        <EventContext.Provider value={{ eventArray, setEventArray }}>
            {children}
        </EventContext.Provider>
    );
}