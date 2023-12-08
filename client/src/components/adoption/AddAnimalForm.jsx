import { useNavigate } from 'react-router-dom';

import * as adoptAnimalService from '../../services/adoptAnimalService';

import style from '../contact-us/ContactUsForm.module.css';



const AddAnimalFormKeys = {

};


export default function AddAnimalForm() {

    //     const navigate = useNavigate();

    //     const createAnimalSubmitHandler = async (e) => {
    //         e.preventDefault();

    //         const animalData = Object.fromEntries(new FormData(e.currentTarget));

    //         try {
    //             await adoptAnimalService.create(gameData);

    //             navigate('/games');

    //         } catch (err) {
    //             // Error notification
    //             console.log(err);
    //         }
    //     }

    //     return (
    //         <section id="create-page" className="auth">
    //             <form id="create" onSubmit={createGameSubmitHandler}>
    //                 <div className="container">
    //                     <h1>Create Game</h1>
    //                     <label htmlFor="leg-title">Legendary title:</label>
    //                     <input type="text" id="title" name="title" placeholder="Enter game title..." />

    //                     <label htmlFor="category">Category:</label>
    //                     <input type="text" id="category" name="category" placeholder="Enter game category..." />

    //                     <label htmlFor="levels">MaxLevel:</label>
    //                     <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

    //                     <label htmlFor="game-img">Image:</label>
    //                     <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

    //                     <label htmlFor="summary">Summary:</label>
    //                     <textarea name="summary" id="summary"></textarea>
    //                     <input className="btn submit" type="submit" value="Create Game" />
    //                 </div>
    //             </form>
    //         </section>
    //     );
    // }

    //     return (
    //         <>
    //             <form action="POST" className={style.question}>

    //                 <h2>You can give chance to Happy life for some animal in need:</h2>

    //                 <div className={style.container}>

    //                     <div>


    //                     <label htmlFor="leg-title">Legendary title:</label>
    //                     <input type="text" id="title" name="title" placeholder="Enter game title..." />

    //                         <label htmlFor="yourName">Your Name:</label>
    //                         <input type="text" id='yourName' name="yourName" />
    //                         <label htmlFor="email">Your Email:</label>
    //                         <input type="email" name="email" />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="petName">Pet Name:</label>
    //                         <input type="text" name="petName" />

    //                         <label htmlFor="assumedAge">Assumed Age:</label>
    //                         <input type="text" name="assumedAge" />

    //                         <label htmlFor="animalType">Animal Type:</label>
    //                         <input type="text" name="animalType" />

    //                         <label htmlFor="animalImage">Animal Image:</label>
    //                         <input type="url"  />

    //                     </div>

    //                 </div>
    //                 <div className={style.addArea}>
    //                     <label htmlFor="question">Animal story and everything you know for it:</label>
    //                     <textarea name="question" id="question" cols="80" rows="10" placeholder='Animal information .....'>

    //                     </textarea>
    //                 </div>


    //                 <div className={style.buttons}>
    //                     <button type="button">Reset</button>
    //                     <button type="button">Edit</button>
    //                     <button className={style.submitButton} type="submit">Send</button>
    //                 </div>
    //             </form>

    //         </>
    //     )
    return null
}