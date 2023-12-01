import clinic from '../../assets/clinic.avif';
import style from './Hospital.module.css';

export default function Hospital() {

    return (
        <div className={style.hospital}>
            <h3>OUR HOSPITAL</h3>
            <h6>WELCOME TO HAPPY PETS HOSPITAL!</h6>
            <p>When you and your pet visit HAPPY PETS Hospital, you become part of our family, and our goal is to become a partner in your pet’s good health for a lifetime.</p>
            <p>Our mission as a veterinary practice embodies many of the same values you’d wish for in a family, including dependability, dedication, compassion, and understanding.</p>
            <p>We hope you and your pet feel at home from the minute you walk in the door. Please don’t hesitate to let us know if there’s anything we can do to help your pet in any way.</p>
            <div className={style.media}>
                <img src={clinic} alt="clinic" />
            </div>
        </div>
    )
}