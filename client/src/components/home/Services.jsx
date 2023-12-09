import { useContext} from 'react'

import ServiceItem from './ServiceItem';
import ServiceContext from '../../contexts/serviceContext';

import style from './Services.module.css';


export default function Services() {

    const { services } = useContext(ServiceContext);

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