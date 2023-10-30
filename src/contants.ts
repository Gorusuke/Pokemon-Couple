export const cardInitial = {
  name: '',
  number: 0
}

export const initialState = {
  tries: 0,
  winner: false,
  loading: true,
  showRanking: false,
  firstCard: cardInitial,
  secondCard: cardInitial,
  baraja: [],
  dispatch: () => {},
  setBaraja: () => {}
}
