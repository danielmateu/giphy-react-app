import './GifItem.css';

export const GifItem = ({url,title}) => {
    return (
        <>
            <figure className="card animate__animated animate__fadeInDown">
                <img src={url} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        </>
    )
}
