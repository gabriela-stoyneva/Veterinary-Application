import style from '../contact-us/ContactUsForm.module.css';

export default function AddAnimalForm() {

    return (
        <>
            <form action="POST" className={style.question}>

                <h2>You can give chance to Happy life for some animal in need:</h2>

                <div className={style.container}>

                    <div>
                        <label htmlFor="yourName">Your Name:</label>
                        <input type="text" name="yourName" />
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="petName">Pet Name:</label>
                        <input type="text" name="petName" />

                        <label htmlFor="assumedAge">Assumed Age:</label>
                        <input type="text" name="assumedAge" />

                        <label htmlFor="animalType">Animal Type:</label>
                        <input type="text" name="animalType" />

                        <label htmlFor="animalImage">Animal Image:</label>
                        <input type="url"  />

                    </div>

                </div>
                <div className={style.addArea}>
                    <label htmlFor="question">Animal story and everything you know for it:</label>
                    <textarea name="question" id="question" cols="80" rows="10" placeholder='Animal information .....'>

                    </textarea>
                </div>


                <div className={style.buttons}>
                    <button type="button">Reset</button>
                    <button type="button">Edit</button>
                    <button className={style.submitButton} type="submit">Send</button>
                </div>
            </form>

        </>
    )
}