import { Action, PokemonContextInterface } from '../Interfaces/PokemonContextInterface'
import { ACTIONS, cardInitial, initialState } from '../contants'

export const PokemonReducer = (state: PokemonContextInterface, action: Action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_TRIES:
      return {
        ...state,
        tries: state.tries + 1
      }

    case ACTIONS.UPDATE_MATCHES:
      return {
        ...state,
        matches: state.matches + 1
      }

    case ACTIONS.UPDATE_LOADING:
      return {
        ...state,
        loading: false
      }

    case ACTIONS.RESET_CARDS:
      return {
        ...state,
        firstCard: cardInitial,
        secondCard: cardInitial
      }

    case ACTIONS.RESET_GAME:
      return initialState

    case ACTIONS.UPDATE_FIRST_CARD:
      return {
        ...state,
        firstCard: action.payload
      }

    case ACTIONS.UPDATE_SECOND_CARD:
      return {
        ...state,
        secondCard: action.payload
      }

    case ACTIONS.SHOW_RANKING:
      return {
        ...state,
        showRanking: true,
        showForm: false,
        winner: false
      }

    case ACTIONS.UPDATE_WINNER:
      return {
        ...state,
        winner: true,
        showForm: false,
        showRanking: false
      }

    case ACTIONS.SHOW_FORM:
      return {
        ...state,
        showForm: true,
        showRanking: false,
        winner: false
      }

    default:
      return state
  }
}
