import logo from "../assets/happy.png"
import style from "./Header.module.css"

import Navigation from "./Navigation";


export default function Header() {

    return (
        <>
            <header>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>

                <Navigation />
            </header>

        </>

    )
}