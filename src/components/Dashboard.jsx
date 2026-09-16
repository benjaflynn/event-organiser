import NavBar from '../routes/NavBar';
import LoginArea from './LoginArea.jsx';
import { useContext, useState } from 'react';
import { LoginContext } from '../LoginContext';
import { useNavigate } from 'react-router-dom';
import EventDisplayer from './EventDisplayer.jsx';
import { EventContext } from '../EventContext';
import RegistrationArea from './RegistrationArea.jsx';


export default function Dashboard() {

    const navAdd = useNavigate();

    const [userData, setUserData] = useState('');

    const [loginData, setLoginData] = useState('');

    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

    const { eventArray, setEventArray } = useContext(EventContext);

    const loginProblem = '';

    function userCheck(userData, loginData) {
        if (loginData.email === userData.email && loginData.password === userData.password) {
            console.log("logged in!");
            setIsLoggedIn('true');
        } else if (loginData.email != userData.email && loginData.password === userData.password) {
            console.log("wrong email!");
            loginProblem += "No user with this email address."
        } else if (loginData.email === userData.email && loginData.password != userData.password) {
            console.log("wrong password!");
            loginProblem += "Your password doesn't match.";
        } else {
            console.log("you're not even registered bro.");
            loginProblem += "You need to register first!"
        }
    }

    if (isLoggedIn === 'true') {
        return (
            <div>
                <NavBar />
                <div>Welcome to your dashboard!</div>
                {
                    eventArray  ? <EventDisplayer /> : <button onClick={() => navAdd (`/add-event`)}>Click me!</button>
                }
                <div><button onClick={() => setIsLoggedIn('false')}>Logout</button></div>
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <LoginArea setLoginData={setLoginData} userCheck={userCheck} userData={userData}/>
                <span>{loginProblem}</span>
                <div>Don't have an account yet? <RegistrationArea setUserData={setUserData}/></div>
            </div>
        )        
    }
}