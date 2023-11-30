import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';



import style from './Navigation.module.css'
import Path from '../../lib/paths'



export default function Navigation() {

    return (

        <nav className={style.nav}>
            <ul>
                <li className={style.stateless}> <Link to={Path.Home}>Home</Link></li>
                <li className={style.stateless}> <Link to={Path.Services}></Link> Services</li>
                <li>
                    <span>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={style.dropdown}>
                                About Us
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to={Path.Hospital} >OUR HOSPITAL</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.Doctors}>OUR DOCTORS</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.Team}>OUR TEAM</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.News}>WHAT'S NEW</Dropdown.Item>
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
                                <Dropdown.Item as={Link} to={Path.Appointment}>APPOINTMENT</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.ContactUs}>CONTACT US</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.Questions}>COMMONLY ASKED QUESTIONS</Dropdown.Item>
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
                                <Dropdown.Item as={Link} to={Path.Find}>FIND PET</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.Add}>ADD ANIMAL IN NEED</Dropdown.Item>
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
                                <Dropdown.Item as={Link} to={Path.Login}>LOGIN</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.Register}>REGISTER</Dropdown.Item>
                                <Dropdown.Item as={Link} to={Path.Logout}>LOGOUT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>

                </li>



            </ul>



        </nav>

    )
}