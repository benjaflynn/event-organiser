import NavBar from '../routes/NavBar';
import Accordion from 'react-bootstrap/Accordion';

export default function Help() {
    return (
        <div>
            <NavBar />
            <h1>How do I use this application?</h1>
            <br />
            <div>
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>How do I add an event?</Accordion.Header>
                        <Accordion.Body>
                            In the navigation bar on top, click on "Add Event", then enter your event's information! Make sure to fill in every field, as they are all required!
                            Then, click on "submit". Your event's details will be shown to you, and you can choose to add another event or view your existing events.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>How do I see my events?</Accordion.Header>
                        <Accordion.Body>
                            In the navigation bar on top, click on "Dashboard". This will allow you to see all events you have created. You can also sort them by earliest or latest.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>How do I change an existing event?</Accordion.Header>
                        <Accordion.Body>
                            On your Dashboard, click the green "edit" button under the event you wish to change, then change the necessary details and click "submit".
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>Can I delete an event?</Accordion.Header>
                        <Accordion.Body>
                            Don't want to hang out with that person anymore? Just go to your Dashboard, then click the red "delete" button under the event you want to delete. It'll be gone forever!
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='4'>
                        <Accordion.Header>What is the meaning of life?</Accordion.Header>
                        <Accordion.Body>
                            42.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}