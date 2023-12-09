import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as adoptAnimalService from '../../services/adoptAnimalService';
import * as commentService from '../../services/commentService';

import AuthContext from "../../contexts/authContext";
import commentReducer from '../../lib/commentReducer';
;
import Path from '../../lib/paths';
import { pathReducer } from '../../lib/pathReducer';
import useForm from '../../hooks/useForm';

import style from './DetailsAdoption.module.css';


export default function DetailsAdoption() {
    const [message, setMessage] = useState(null);

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


        try {
            if (values.comment.length > 6) {
                const newComment = await commentService.create(
                    animalId,
                    values.comment
                );

                newComment.owner = { email };

                dispatch({
                    type: 'ADD_COMMENT',
                    payload: newComment
                })
                setMessage('Your comment was added!')

            } else {
                setMessage('The comment is too short!')

            }

            values['comment'] = '';


        } catch (error) {
            setMessage(error.message);
        }

    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });




    async function deleteButtonClickHandler() {

        const hasConfirmed = confirm(`Are you sure you want to delete ${animal.petName}`);

        if (hasConfirmed) {

            try {
                await adoptAnimalService.remove(animalId);
                navigate(Path.Find);

            } catch (error) {
                return error;
            }

        }
    }



    return (

        <div className={style.details}>

            <h2> Animal Details: </h2>

            <article key={animal._id} >

                <div className={style.animalCard}>
                    <h5 className={style.name}>{animal.petName}</h5>

                    <div className={style.info}>
                        <div className={style.media}>
                            <img src={animal.animalImage} alt="animal" />
                        </div>
                        <div className={style.animalDetailInfo}>
                            <p>Type: {animal.animalType}</p>
                            <p>Assumed Age: {animal.assumedAge}</p>
                            <p>Everything we know for this animal: {animal.animalInfo}</p>
                            <p>Publish by: {animal.yourName}</p>
                            <p>Publisher email: {animal.yourEmail}</p>
                        </div>

                    </div>
                    { userId === animal._ownerId && (
                    <div className={style.buttons}>
                        <Link to={pathReducer(Path.Edit, { animalId })}><button>Edit</button></Link>
                        <button
                            type="button"
                            onClick={deleteButtonClickHandler}>
                            Delete
                        </button>
                    </div>
                )}
                </div>
            </article>


            <div className={style.comments}>
                <article className={style.commentArticle}>

                    <form className={style.form} onSubmit={onSubmit}>
                        <label htmlFor="comment">Add comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={values.comment}
                            onChange={onChange}
                            placeholder="Comment......"
                            cols='60'
                            rows='10'>

                        </textarea>
                        <button type="submit">Add Comment</button>

                        {message !== null && (
                            <div className={style.error}>
                                <p>{message}</p>
                            </div>

                        )}
                    </form>

                </article>
                <div>
                    <h4>Comments about this {animal.animalType}:</h4>
                    <div className={style.allComments}>
                        {comments.length === 0 && (
                            <p className="no-comment">No comments.</p>
                        )}
                        <ul>
                            {comments.map(({ _id, text, owner: { email } }) => (
                                <li key={_id} className={style.currentComment}>
                                    <p>{text}  - by: {email}</p>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
                

            </div>


        </div>

    )
}