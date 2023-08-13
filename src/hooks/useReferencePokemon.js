import axios from "axios";
import { useEffect, useState } from "react";

function useReferencePokemon(referencePokemonList) {
  const [listOfReferencePokemon, setListOfReferencePokemon] = useState([]);

  async function downloadReferencePokemonList() {
    const pokemonData = referencePokemonList.map((p) =>
      axios.get(p.pokemon.url)
    );
    const pokemonDataResult = await axios.all(pokemonData);

    const pokeData = pokemonDataResult.map((p) => {
      const poke = p.data;
      return {
        id: poke.id,
        name: poke.name,
        image: poke.sprites.other
          ? poke.sprites.other.dream_world.front_default
          : poke.sprites.front_default,
        type: poke.types,
      };
    });

    setListOfReferencePokemon(pokeData);
  }

  useEffect(() => {
    downloadReferencePokemonList();
  }, []);

  return [listOfReferencePokemon];
}

export default useReferencePokemon;
