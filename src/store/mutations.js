export default {
  setPlayer1(state, idx) {
    state.player1 = state.characters[idx]
  },
  setPlayer2(state, idx) {
    state.player2 = state.characters[idx]
  },
  setDefense(state, player) {
    if (player === 1) {
      state.player1.action = 'defense'
    } else {
      state.player2.action = 'defense'
    }
  },
  removeDefense(state, player) {
    if (state.player1.name === player) {
      state.player1.action = ''
    } else {
      state.player2.action = ''
    }
  },
  addNen(state, player) {
    if (player === 1) {
      state.player1.nenLevel += 30
    } else {
      state.player2.nenLevel += 30
    }
  },
  removeNen(state, player) {
    if (player === 1) {
      state.player1.nenLevel -= 30
    } else {
      state.player2.nenLevel -= 30
    }
  },
}
