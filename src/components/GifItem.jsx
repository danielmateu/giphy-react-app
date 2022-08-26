import PropTypes from 'prop-types';
// import './GifItem.css';


export const GifItem = ({url,title}) => {
    return (
        <>
            <figure className="card">
                <img src={url} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        </>
    )
}

GifItem.propTypes = {
    title   : PropTypes.string.isRequired,
    url     : PropTypes.string.isRequired,
}


//TAREA:

// 1. Añadir proptypes:
//  a. title obligatorio,
//  b. url obligatorio,

// 2. Evaluar el Snapshot