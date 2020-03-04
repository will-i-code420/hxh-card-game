export default {
  setPlayer1({commit}, idx) {
    commit('setPlayer1', idx)
  },
  setPlayer2({commit}, idx) {
    commit('setPlayer2', idx)
  },
  setTurn({commit}, id) {
    commit('setTurn', id)
  },
  changeTurn({commit}) {
    commit('changeTurn')
  },
  setDefense({commit}) {
    commit('setDefense')
  },
  removeDefense({commit}) {
    commit('removeDefense')
  },
  addNen({commit}, nen) {
    commit('addNen', nen)
  },
  removeNen({commit}) {
    commit('removeNen')
  },
  updateHealth({commit}, damage) {
    commit('updateHealth', damage)
  }
}
