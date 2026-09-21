{/**this needs a dropdown sort menu i think. */}
import { useContext } from 'react';
import { EventContext } from '../EventContext';
import EventCard from './EventCard';
import { Row, Col, Container } from 'react-bootstrap';

export default function EventDisplayer() {

    const { eventArray, setEventArray } = useContext(EventContext);

    function eventEditBtn(e) {
        let whatEdit = e.target.parentElement.parentElement.parentElement.id;
        let idGet = whatEdit + "-overlay";
        document.getElementById(idGet).style.display = "block";
    };

    function eventEditor(values, title) {
        console.log("the new values are: ", values);
        console.log("the event array is: ", eventArray);
        console.log("the clicked element title is: ", title);

        let filteredIndex = eventArray.findIndex((element) => element.title === title);
        console.log(filteredIndex);
        
        const newEvents = eventArray.map(item => {
            if (item.title === title) {
                return {...item, 'title': values.title, 'date': values.date, 'time': values.time, 'location': values.location, 'description': values.description}
            } else return item;
        });

        console.log(newEvents);
        setEventArray(newEvents);
    }

    function eventDeleter(e) {
        let whatDelete = e.target.parentElement.parentElement.parentElement.id;
        const filteredArray = eventArray.filter(item => !whatDelete.includes(item.title));
        setEventArray(filteredArray);
    }

    return (
        <Container>
            <Col>
            {eventArray.map(event => {
                return <Row key={event.title} id={event.title}><EventCard title={event.title} date={event.date} time={event.time} description={event.description} location={event.location} eventEditBtn={eventEditBtn} eventEditor={eventEditor} eventDeleter={eventDeleter} /></Row>})}
            </Col>
        </Container>
    )
}
