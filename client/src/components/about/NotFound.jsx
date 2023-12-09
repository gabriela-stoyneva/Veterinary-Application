import { Link } from 'react-router-dom';
import Path from '../../lib/paths';

import style from './Hospital.module.css';
import clinic from '../../assets/clinic.avif';

export default function NotFound() {

    return (
        <div className={style.hospital}>
            <h3>WELCOME TO HAPPY PETS HOSPITAL!</h3>
            <h3> This page is Not found! Please click button <Link to={Path.Home} className={style.back}><button>Back</button></Link>  </h3>
            
            <div className={style.media}>
                <img src={clinic} alt="clinic" />
            </div>
        </div>
    )
}