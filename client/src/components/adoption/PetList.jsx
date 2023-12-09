import { useEffect, useState } from "react";



import style from './PetList.module.css'
import Path from "../../lib/paths";
import { Link } from "react-router-dom";



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
                All we need is love!
            </h2>
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

{/* <p>{animal.story}</p> */ }
{/* <div className={style.author}>
                        <p >Publish by: {animal.yourName}  </p>
                        <p>{animal.yourEmail} </div></p>
                     <p>Assumed Age: {animal.assumedAge}</p> */}
