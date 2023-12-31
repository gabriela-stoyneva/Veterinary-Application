import { useContext} from "react";

import style from './Form.module.css';

import AuthContext from '../../contexts/authContext';
import useForm from "../../hooks/useForm";


import { Link } from "react-router-dom";
import Path from '../../lib/paths';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'confirm-password',
};

export default function RegisterForm() {
    
    const { registerSubmitHandler, err } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });


    return (
        <form className={style.register} onSubmit={onSubmit}>

            <h2>Register</h2>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name={RegisterFormKeys.Email}
                    id="email"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Email]}
                    required
                />
            </div>


            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name={RegisterFormKeys.Password}
                    id="password"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Password]}
                    required
                />
            </div>


            <div>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                    type="password"
                    name={RegisterFormKeys.RepeatPassword}
                    id="repeatPassword"
                    onChange={onChange}
                    values={values[RegisterFormKeys.RepeatPassword]}
                    required
                />

            </div>

            <div>
                <button type="submit" value="Register">Register</button>
                <p className={style.message}>Do you have account? Login <Link to={Path.Login}><span className={style.here}>here!</span></Link> </p>
                {err && (
                    <p className={style.error}>{err.message}</p>
                )}
            </div>

        </form>
    )
}