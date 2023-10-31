import { Deck } from '../Interfaces/PokemonContextInterface'

export const shuffleArray = (deck: Deck[]) => {
  let pokemonDeck: Deck[] = []

  // Update deck with pokemons twice
  while (pokemonDeck.length < 40) {
    const pokemons = [...deck]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20)
    pokemonDeck = [...pokemons, ...pokemons].sort(() => Math.random() - 0.5)
  }
  return pokemonDeck
}
