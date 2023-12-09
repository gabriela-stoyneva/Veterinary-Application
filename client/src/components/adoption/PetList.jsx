import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import style from './PetList.module.css'


export default function PetList() {

    const [animals, setAnimals] = useState([]);
    const [err, setError] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/animals')
            .then((res) => res.json())
            .then((data) => setAnimals(Object.values(data)))
            .catch((error) => setError(error.message))

    }, [])


    return (
        <div className={style.petList}>

            <h2>
                All we need is love!
            </h2>
            {err && (
                <p className={style.error}>{err}</p>
            )}
            <div className={style.container}>

                {animals.map((animal) => (
                    <article key={animal._id} className={style.animalCard}>
                        <div>
                            <h5>{animal.petName}</h5>
                            <p>Type: {animal.animalType}</p>

                        </div>

                        <div className={style.media}>
                            <img src={animal.animalImage} alt="animal" />
                        </div>
                        <div>
                            <button type="button"><Link to={`/find/${animal._id}`}>Details</Link></button>
                        </div>
                    </article>
                ))}

            </div>
        </div>
    )
}
