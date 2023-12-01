import style from './Services.module.css';

export default function ServiceItem({
    id,
    iconUrl,
    service,
    text,
    imageUrl
}) {
    return (
        <article className={style.articleService}>

            <div className={style.info}>
                <i className={iconUrl}></i>
                <h3>{service}</h3>
                <p className={style.hidden}>{text}</p>
            </div>

            <div className={style.media}>
                <img src={imageUrl} />
            </div>

        </article>

    )
}