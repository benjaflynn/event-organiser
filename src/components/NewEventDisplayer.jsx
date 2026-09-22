import { useNavigate } from "react-router-dom";

export default function NewEventDisplayer({ newEvent, setNewEvent }) {

    const nav = useNavigate();

    return (
        <div>
            <h3>Your new event, {newEvent.title}, has been saved!</h3>
            <div>
                <ul>
                    <li>Date: {newEvent.date}</li>
                    <li>Time: {newEvent.time}</li>
                    <li>Location: {newEvent.location}</li>
                    <br />
                    <li>Description: {newEvent.description}</li>
                </ul>
            </div>
            <br />
            <p><button onClick={() => {setNewEvent('')}}>Add another event?</button>
            <br />
            <button onClick={() => nav (`/`)}>View all events!</button></p>
        </div>
    );

}