import doctors from '../../assets/doctors.avif';
import style from './Team.module.css';

export default function Team() {

    return (
        <div className={style.team}>
            <h3>OUR TEAM</h3>
            <div className={style.container}>
                <p>Our friendly, careful and supportive staff genuinely cares for your four-legged companions. Dr. Niu has recently joined us as practice owner, and our dedicated staff remains the same. You will often see the same smiling faces each time you visit! Our comprehensive approach to pet health involves a team of talented and caring animal lovers devoted to your pet’s specific health needs.</p>
                <div className={style.media}>
                    <img src={doctors} alt="team" />
                </div>

            </div>

        </div>
    )
}