import { useContext } from 'react';
import { EventContext } from '../EventContext';
import Dropdown from 'react-bootstrap/Dropdown';

{/**this component returns a dropdown button that allows the user to sort the events from earliest or latest first. the function takes both the date and the time of the event into account
    (i.e. if sorting by earliest event but there are two events on the same day, the event that is earlier in the day will be displayed first)
    after cloning the eventArray the clone is sorted and then passed back into state, avoiding mutating the original array.
*/}

export default function EventSorter() {
    const { eventArray, setEventArray } = useContext(EventContext);

    function earliestFirst() {
        const earliestEvents = [...eventArray];
        
        const sortByEarliestFirst = (a, b) => {
            const aDate = new Date(`${a.date}T${a.time}`);
            const bDate = new Date(`${b.date}T${b.time}`);

            return aDate - bDate;
        };

        earliestEvents.sort(sortByEarliestFirst);
        setEventArray(earliestEvents);
    }

    function latestFirst() {
        const latestEvents = [...eventArray];
        
        const sortByLatestFirst = (a, b) => {
            const aDate = new Date(`${a.date}T${a.time}`);
            const bDate = new Date(`${b.date}T${b.time}`);

            return bDate - aDate;
        };

        latestEvents.sort(sortByLatestFirst);
        setEventArray(latestEvents);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant='light' id='dropdown-basic'>
                Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => earliestFirst()}>Earliest first</Dropdown.Item>
                <Dropdown.Item onClick={() => latestFirst()}>Latest first</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}