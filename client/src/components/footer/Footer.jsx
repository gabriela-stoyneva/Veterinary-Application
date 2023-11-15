import style from './Footer.module.css'

export default function Footer() {

    return (
        <footer className={style.footer}>
            <p> &copy; All rights reserved!</p>
            <p><i class="fa-brands fa-square-facebook"></i><i class="fa-brands fa-square-instagram"></i><i class="fa-brands fa-square-twitter"></i><i class="fa-regular fa-envelope-open"></i></p>
        </footer>
    )
}