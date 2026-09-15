import NavBar from '../routes/NavBar';
import { useContext } from 'react';
import { LoginContext } from '../LoginContext';

export default function Dashboard() {

    const { login, setLogin } = useContext(LoginContext);
    return (
        <div>
            <NavBar />
            {
                login === 'loggedIn' ? <div>Welcome to your Dashboard!</div> : <div>Please log in.</div>
            }
        </div>
    );
}