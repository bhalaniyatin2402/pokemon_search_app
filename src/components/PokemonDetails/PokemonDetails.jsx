import { useParams } from "react-router-dom";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import ReferencePokemon from "../ReferencePokemon/ReferencePokemon";
import "./PokemonDetails.css";

function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon, setPokemon] = usePokemonDetail({ id, pokemonName });

  let content = (
    <>
      <div className="pokemon-details-wrapper">
        <div className="pokemon-detail-card">
          <img src={pokemon.image} />
          <h1>{pokemon.name}</h1>
          <p>
            Id: <span>{pokemon.id}</span>
          </p>
          <p>
            Height: <span>{pokemon.height}</span>
          </p>
          <p>
            weight: <span>{pokemon.weight}</span>
          </p>
          <div className="types">
            {pokemon.types &&
              pokemon.types.map((t) => (
                <button
                  key={t}
                  className="pokemon-detail-type-button"
                  onClick={() => setPokemon((state) => ({ ...state, type: t }))}
                >
                  {t}
                </button>
              ))}
          </div>
        </div>
      </div>

      {pokemon.types && pokemon.similarPokemons && (
        <div className="reference-type-list">
          <h2 className="reference-type-list-heading">
            more {pokemon.type ? pokemon.type : pokemon.types[0]} type pokemons
          </h2>
          <ul className="reference-type-list-ul">
            <ReferencePokemon referencePokemonList={pokemon.similarPokemons} />
          </ul>
        </div>
      )}
    </>
  );

  return (
    <>
      {pokemon.isLoading ? (
        <h3 className="pokemon-detail-loder">Loading...</h3>
      ) : !pokemon.error ? (
        content
      ) : (
        <h1>Please search correct pokemon name to get details</h1>
      )}
    </>
  );
}

export default PokemonDetails;
