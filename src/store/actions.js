export default {
  setPlayer1({commit}, char) {
    commit('setPlayer1', char)
  },
  setPlayer2({commit}, idx) {
    commit('setPlayer2', idx)
  },
}
