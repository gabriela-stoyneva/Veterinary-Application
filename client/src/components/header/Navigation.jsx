import { Link } from 'react-router-dom';

import style from './Navigation.module.css'

export default function Navigation() {
    return (

        <nav className={style.nav}>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li>About us</li>
                <li>Services</li>
                <li>Clients</li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link> </li>
                <li>What's new</li>
                <li>Contact us</li>
            </ul>
        </nav>

    )
}