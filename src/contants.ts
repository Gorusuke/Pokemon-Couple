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
