import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='navbar'>
            <nav>
                <ul className='nav-link-group'>
                    <li>
                        <Link to='/' className='nav-link'>
                        Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to='/add-event' className='nav-link'>
                        Add Event
                        </Link>
                    </li>
                    <li>
                        <Link to='/help' className='nav-link'>
                        Help
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}