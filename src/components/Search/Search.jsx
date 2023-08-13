import useDebounce from "../../hooks/useDebounce";
import "./Search.css";

function Search({ onUpdateSearch }) {
  const debouncedCallback = useDebounce((search) =>
    onUpdateSearch(search.target.value)
  );
  return (
    <>
      <input
        type="text"
        placeholder="pokemon name..."
        id="search-input-pokedex"
        onChange={(search) => debouncedCallback(search)}
      />
    </>
  );
}

export default Search;
