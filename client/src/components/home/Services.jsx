import { useEffect, useState } from 'react'

import ServiceItem from './ServiceItem';

import * as adoptAnimalService from '../../services/adoptAnimalService';

import style from './Services.module.css';


//to add context services

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        adoptAnimalService.getAllServices()
            .then((data) => setServices(data))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <section className={style.services}>

                {services.map((service) => (
                    <article key={service._id} className={style.articleService}>
                        <ServiceItem
                            id={service._id}
                            iconUrl={service.iconUrl}
                            service={service.service}
                            text={service.text}
                            imageUrl={service.imageUrl}
                        />
                    </article>

                ))}

            </section>


        </>
    )
}