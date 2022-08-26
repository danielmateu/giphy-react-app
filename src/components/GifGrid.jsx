import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import {PropTypes} from "prop-types";

// import './GifGrid.css'

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category)

  console.log(isLoading)

  return (
    <>
      <h3>{category}</h3>
      
      {
        isLoading && (<h2 className="animate__animated animate__bounce">Cargando...</h2>)
      }
      
      <div className="card-grid">
        {
          images.map((image) =>
            <GifItem 
                        key={image.id}
                        {...image}/>)
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
