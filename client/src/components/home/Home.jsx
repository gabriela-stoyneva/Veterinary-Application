import style from './Home.module.css'
import kitten from '../../assets/pictures/kittenSmaller.jpg'
import Services from './Services'
import AboutUs from './AboutUs'
import BottomMenu from './BottomMenu'


export default function Home() {

    return (
        <>
            <div className={style.home}>
                <div className={style.media}><img src={kitten} alt="kitten" /></div>
                <div className={style.heading}>
                    <h1>
                        Welcome to <span className={style.name}>Happy Pets</span> Clinic!
                    </h1>
                    <button>
                        make an appointment
                    </button>
                </div>

            </div>
            <Services />
            <AboutUs />
            <BottomMenu />
        </>



    )
}