import { useContext } from 'react';
import { EventContext } from '../EventContext';
import Dropdown from 'react-bootstrap/Dropdown';

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
    )
}