import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as adoptAnimalService from '../../services/adoptAnimalService';
import AddAnimalFormKeys from '../../lib/animalFormKeys';


import style from './AddAnimalForm.module.css'; 

export default function Edit() {
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { animalId } = useParams();
    
    const [animal, setAnimal] = useState({
        [AddAnimalFormKeys.YourName]: '',
        [AddAnimalFormKeys.YourEmail]: '',
        [AddAnimalFormKeys.PetName]: '',
        [AddAnimalFormKeys.AssumedAge]: '',
        [AddAnimalFormKeys.AnimalType]: '',
        [AddAnimalFormKeys.AnimalImage]: '',
        [AddAnimalFormKeys.AnimalInfo]: '',

    });
    

    useEffect(() => {
        adoptAnimalService.getOne(animalId)
            .then(result => {
                setAnimal(result) ;
            });
        
    }, [animalId]);
    

    const editAnimalSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        const arrValidate = Object.values(values);

        for (const currentValue of arrValidate) {
            if (currentValue === '' || currentValue === ' ') {
                setError('Fill all fields!');
    
                return
            }
        }

        try {
            await adoptAnimalService.edit(animalId, values);

            navigate(`/find/${animal._id}`);

        } catch (err) {
            setError(err.message)
        }
    }

    const onChange = (e) => {
        setAnimal(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <form action="POST" className={style.info} onSubmit={editAnimalSubmitHandler}>

                <h2>Here you can edit your Adoption list:</h2>

                <div className={style.infoContainer}>

                    <div>

                        <label htmlFor={AddAnimalFormKeys.YourName}>Your Name:</label>
                        <input
                            type="text"
                            id={AddAnimalFormKeys.YourName}
                            name={AddAnimalFormKeys.YourName}
                            value={animal[AddAnimalFormKeys.YourName]}
                            onChange={onChange}
                            required
                        />
                        <label htmlFor={AddAnimalFormKeys.YourEmail}>Your Email:</label>
                        <input
                            type="email"
                            name={AddAnimalFormKeys.YourEmail}
                            id={AddAnimalFormKeys.YourEmail}
                            value={animal[AddAnimalFormKeys.YourEmail]}
                            onChange={onChange} 
                            required    
                        />
                    </div>

                    <div>
                        <label htmlFor={AddAnimalFormKeys.PetName}>Pet Name:</label>
                        <input
                            type="text"
                            name={AddAnimalFormKeys.PetName}
                            id={AddAnimalFormKeys.PetName}
                            value={animal[AddAnimalFormKeys.PetName]}
                            onChange={onChange}
                            required
                        />

                        <label htmlFor={AddAnimalFormKeys.AssumedAge}>Assumed Age:</label>
                        <input
                            type="text"
                            name={AddAnimalFormKeys.AssumedAge}
                            id={AddAnimalFormKeys.AssumedAge}
                            value={animal[AddAnimalFormKeys.AssumedAge]}
                            onChange={onChange}
                            required
                        />

                        <label htmlFor={AddAnimalFormKeys.AnimalType}>Animal Type:</label>
                        <input
                            type="text"
                            name={AddAnimalFormKeys.AnimalType}
                            id={AddAnimalFormKeys.AnimalType}
                            value={animal[AddAnimalFormKeys.AnimalType]}
                            onChange={onChange}
                            required
                        />

                        <label htmlFor={AddAnimalFormKeys.AnimalImage}>Animal Image:</label>
                        <input
                            type="url"
                            name={AddAnimalFormKeys.AnimalImage}
                            id={AddAnimalFormKeys.AnimalImage}
                            value={animal[AddAnimalFormKeys.AnimalImage]}
                            onChange={onChange}
                            required
                        />

                    </div>

                </div>
                <div className={style.animalInfoArea}>
                    <label htmlFor={AddAnimalFormKeys.AnimalInfo}>Animal story and everything you know for it:</label>
                    <textarea
                        name={AddAnimalFormKeys.AnimalInfo}
                        id={AddAnimalFormKeys.AnimalInfo}
                        cols="80"
                        rows="10"
                        required
                        value={animal[AddAnimalFormKeys.AnimalInfo]}
                        onChange={onChange}
                    >
                    </textarea>
                </div>


                <div className={style.buttons}>
                    <button className={style.submitButton} type="submit">Edit Animal</button>
                    {err && (
                        <p className={style.error}>{err}</p>
                    )}
                </div>
            </form >

        </>
    );

}