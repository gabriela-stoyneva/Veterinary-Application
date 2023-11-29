import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';

import style from './Navigation.module.css'

export default function Navigation() {
    return (

        <nav className={style.nav}>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li>About us</li>
                <li>Services</li>
                <li>What's new</li>
                <li> <Link to="/contact-us">Contact us</Link></li>
                <span> <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={style.dropdown}>
                            Clients
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/login" >LOGIN</Dropdown.Item>
                            <Dropdown.Item href="/register">REGISTER</Dropdown.Item>
                            <Dropdown.Item href="/logout">LOGOUT</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown></span>
            </ul>


        </nav>

    )
}