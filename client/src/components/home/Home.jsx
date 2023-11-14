import style from './Home.module.css'
import kitten from '../../assets/pictures/kitten.jpg'


export default function Home() {

    return (
        <div className={style.home}>
            <div className={style.media}><img src={kitten} alt="" /></div>
            <div className={style.heading}>
                <h1>
                    Welcome to Happy Pets Clinic!
                </h1>
                <button>
                    make an appointment
                </button>
            </div>

        </div>


    )
}