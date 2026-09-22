import NavBar from '../routes/NavBar';
import Accordion from 'react-bootstrap/Accordion';

{/**help page, accessible through the nav bar, with explanations on how to use the app displayed with an accordion.*/}

export default function Help() {
    return (
        <div>
            <NavBar />
            <div className='main-areas'>
                <h1>How do I use this application?</h1>
                <br />
                <div id='accordion-container'>
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header><span className='accordion-header'>How do I add an event?</span></Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                In the navigation bar on top, click on "Add Event", then enter your event's information! Make sure to fill in every field as they are all required!
                                Then, click on "submit". Your event's details will be shown to you and you can choose to add another event or view your existing events.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='1'>
                            <Accordion.Header><span className='accordion-header'>How do I see my events?</span></Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                In the navigation bar on top, click on "Dashboard". This will allow you to see all events you have created. You can also sort them by earliest or latest.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='2'>
                            <Accordion.Header><span className='accordion-header'>How do I change an existing event?</span></Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                On your Dashboard, click the green "edit" button under the event you wish to change, then change the necessary details and click "submit".
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='3'>
                            <Accordion.Header><span className='accordion-header'>Can I delete an event?</span></Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                Don't want to hang out with that person anymore? Just go to your Dashboard, then click the red "delete" button under the event you want to delete. It'll be gone forever!
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='4'>
                            <Accordion.Header><span className='accordion-header'>What is the meaning of life?</span></Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                42.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}