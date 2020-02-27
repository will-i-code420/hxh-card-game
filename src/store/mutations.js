export default {
  setPlayer1(state, idx) {
    state.player1 = state.characters[idx]
  },
  setPlayer2(state, idx) {
    state.player2 = state.characters[idx]
  }
}
