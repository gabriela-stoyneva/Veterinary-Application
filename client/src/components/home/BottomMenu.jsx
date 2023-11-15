import style from './BottomMenu.module.css';
import logoWhite from '../../assets/logo-white.png'


export default function BottomMenu() {

    return (
        <section className={style.bottom}>
            <div className={style.logoBottom}>
                <img src={logoWhite} alt="logo-white" />
            </div>
            <article className={style.bottomArticle}>
                <h4>Hospital Location</h4>
                <p>2132 Mladost</p>
                <p>Sofia, Bulgaria</p>
                <p>+359 8 99-59-40</p>
            </article>
            <article className={style.bottomArticle}>
                <h4>About Us</h4>
                <p>Doctors</p>
                <p>Team</p>
            </article>
            <article className={style.bottomArticle}>
                <h4>Services</h4>
                <p>Preventative Care/Wellness</p>
                <p>Emergencies</p>
                <p>In-House Diagnostics</p>
                <p>Dentistry</p>
                <p>Microchips</p>
                <p>Surgery</p>
                <p>Health Certificates for Travel</p>
                <p>Vaccinations</p>
                <p>Day Hospitalization</p>
                <p>Palliative Care</p>
                <p>Parasite prevention</p>
                <p>Allergy treatment</p>
                <p>Ear/skin treatment</p>
            </article>
            <article className={style.bottomArticle}>
                <h4>Appointment</h4>
                <h4>Resources</h4>
                <h4>Contact</h4>

            </article>


        </section>
    )

}