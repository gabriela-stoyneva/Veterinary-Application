import style from './Services.module.css'

export default function Services() {

    return (
        <>
            <section className={style.services}>
                <article className={style.articleService}>
                    <p><i class="fa-solid fa-shield-dog"></i></p>
                    <h3>Preventative Care/Wellness</h3>
                    <p>At La Verne Animal Hospital, our approach to veterinary care is to promote excellent overall…</p>
                </article>
                <article className={style.articleService}>
                    <p><i class="fa-solid fa-house-medical"></i></p>
                    <h3>Emergency Medicine & Urgent Care</h3>
                    <p>Health problems, injuries, and illnesses can happen at any time, and may need immediate attention.…</p>

                </article>
                <article className={style.articleService}>
                    <p><i class="fa-solid fa-prescription"></i></p>
                    <h3>In-House Diagnostics</h3>
                    <p>When your pet is not feeling well, one of the first things a veterinarian will…</p>
                </article>
                <article className={style.articleService}>
                    <p><i class="fa-solid fa-tooth"></i></p>
                    <h3>Dentistry</h3>
                    <p>Do you know the number one disease affecting cats and dogs today? If you guessed…</p>
                </article>
                <article className={style.articleService}>
                    <p><i class="fa-solid fa-microchip"></i></p>
                    <h3>Microchipping</h3>
                    <p>We encourage all pet owners to microchip their animal companions. The sad fact is that…</p>
                </article>
                <article className={style.articleService}>
                    <p><i class="fa-solid fa-user-nurse"></i></p>
                    <h3>Surgery</h3>
                    <p>Our hospital provides a full range of surgical services, from standard spaying and neutering to…</p>
                </article>

            </section>
            <div className={style.button}>
                <button>View all services</button>
            </div>
            
        </>
    )
}