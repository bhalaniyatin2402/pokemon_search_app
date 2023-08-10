  import { useParams } from "react-router-dom"
import './PokemonDetails.css'
import usePokemonDetail from "../../hooks/usePokemonDetail"

function PokemonDetails() {
  const { id } = useParams()
  const [ pokemon ] = usePokemonDetail(id)

  return (
    <div className="pokemon-details-wrapper">
      <div className="pokemon-detail-card">
        <img src={pokemon.image} />
        <h1>{pokemon.name}</h1>
        <p>Id: <span>{pokemon.id}</span></p>
        <p>Height: <span>{pokemon.height}</span></p>
        <p>weight: <span>{pokemon.weight}</span></p>
        <div className="types">
          {pokemon.types && pokemon.types.map(t => <span key={t}> {t} </span>)}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
