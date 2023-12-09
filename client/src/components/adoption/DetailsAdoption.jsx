import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';

import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';

import useForm from '../../hooks/useForm';

import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";


export default function DetailsAdoption() {

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
                        <button><Link to={Path.Details}>Details</Link></button>
                    </div>
                </article>
            ))}

        </div>
    </div>
    )
}