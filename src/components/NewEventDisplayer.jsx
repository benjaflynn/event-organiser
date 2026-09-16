export default function NewEventDisplayer({ newEvent, setNewEvent }) {

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
            <p><button onClick={() => {setNewEvent('')}}>Add another event?</button></p>
        </div>
    );

}