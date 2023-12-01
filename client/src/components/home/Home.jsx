import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import style from './Services.module.css';

import kitten from '../../assets/pictures/kittenSmaller.jpg';

import AboutUs from './AboutUs';
import ServiceItem from './ServiceItem';

import Path from '../../lib/paths';



export default function Home() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/services')
            .then(result => result.json())
            .then(data => setServices(Object.values(data)))

    }, [])
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
                        make an appointment
                    </button>
                </div>
            </div >
            <div className={styles.serviceHome}>

                <h2>Services</h2>

                <section className={style.slicedService}>

                    {slicedArr.map((service) => (
                        <ServiceItem
                            key={service._id}
                            id={service._id}
                            iconUrl={service.iconUrl}
                            service={service.service}
                            text={service.text}
                            imageUrl={service.imageUrl}
                        />
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