import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonList(url) {
    const [ pokemonListState, setPokemonListState ] = useState({
        pokemonList: [],
        isLoading: true,
        pokemonUrl: url,
        prevUrl: '',
        nextUrl: ''
    })

    async function getPokemonList() {
        setPokemonListState(state => ({ ...state, isLoading: true }))
        
        const response = await axios.get(pokemonListState.pokemonUrl)

        setPokemonListState(state => ({
            ...state,
            nextUrl: response.data.next,
            prevUrl: response.data.previous
        }))
        const result = response.data.results

        const pokemonData = result.map(e => axios.get(e.url))
        const pokemonDataResult = await axios.all(pokemonData)

        const pokeData = pokemonDataResult.map(p => {
            const poke = p.data
            return {
                id: poke.id,
                name: poke.name,
                image: (poke.sprites.other) ? poke.sprites.other.dream_world.front_default : poke.sprites.front_default,
                type: poke.types
            }
        })

        setPokemonListState(state => ({
            ...state,
            pokemonList: pokeData,
            isLoading: false
        }))
    }

    useEffect(() => {
        getPokemonList()
    }, [ pokemonListState.pokemonUrl ])

    return [ pokemonListState, setPokemonListState ]

}

export default usePokemonList
