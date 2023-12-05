import style from './ContactUsForm.module.css';

export default function Appointment() {
    return (
        <>

            <form action="POST" className={style.question}>

                <h2>We are here for you and your pet! Book here:</h2>

                <div className={style.container}>

                    <div>
                        <label htmlFor="ownerName">Owner Name:</label>
                        <input type="text" name="ownerName" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" />
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="phoneNumber" name="phoneNumber" />
                    </div>

                    <div>
                        <label htmlFor="petName">Pet Name:</label>
                        <input type="text" name="petName" />

                        <label htmlFor="age">Age:</label>
                        <input type="text" name="age" />

                        <label htmlFor="type">Type:</label>
                        <input type="text" name="type" />

                    </div>


                </div>

                <div >

                    <p className={style.appointmentText}>
                        Choose your preferred time and we will send you appointment confirmation email!
                    </p>

                    <div className={style.calendar}>
                        <input type="date" />
                        <input type="time" />

                    </div>


                </div>



                {/* <div className={style.questionArea}>
                    <label htmlFor="question">We are here for you and your pet:</label>
                    <textarea name="question" id="question" cols="80" rows="10"></textarea>
                </div> */}


                <div className={style.buttons}>
                    <button type="button">Reset</button>
                    <button type="button">Edit</button>
                    <button className={style.submitButton} type="submit">Send</button>
                </div>
            </form>

        </>
    )
}
