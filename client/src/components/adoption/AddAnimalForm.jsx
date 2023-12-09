import { useContext, useState } from 'react';

import style from './AddAnimalForm.module.css';

import AuthContext from '../../contexts/authContext';
import AddAnimalFormKeys from '../../lib/animalFormKeys';
import useForm from '../../hooks/useForm';


export default function AddAnimalForm() {
    
        const { addItemHandler, err } = useContext(AuthContext);

        const { values, onChange, onSubmit } = useForm(addItemHandler, {
            [AddAnimalFormKeys.YourName]: '',
            [AddAnimalFormKeys.YourEmail]: '',
            [AddAnimalFormKeys.PetName]: '',
            [AddAnimalFormKeys.AssumedAge]: '',
            [AddAnimalFormKeys.AnimalType]: '',
            [AddAnimalFormKeys.AnimalImage]: '',
            [AddAnimalFormKeys.AnimalInfo]: '',

        });

    return (
        <>
            <form action="POST" className={style.info} onSubmit={onSubmit}>

                <h2>You can give chance to Happy life for some animal in need:</h2>

                <div className={style.infoContainer}>

                    <div>

                        <label htmlFor={AddAnimalFormKeys.YourName}>Your Name:</label>
                        <input
                            type="text"
                            id={AddAnimalFormKeys.YourName}
                            name={AddAnimalFormKeys.YourName}
                            value={values[AddAnimalFormKeys.YourName]}
                            onChange={onChange}
                        />
                        <label htmlFor={AddAnimalFormKeys.YourEmail}>Your Email:</label>
                        <input
                            type="email"
                            name={AddAnimalFormKeys.YourEmail}
                            id={AddAnimalFormKeys.YourEmail}
                            value={values[AddAnimalFormKeys.YourEmail]}
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        <label htmlFor={AddAnimalFormKeys.PetName}>Pet Name:</label>
                        <input
                            type="text"
                            name={AddAnimalFormKeys.PetName}
                            id={AddAnimalFormKeys.PetName}
                            value={values[AddAnimalFormKeys.PetName]}
                            onChange={onChange}
                        />

                        <label htmlFor={AddAnimalFormKeys.AssumedAge}>Assumed Age:</label>
                        <input
                            type="text"
                            name={AddAnimalFormKeys.AssumedAge}
                            id={AddAnimalFormKeys.AssumedAge}
                            value={values[AddAnimalFormKeys.AssumedAge]}
                            onChange={onChange}
                        />

                        <label htmlFor={AddAnimalFormKeys.AnimalType}>Animal Type:</label>
                        <input
                            type="text"
                            name={AddAnimalFormKeys.AnimalType}
                            id={AddAnimalFormKeys.AnimalType}
                            value={values[AddAnimalFormKeys.AnimalType]}
                            onChange={onChange}
                        />

                        <label htmlFor={AddAnimalFormKeys.AnimalImage}>Animal Image:</label>
                        <input
                            type="url"
                            name={AddAnimalFormKeys.AnimalImage}
                            id={AddAnimalFormKeys.AnimalImage}
                            value={values[AddAnimalFormKeys.AnimalImage]}
                            onChange={onChange}
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
                        value={values[AddAnimalFormKeys.AnimalInfo]}
                        onChange={onChange}
                    >
                    </textarea>
                </div>


                <div className={style.buttons}>
                    <button className={style.submitButton} type="submit">Add Animal</button>
                  {err && (
                        <p className={style.error}>{err.message}</p>
                  )}  
                </div>
            </form >

        </>
    )

}