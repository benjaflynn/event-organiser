import NavBar from '../routes/NavBar';
import LoginArea from './LoginArea.jsx';
import { useContext, useState } from 'react';
import { LoginContext } from '../LoginContext';
import { useNavigate } from 'react-router-dom';
import EventDisplayer from './EventDisplayer.jsx';
import { EventContext } from '../EventContext';
import RegistrationArea from './RegistrationArea.jsx';
import Button from 'react-bootstrap/Button';


export default function Dashboard() {

    const navAdd = useNavigate();

    const [userData, setUserData] = useState('');

    const [loginData, setLoginData] = useState('');

    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

    const { eventArray, setEventArray } = useContext(EventContext);

    const loginProblem = '';

    function userCheck(userData, loginData) {
        if (loginData.email === userData.email && loginData.password === userData.password) {
            window.alert('Login successful!')
            setIsLoggedIn('true');
        } else if (loginData.email != userData.email && loginData.password === userData.password) {
            console.log("wrong email!");
        } else if (loginData.email === userData.email && loginData.password != userData.password) {
            console.log("wrong password!");
        } else {
            console.log("you're not even registered.");
        }
    }

    if (isLoggedIn === 'true') {
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
                    <p><Button id='logout-btn' variant='danger' onClick={() => setIsLoggedIn('false')}>Logout</Button></p>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div id='login-area'>
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