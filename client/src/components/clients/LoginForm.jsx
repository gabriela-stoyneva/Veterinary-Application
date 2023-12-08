

import style from './Form.module.css';


export default function LoginForm() {
    return (
        <form method='POST' className={style.login}>
            <h2>Login</h2>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>

            <div>
                <button type="submit">Login</button>
            </div>


        </form>
    )
}