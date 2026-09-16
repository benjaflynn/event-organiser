{/**this needs a dropdown sort menu i think. */}
import { useContext } from 'react';
import { EventContext } from '../EventContext';
import EventCard from './EventCard';
import { Row, Col, Container } from 'react-bootstrap';

export default function EventDisplayer() {

    const { eventArray, setEventArray } = useContext(EventContext);

    function eventEditor() {
        console.log("edit");
    }

    function eventDeleter(e) {
        let whatDelete = e.target.parentElement.parentElement.parentElement.id;
        let updateEventArray = eventArray;
        const setTitleSearch = (element) => element.title === whatDelete;
        updateEventArray.splice(setTitleSearch, 1);
        console.log(updateEventArray);
        setEventArray(updateEventArray);
    }

    return (
        <Container>
            <Col>
            {eventArray.map(event => {
                return <Row key={event.title} id={event.title}><EventCard title={event.title} date={event.date} time={event.time} description={event.description} location={event.location} eventEditor={eventEditor} eventDeleter={eventDeleter} /></Row>})}
            </Col>
        </Container>
    )
}
