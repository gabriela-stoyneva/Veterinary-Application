import style from './AboutUs.module.css';
import doctors from '../../assets/pictures/doctors.jpg'

export default function AboutUs() {

    return (
        <section className={style.aboutUs}>
            <div className={style.info}>
                <h2>ABOUT THE TEAM</h2>
                <p>Our friendly and supportive staff genuinely care for your companions. We have recently gained Dr. Niu as our practice owner, and our dedicated staff remains the same. This means that you will often see the same smiling faces each time you visit! Our comprehensive approach to pet health involves a team of talented and caring animal lovers devoted to your pet’s specific health needs.</p>
                <button>Get to know us!</button>
            </div>
            <div className={style.media}>
                <img src={doctors} alt="doctors" />
            </div>

        </section>
    )
}