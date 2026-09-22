import { useContext } from 'react';
import { EventContext } from '../EventContext';
import EventCard from './EventCard';
import { Row, Col, Container } from 'react-bootstrap';
import EventSorter from './EventSorter';

{/**this component displays all events currently in the eventArray by mapping the array to the EventCard component.
    it also provides functions to edit or delete events:
    to edit, a new form with the currently selected event shows; upon submitting the form, the eventArray is cloned, then the old event is changed to reflect the new event;
    to delete, the selected event is filtered out of the existing eventArray, and the new array is passed into state. the user is asked to confirm that they want to delete the event.
    both of these methods avoid mutating the array.
*/}

export default function EventDisplayer() {

    const { eventArray, setEventArray } = useContext(EventContext);

    function eventEditBtn(e) {
        let whatEdit = e.target.parentElement.parentElement.parentElement.parentElement.id;
        let idGet = whatEdit + "-overlay";
        document.getElementById(idGet).style.display = "block";
    }

    function eventEditor(values, title) {
        const newEvents = eventArray.map(item => {
            if (item.title === title) {
                return {...item, 'title': values.title, 'date': values.date, 'time': values.time, 'location': values.location, 'description': values.description}
            } else return item;
        });

        console.log(newEvents);
        setEventArray(newEvents);
    }

    function eventDeleter(e) {
        let whatDelete = e.target.parentElement.parentElement.parentElement.parentElement.id;
        let text = "Are you sure you want to delete this event?";
        if (confirm(text) === true) {
            const filteredArray = eventArray.filter(item => !whatDelete.includes(item.title));
        setEventArray(filteredArray);
        }
    }

    return (
        <Container>
            <EventSorter />
            <br />
            <Col>
            {eventArray.map(event => {
                return <Row key={event.title} id={event.title} className='event-card-row'>
                    <EventCard title={event.title} date={event.date} time={event.time} description={event.description} location={event.location} eventEditBtn={eventEditBtn} eventEditor={eventEditor} eventDeleter={eventDeleter} />
                    </Row>})}
            </Col>
        </Container>
    );
}
