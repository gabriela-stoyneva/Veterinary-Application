import { Link } from 'react-router-dom';


import style from './BottomMenu.module.css';

import logoWhite from '../../assets/logo-white.png';

import Path from '../../lib/paths';


export default function BottomMenu() {

    return (
        <section className={style.bottom}>

            <article className={style.bottomArticle}>
                <h4>Hospital Location</h4>
                <address>
                    <p>2132 Mladost</p>
                    <p>Sofia, Bulgaria</p>
                    <p>+359 8 99-59-40</p>
                </address>

            </article>
            <article className={style.bottomArticle}>
                <h4> <Link to={Path.Hospital} >About us </Link></h4>
                <p> <Link to={Path.Doctors} >Doctors </Link></p>
                <p> <Link to={Path.Team} >Team </Link></p>
            </article>
            <article className={style.bottomArticle}>
                <h4> <Link to={Path.Services} >Services </Link></h4>
                <h4> <Link to={Path.ContactUs} >Contact Us </Link></h4>
            </article>

            <div className={style.logoBottom}>
                <Link to={Path.Home}> <img src={logoWhite} alt="logo-white" /></Link>
            </div>

        </section>
    )

}