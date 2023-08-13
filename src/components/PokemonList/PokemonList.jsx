import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
import "./PokemonList.css";

function PokemonList() {
  const [pokemonListState, setPokemonListState] = usePokemonList();

  return (
    <>
      <div className="pokemon-list-wrapper">
        {pokemonListState.isLoading
          ? "Loading..."
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="pokemon-footer">
        <button
          disabled={pokemonListState.prevUrl === null}
          className="prev-btn"
          onClick={() =>
            setPokemonListState((state) => ({
              ...state,
              pokemonUrl: state.prevUrl,
            }))
          }
        >
          Prev
        </button>
        <button
          disabled={pokemonListState.nextUrl === null}
          className="next-btn"
          onClick={() =>
            setPokemonListState((state) => ({
              ...state,
              pokemonUrl: state.nextUrl,
            }))
          }
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PokemonList;
