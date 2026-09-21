import { AccordionItem } from 'react-bootstrap';
import NavBar from '../routes/NavBar';
import Accordion from 'react-bootstrap/Accordion';

export default function Help() {
    return (
        <div>
            <NavBar />
            <h1>How do I use any of this?</h1>
            <br />
            <div>
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>How do I add an event?</Accordion.Header>
                        <Accordion.Body>
                            I don't know either.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>How do I see my events?</Accordion.Header>
                        <Accordion.Body>
                            With your eyes.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>How do I change an existing event?</Accordion.Header>
                        <Accordion.Body>Dunno man...</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}