export default {
  setPlayer1(state, char) {
    state.player1 = state.characters.filter(character => character.name === char)
  },
  setPlayer2(state, idx) {
    state.player2 = state.characters[idx]
  }
}
