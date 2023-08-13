import Pokemon from "../Pokemon/Pokemon";
import useReferencePokemon from "../../hooks/useReferencePokemon";
import "./ReferencePokemon.css";

function ReferencePokemon({ referencePokemonList }) {
  const [listOfReferencePokemon] = useReferencePokemon(referencePokemonList);

  return (
    <>
      <div className="reference-pokemon-list-wrapper">
        {listOfReferencePokemon.map((p) => (
          <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
        ))}
      </div>
    </>
  );
}

export default ReferencePokemon;
