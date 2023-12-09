import { useContext} from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

import style from './Form.module.css';
import { Link } from "react-router-dom";
import Path from "../../lib/paths";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};


export default function LoginForm() {

    
        const { loginSubmitHandler, err } = useContext(AuthContext);
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
                    name={LoginFormKeys.Email}
                    id="email"
                    required
                    onChange={onChange}
                    value={values[LoginFormKeys.Email]}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name={LoginFormKeys.Password}
                    id="password"
                    onChange={onChange}
                    value={values[LoginFormKeys.Password]}
                    required
                />
            </div>

            <div>
                <button type="submit">Login</button>
                <p className={style.message}>You don't have account yet? Register <Link to={Path.Register}><span className={style.here}>here!</span></Link></p>
                {err && (<p className={style.error}>{err.message}</p>)}
            </div>
        </form>
    )
}