import { Link } from 'react-router-dom';

import logo from "../../assets/happy.png"
import style from "./Header.module.css"

import Navigation from "./Navigation";
import Path from '../../lib/paths';


export default function Header() {

    return (
        <>
            <header>
                <div className={style.logo}>
                    <Link to={Path.Home}><img src={logo} alt="logo" /></Link>
                    
                </div>

                <Navigation />
            </header>

        </>

    )
}