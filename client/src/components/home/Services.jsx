import { useEffect, useState } from 'react'
import style from './Services.module.css';
import ServiceItem from './ServiceItem';

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/services')
            .then(result => result.json())
            .then(data => setServices(Object.values(data)))

    }, [])

    return (
        <>
            <section className={style.services}>

                {services.map((service) => (
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


        </>
    )
}