import { useEffect, useState } from "react";

import style from './Doctors.module.css';

export default function Doctors() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/doctors')
            .then((res) => res.json())
            .then((data) => setDoctors(Object.values(data)))
            .catch((error) => console.log(error))

    }, [])

    return (
        <div className={style.doctors}>
            <h3>OUR DOCTORS</h3>
            <div className={style.doctorInfo}>
                {doctors.map((doctor) =>
                    <article className={style.doctorCard} key={doctor._id}>
                        <div className={style.doctorMedia}>
                            <img src={doctor.imageUrl} alt={"doctor's picture"} />
                        </div>
                        <p className={style.name}>{doctor.name}</p>
                    </article>)}

            </div>
        </div>
    )
}