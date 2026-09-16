import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function EventCard({ date, time, title, description, location }) {

    return (
        <Card>
        <Card.Header>{date} at {time}</Card.Header>
        <Card.Body>
            <Card.Title>{title} at {location}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Button variant="danger">Delete</Button>
        </Card.Body>
        </Card>
  );
}