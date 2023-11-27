import { Link } from 'react-router-dom';

import logo from "../../assets/happy.png"
import style from "./Header.module.css"

import Navigation from "./Navigation";


export default function Header() {

    return (
        <>
            <header>
                <div className={style.logo}>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    
                </div>

                <Navigation />
            </header>

        </>

    )
}