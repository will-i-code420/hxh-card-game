export default {
  setPlayer1({commit}, char) {
    commit('setPlayer1', char)
  },
  setPlayer2({commit}, idx) {
    commit('setPlayer2', idx)
  },
  setDefense({commit}, player) {
    commit('setDefense', player)
  },
  removeDefense({commit}, player) {
    commit('removeDefense', player)
  },
  addNen({commit}, player) {
    commit('addNen', player)
  },
  removeNen({commit}, player) {
    commit('removeNen', player)
  },
}
