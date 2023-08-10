import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonDetail(id) {
    const [ pokemon, setPokemon ] = useState({})

    async function pokemonDownload() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const result = response.data
        setPokemon({
          id: result.id,
          name: result.name,
          height: result.height,
          weight: result.weight,
          image: result.sprites.other.dream_world.front_default,
          types: result.types.map(t => t.type.name)
        })
    }
    
    useEffect(() => {
    pokemonDownload()
    }, [])

    return [ pokemon, setPokemon ]
}

export default usePokemonDetail
