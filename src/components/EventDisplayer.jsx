{/**this needs a dropdown sort menu i think. */}
import { useContext } from 'react';
import { EventContext } from '../EventContext';
import EventCard from './EventCard';
import { Row, Col, Container } from 'react-bootstrap';

export default function EventDisplayer() {

    const { eventArray, setEventArray } = useContext(EventContext);

    return (
        <div>
        {eventArray.map(event => {
            return <Col key={event.title}><EventCard title={event.title} date={event.date} time={event.time} description={event.description} location={event.location} /></Col>})}
        </div>
    )

}
