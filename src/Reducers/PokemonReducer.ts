import { Action, PokemonContextInterface } from '../Interfaces/PokemonContextInterface'
import { cardInitial, initialState } from '../contants'

export const PokemonReducer = (state: PokemonContextInterface, action: Action) => {
  if (action.type === 'UPDATE_TRIES') {
    return {
      ...state,
      tries: state.tries + 1
    }
  }

  if (action.type === 'UPDATE_LOADING') {
    return {
      ...state,
      loading: false
    }
  }

  if (action.type === 'UPDATE_WINNER') {
    return {
      ...state,
      winner: true
    }
  }

  if (action.type === 'RESET_CARDS') {
    return {
      ...state,
      firstCard: cardInitial,
      secondCard: cardInitial
    }
  }

  if (action.type === 'RESET_GAME') {
    return initialState
  }

  if (action.type === 'UPDATE_FIRST_CARD') {
    return {
      ...state,
      firstCard: action.payload
    }
  }

  if (action.type === 'UPDATE_SECOND_CARD') {
    return {
      ...state,
      secondCard: action.payload
    }
  }

  if (action.type === 'SHOW_RANKING') {
    return {
      ...state,
      showRanking: true
    }
  }

  return state
}
