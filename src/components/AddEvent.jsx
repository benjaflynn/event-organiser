import NavBar from '../routes/NavBar';
import { useState } from 'react';
import NewEventAdder from './NewEventAdder';
import NewEventDisplayer from './NewEventDisplayer';

export default function AddEvent() {

    const [newEvent, setNewEvent] = useState('');

    return(
        <div>
            <NavBar />
            {
                newEvent === '' ? <div><div><h1>Add an event here!</h1></div><div><NewEventAdder setNewEvent={setNewEvent}/></div></div> : <div><NewEventDisplayer setNewEvent={setNewEvent} newEvent={newEvent}/></div>
            }
        </div>
    );
}