import { Link } from 'react-router-dom'
import './Pokemon.css'

function Pokemon({ name, image, id }) {
    return(
        <div className="pokemon-card-wrapper">
            <Link to={`/pokemon/${id}`} className='pokemon-card-link-wrapper'>
                <p className="pokemon-name">{name}</p>
                <img src={image} className="pokemon-image"/>
            </Link>
        </div>
    )
}

export default Pokemon
