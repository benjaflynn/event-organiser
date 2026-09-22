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
        )
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
        )        
    }
}