import NavBar from '../routes/NavBar';
import LoginArea from './LoginArea.jsx';
import { useContext, useState } from 'react';
import { LoginContext } from '../LoginContext';
import { useNavigate } from 'react-router-dom';
import EventDisplayer from './EventDisplayer.jsx';
import { EventContext } from '../EventContext';
import RegistrationArea from './RegistrationArea.jsx';
import Button from 'react-bootstrap/Button';
import { RegisterContext } from '../RegisterContext.jsx';

{/**this is the main component.
    its two main states are if the user is logged in or not.
    if yes, the user is shown the navigation bar, a greeting, and either existing events (if any exist in the eventArray), or a button to create events. there is then also a logout button, which sets the login state to false and therefore logs the user back out.
    if no, the user is shown the login area requesting an email and password through the LoginArea component.
    also, if no registration information is stored within RegisterContext, the registration form is shown; otherwise the DOM remains empty in that area.
    as the nav bar is only available to logged in users, the RegistrationArea component has its own help section; a new user can't not come across it as they have to register before they can even login.
*/}

export default function Dashboard() {

    const navAdd = useNavigate();

    const { userData, setUserData } = useContext(RegisterContext);

    const [loginData, setLoginData] = useState('');

    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

    const { eventArray, setEventArray } = useContext(EventContext);

    function userCheck(userData, loginData) {
        if (loginData.email === userData.email && loginData.password === userData.password) {
            setIsLoggedIn(current => !current);
        }
    }

    if (isLoggedIn === true) {
        return (
            <div>
                <NavBar />
                <div className='main-areas'>
                    <h3>Welcome to your dashboard!</h3>
                    <br />
                    {
                        eventArray ? <EventDisplayer /> : <><span><h4>No events yet...</h4></span><br/><Button variant='success' onClick={() => navAdd (`/add-event`)}><h5>Add an event?</h5></Button><br /></>
                    }
                    <br />
                    <p><Button id='logout-btn' variant='danger' onClick={() => setIsLoggedIn(false)}>Logout</Button></p>
                </div>
            </div>
        );

    } else {
        return (
            <>
                <div className='main-areas'>
                    <h2>Please log in to view your dashboard</h2>
                    <br />
                    <LoginArea setLoginData={setLoginData} userCheck={userCheck} userData={userData}/>
                    <br />
                    {
                        userData === '' ? <RegistrationArea setUserData={setUserData} /> : <></>
                    }
                    
                </div>
                
            </>
        );
    }
}