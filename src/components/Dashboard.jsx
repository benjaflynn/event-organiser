import NavBar from '../routes/NavBar';
import LoginPage from './LoginArea.jsx';
import { useContext, useState } from 'react';
import { RegisterContext } from '../RegisterContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const nav = useNavigate();

    const { userData, setUserData } = useContext(RegisterContext);

    const [loginData, setLoginData] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState('false');

    function userCheck(userData, loginData) {
        if (loginData.email === userData.email && loginData.password === userData.password) {
            console.log("logged in!");
            setIsLoggedIn('true');
        } else if (loginData.email != userData.email && loginData.password === userData.password) {
            console.log("wrong email!");
        } else if (loginData.email === userData.email && loginData.password != userData.password) {
            console.log("wrong password!");
        } else {
            console.log("you're not even registered.")
        }
    }
    
    if (isLoggedIn === 'true') {
        return (
            <div>
                <NavBar />
               <div>Welcome to your dashboard!</div> 
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <LoginPage setLoginData={setLoginData} userCheck={userCheck} />
                <p>Don't have an account yet? <button onClick={() => nav (`/register-me`)}>Register here!</button></p>
            </div>
        )        
    }
}