import { useContext } from 'react';
import { Link } from 'react-router-dom';

import kitten from '../../assets/pictures/kittenSmaller.jpg';
import Path from '../../lib/paths';

import styles from './Home.module.css';
import style from './Services.module.css';


import AboutUs from './AboutUs';
import ServiceContext from '../../contexts/serviceContext';


export default function Home() {

    const { services } = useContext(ServiceContext)
    const slicedArr = services.slice(0, 3)


    return (
        <>
            <div className={styles.home}>
                <div className={styles.media}><img src={kitten} alt="kitten" /></div>
                <div className={styles.heading}>
                    <h1>
                        Welcome to <span className={styles.name}>Happy Pets</span> Clinic!
                    </h1>
                    <button>
                        <Link to={Path.ContactUs}>Contact us here!</Link>

                    </button>
                </div>
            </div >
            <div className={styles.serviceHome}>

                <h2>Services</h2>

                <section className={style.slicedService}>

                    {slicedArr.map((service) => (
                        <article key={service._id} className={style.articleService}>
                            <div className={style.info}>
                                <i className={service.iconUrl}></i>
                                <h3>{service.service}</h3>
                            </div>

                            <div className={style.media}>
                                <img src={service.imageUrl} />
                            </div>
                        </article>

                    ))}

                </section>

                <div className={styles.button}>
                    <button><Link to={Path.Services} >View all services</Link></button>
                </div>

            </div>

            <AboutUs />

        </>

    )
}