import { useContext } from "react";

import style from './Form.module.css';

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";


import { Link } from "react-router-dom";
import Path from '../../lib/paths';



export default function RegisterForm() {

    const RegisterFormKeys = {
        Email: 'email',
        Password: 'password',
        RepeatPassword: 'confirm-password',
    };

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });


    return (
        <form method="POST" className={style.register} onSubmit={onSubmit}>

            <h2>Register</h2>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Email]}
                />
            </div>


            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Password]}
                />
            </div>


            <div>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input 
                type="password" 
                name="repeatPassword" 
                id="repeatPassword"
                onChange={onChange}
                values={values[RegisterFormKeys.RepeatPassword]}
                />

            </div>

            <div>
                <button type="submit">Register</button>
                <p>Do you have account? Login <Link to={Path.Login}> here! </Link> </p>
            </div>

        </form>
    )
}