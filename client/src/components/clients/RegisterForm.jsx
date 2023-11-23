import style from './Form.module.css'

export default function RegisterForm() {

    return (
        <form method="POST" className={style.register}>

            <h2>Register</h2>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>


            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>


            <div>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" name="repeatPassword" />

            </div>

            <div>
                <button type="submit">Register</button>
            </div>

        </form>
    )
}