import { useEffect, useState } from "react";

import style from './PetList.module.css'



export default function PetList() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/animals')
            .then((res) => res.json())
            .then((data) => setAnimals(Object.values(data)))
            .catch((error) => console.log(error))

    }, [])


    return (
        <div className={style.petList}>

        <h2> 
            We all need love and a home!
        </h2>
            <div className={style.container}>
                {animals.map((animal) => (
                    <article key={animal._id} className={style.animalCard}>
                        <h5>{animal.petName}</h5>
                        <div className={style.media}>
                            <img src={animal.imageUrl} alt="animal" />
                        </div>
                        <p>Assumed Age: {animal.assumedAge}</p>
                        <p>Type: {animal.animalType}</p>
                        <p>{animal.story}</p>
                        <div className={style.author}>
                        <p >Publish by: {animal.publisherName}  </p>
                        <p>{animal.publisherEmail}</p>

                        </div>
                        
                        <div>
                    <button>Details</button>
                </div>
                    </article>
                ))}
                
            </div>
        </div>
    )
}