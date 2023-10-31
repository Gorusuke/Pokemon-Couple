export const cardInitial = {
  name: '',
  number: 0
}

export const initialState = {
  showForm: false,
  matches: 0,
  tries: 0,
  winner: false,
  loading: true,
  showRanking: false,
  firstCard: cardInitial,
  secondCard: cardInitial,
  deck: [],
  dispatch: () => {},
  setDeck: () => {}
}

export const ACTIONS = {
  UPDATE_TRIES: 'UPDATE_TRIES',
  UPDATE_MATCHES: 'UPDATE_MATCHES',
  UPDATE_LOADING: 'UPDATE_LOADING',
  RESET_CARDS: 'RESET_CARDS',
  RESET_GAME: 'RESET_GAME',
  UPDATE_FIRST_CARD: 'UPDATE_FIRST_CARD',
  UPDATE_SECOND_CARD: 'UPDATE_SECOND_CARD',
  SHOW_RANKING: 'SHOW_RANKING',
  UPDATE_WINNER: 'UPDATE_WINNER',
  SHOW_FORM: 'SHOW_FORM'
}
