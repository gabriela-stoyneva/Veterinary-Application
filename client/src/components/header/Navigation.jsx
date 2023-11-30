import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';

import style from './Navigation.module.css'

export default function Navigation() {
    return (

        <nav className={style.nav}>
            <ul>
                <li className={style.stateless}> <Link to="/">Home</Link></li>
                <li className={style.stateless}> <Link to="/services"></Link> Services</li>
                <li>
                    <span>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={style.dropdown}>
                                About Us
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/hospital" >OUR HOSPITAL</Dropdown.Item>
                                <Dropdown.Item href="/doctors">OUR DOCTORS</Dropdown.Item>
                                <Dropdown.Item href="/team">OUR TEAM</Dropdown.Item>
                                <Dropdown.Item href="/news">WHAT'S NEW</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                </li>
                <li>
                    <span>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={style.dropdown}>
                                CONTACT US
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/contact-us">CONTACT US</Dropdown.Item>
                                <Dropdown.Item href="/questions">COMMONLY ASKED QUESTIONS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>

                </li>
                <li>
                    <span>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={style.dropdown}>
                                Adopt
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/find">FIND PET</Dropdown.Item>
                                <Dropdown.Item href="/add">ADD ANIMAL IN NEED</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                </li>

               
                <li>
                    <span>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={style.dropdown}>
                                Clients
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/login" >LOGIN</Dropdown.Item>
                                <Dropdown.Item href="/register">REGISTER</Dropdown.Item>
                                <Dropdown.Item href="/logout">LOGOUT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>

                </li>



            </ul>



        </nav>

    )
}