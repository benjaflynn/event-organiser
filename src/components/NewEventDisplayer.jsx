import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

{/**after creating a new event this component shows it to the user again in a user-friendly format. also offers buttons to add another event or to view all.*/}

export default function NewEventDisplayer({ newEvent }) {

    const nav = useNavigate();
    
    const d = new Date(newEvent.date);
    const eventDate = d.toDateString();

    return (
        <div id='new-event-display'>

            <h3>Your new event, {newEvent.title}, has been saved!</h3>

            <table>
                <tbody>
                    <tr>
                        <th>Date:</th>
                        <td>{eventDate}</td>
                    </tr>
                    <tr>
                        <th>Time:</th>
                        <td>{newEvent.time}</td>
                    </tr>
                    <tr>
                        <th>Location:</th>
                        <td>{newEvent.location}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{newEvent.description}</td>
                    </tr>
                </tbody>
            </table>

            <br />
            
            <p>
                <Button className='submit-btn' onClick={() => nav ('add-event')}>
                    Add another event?
                </Button>
                <br />
                <Button className='submit-btn' onClick={() => nav (`/`)}>
                    View all events
                </Button>
            </p>

        </div>
    );

}