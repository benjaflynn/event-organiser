import NavBar from '../routes/NavBar';
import LoginPage from './LoginArea.jsx';
import { useContext, useState } from 'react';
import { RegisterContext } from '../RegisterContext';
import { useNavigate } from 'react-router-dom';
import EventDisplayer from './EventDisplayer.jsx'

export default function Dashboard() {

    const nav = useNavigate();

    const { userData, setUserData } = useContext(RegisterContext);

    const [loginData, setLoginData] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState('false');

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
                <EventDisplayer />
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <LoginPage setLoginData={setLoginData} userCheck={userCheck} />
                <p>{loginProblem}</p>
                <p>Don't have an account yet? <button onClick={() => nav (`/register-me`)}>Register here!</button></p>
            </div>
        )        
    }
}