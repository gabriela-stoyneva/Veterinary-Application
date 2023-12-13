import { useContext, useState } from 'react';
import style from './ContactUsForm.module.css';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

import * as adoptAnimalService from '../../services/adoptAnimalService'
import Path from '../../lib/paths';
import { Link, useNavigate } from 'react-router-dom';




export default function ContactUsForm() {
    const navigate = useNavigate();


    const { email, userId, isAuthenticated, err } = useContext(AuthContext);

    const addQuestionHandler = async (data) => {

        try {
            const result =await adoptAnimalService.createQuestions(data)
            
        } catch (error) {
            ({...err, 'message': error});
        }
        navigate(Path.Home);

    };




    const ContactFormKeys = {
        OwnerName: 'ownerName',
        Email: 'email',
        PetName: 'petName',
        Age: 'age',
        Type: 'type',
        Breed: 'breed',
        Question: 'question',

    }


    const { values, onChange, onSubmit } = useForm(addQuestionHandler, {
        [ContactFormKeys.OwnerName]: '',
        [ContactFormKeys.Email]: '',
        [ContactFormKeys.PetName]: '',
        [ContactFormKeys.Age]: '',
        [ContactFormKeys.Type]: '',
        [ContactFormKeys.Breed]: '',
        [ContactFormKeys.Question]: '',
    });


    return (
        <>

            <form action="POST" className={style.question} onSubmit={onSubmit}>

                <h2>Do you have a question? Contact us here:</h2>

                <div className={style.container}>

                    <div>
                        <label htmlFor={ContactFormKeys.OwnerName}>Owner Name:</label>
                        <input
                            type="text"
                            name={ContactFormKeys.OwnerName}
                            id={ContactFormKeys.OwnerName}
                            value={values[ContactFormKeys.OwnerName]}
                            onChange={onChange}
                            required
                        />
                        <label htmlFor={ContactFormKeys.Email}>Email:</label>
                        <input
                            type="email"
                            name={ContactFormKeys.Email}
                            id={ContactFormKeys.Email}
                            value={values[ContactFormKeys.Email]}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor={ContactFormKeys.PetName}>Pet Name:</label>
                        <input
                            type="text"
                            name={ContactFormKeys.PetName}
                            id={ContactFormKeys.PetName}
                            value={values[ContactFormKeys.PetName]}
                            onChange={onChange}
                            required />

                        <label htmlFor={ContactFormKeys.Age}>Age:</label>
                        <input
                            type="text"
                            name={ContactFormKeys.Age}
                            id={ContactFormKeys.Age}
                            value={values[ContactFormKeys.Age]}
                            onChange={onChange}
                            required />

                        <label htmlFor={ContactFormKeys.Type}>Type:</label>
                        <input
                            type="text"
                            name={ContactFormKeys.Type}
                            onChange={onChange}
                            id={ContactFormKeys.Type}
                            value={values[ContactFormKeys.Type]}
                            required
                        />

                        <label htmlFor={ContactFormKeys.Breed}>Breed:</label>
                        <input
                            type="text"
                            name={ContactFormKeys.Breed}
                            id={ContactFormKeys.Breed}
                            value={values[ContactFormKeys.Breed]}
                            onChange={onChange}
                            required
                        />
                    </div>

                </div>
                <div className={style.questionArea}>
                    <label htmlFor={ContactFormKeys.Question}>We are here for you and your pet:</label>
                    <textarea
                        name={ContactFormKeys.Question}
                        id={ContactFormKeys.Question}
                        value={values[ContactFormKeys.Question]}
                        cols="80" rows="10"
                        onChange={onChange}
                        required
                        placeholder='Type your question here .....'
                    >

                    </textarea>
                </div>

                <div className={style.buttons}>
                    {!isAuthenticated && (
                        <p>You need to login if you want to contact us! Login <Link to={Path.Login}><span className={style.here}>here!</span></Link></p>
                    )}
                    {isAuthenticated && (<button className={style.submitButton} type="submit">Send</button>)}
                    {err && (
                        <p className={style.error}>{err.message}</p>
                    )}
                </div>
            </form>

        </>
    )
}