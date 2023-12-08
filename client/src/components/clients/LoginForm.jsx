import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import style from './Form.module.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};


export default function LoginForm() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
         [LoginFormKeys.Password]: '',
    });


    return (
        <form method='POST' className={style.login} onSubmit={onSubmit}>
            <h2>Login</h2>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name= {LoginFormKeys.Email}
                    id="email"
                    onChange={onChange}
                    value={values [LoginFormKeys.Email]}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name= {LoginFormKeys.Password}
                    id="password"
                    onChange={onChange}
                    value={values[LoginFormKeys.Password]}
                />
            </div>

            <div>
                <button type="submit">Login</button>
                <p className={style.message}>You don't have account yet? Register <span className={style.here}>here!</span></p>
            </div>


        </form>
    )
}