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
                newEvent === '' ? <div className='main-areas'><h1>Add an event here!</h1><br /><NewEventAdder setNewEvent={setNewEvent}/></div> : <NewEventDisplayer setNewEvent={setNewEvent} newEvent={newEvent}/>
            }
        </div>
    );
}