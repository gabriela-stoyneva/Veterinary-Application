import style from './ContactUsForm.module.css'

export default function ContactUsForm() {
    return (
        <>

            <form action="POST" className={style.question}>

                <h2>Do you have a question? Contact us here:</h2>

                <div className={style.container}>

                    <div>
                        <label htmlFor="ownerName">Owner Name:</label>
                        <input type="text" name="ownerName" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="petName">Pet Name:</label>
                        <input type="text" name="petName" />

                        <label htmlFor="age">Age:</label>
                        <input type="text" name="age" />

                        <label htmlFor="type">Type:</label>
                        <input type="text" name="type" />

                        <label htmlFor="breed">Breed:</label>
                        <input type="text" name="breed" />
                    </div>

                </div>
                <div className={style.questionArea}>
                    <label htmlFor="question">We are here for you and your pet:</label>
                    <textarea name="question" id="question" cols="80" rows="10"></textarea>
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