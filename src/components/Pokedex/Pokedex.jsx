import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import Search from "../Search/Search";
import "./Pokedex.css";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pokedex-wraper">
      <Search onUpdateSearch={setSearchTerm} />
      {searchTerm.length === 0 ? (
        <PokemonList />
      ) : (
        <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
      )}
    </div>
  );
}

export default Pokedex;
