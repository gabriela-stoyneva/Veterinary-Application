import { useEffect, useState } from "react"

export default function Doctors() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/doctors')
            .then((res)=> res.json())
            .then((data)=> setDoctors(Object.values(data)))
            .catch((error)=>console.log(error))

    }, [])

    return (
        <div className="doctors">
            <h3>OUR DOCTORS</h3>
            {doctors.map((doctor) => <article key={doctor._id}>
                <div >
                    <img src={doctor.imageUrl} alt={"doctor's picture"} />
                </div>
                <p>{doctor.name}</p>
            </article>)}
            
        </div>
    )
}