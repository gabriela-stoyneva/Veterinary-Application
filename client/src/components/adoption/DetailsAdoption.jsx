import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as adoptAnimalService from '../../services/adoptAnimalService';
import * as commentService from '../../services/commentService';

import AuthContext from "../../contexts/authContext";
import commentReducer from '../../lib/commentReducer';
;
import Path from '../../lib/paths';
import useForm from '../../hooks/useForm';

import style from './PetList.module.css'


export default function DetailsAdoption() {

    const navigate = useNavigate();

    const { email, userId } = useContext(AuthContext);

    const [animal, setAnimal] = useState({});

    const [comments, dispatch] = useReducer(commentReducer, []);

    const { animalId } = useParams();

    useEffect(() => {
        adoptAnimalService.getOne(animalId)
            .then(setAnimal)
            .catch(error => console.log(error));

        commentService.getAll(animalId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            })
            .catch(error => console.log(error))
    }, [animalId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            animalId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }
    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });


    return (
        <div className={style.petList}>

            <h2>
                Animal Details:
            </h2>



            <article key={animal._id} className={style.animalCard}>
                <div>
                    <h5>{animal.petName}</h5>
                    <p>Type: {animal.animalType}</p>

                </div>

                <div className={style.media}>
                    <img src={animal.animalImage} alt="animal" />
                </div>
                <div className={style.animalDetailInfo}>
                    <p>Assumed Age: {animal.assumedAge}</p>
                    <p>Everything we know for this animal: {animal.animalInfo}</p>
                </div>
                <div className={style.author}>
                    <p>Publish by: {animal.yourName}</p>
                    <p>Publisher email: {animal.yourEmail}</p>
                </div>
            </article>

            <h2>Comments about this {animal.animalType}:</h2>

            {comments.length === 0 && (
                <p className="no-comment">No comments.</p>
            )}
            <ul>
                {comments.map(({ _id, text, owner: { email } }) => (
                    <li key={_id} className="comment">
                        <p>{email}: {text}</p>
                    </li>
                ))}
            </ul>


            <article >
                <label>Add comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <button type="submit">Add Comment</button>
                </form>
            </article>


            {userId === animal._ownerId && (
                <div >
                     {/* <Link to={pathToUrl(Path.GameEdit, { gameId })} className="button">Edit</Link> */}
                    {/* <button className="button" onClick={deleteButtonClickHandler}>Delete</button> */}
                </div>
            )}

        </div>




    )
}