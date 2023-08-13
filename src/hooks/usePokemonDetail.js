import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetail({ id, pokemonName }) {
  const [pokemon, setPokemon] = useState({
    type: "",
    isLoading: false,
  });

  async function pokemonDownload() {
    setPokemon((state) => ({
      ...state,
      isLoading: true,
    }));

    try {
      let response = "";
      if (pokemonName) {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
      } else if (id) {
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }
      const result = response.data;

      const pokemonOfSameTypes = await axios.get(
        `https://pokeapi.co/api/v2/type/${
          pokemon.type ? pokemon.type : result.types[0].type.name
        }`
      );

      setPokemon((state) => ({
        ...state,
        id: result.id,
        name: result.name,
        height: result.height,
        weight: result.weight,
        image: result.sprites.other.dream_world.front_default,
        types: result.types.map((t) => t.type.name),
        similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0, 4),
        error: false,
        isLoading: false,
      }));
    } catch (error) {
      setPokemon((state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
    }
  }

  useEffect(() => {
    pokemonDownload();
  }, [pokemon.type, id]);

  return [
    pokemon,
    setPokemon,
    () => {
      ignore = true;
    },
  ];
}

export default usePokemonDetail;
