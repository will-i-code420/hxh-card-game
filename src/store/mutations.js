export default {
  setPlayer1(state, idx) {
    state.player1 = state.characters[idx]
  },
  setPlayer2(state, idx) {
    state.player2 = state.characters[idx]
  },
  setTurn(state, id) {
    if (id === 1) {
      state.player1.active = true
      state.player2.defending = true
    } else if (id === 2) {
      state.player2.active = true
      state.player1.defending = true
    }
  },
  changeTurn(state) {
    state.player1.active = !state.player1.active
    state.player1.defending = !state.player1.defending
    state.player2.active = !state.player2.active
    state.player2.defending = !state.player2.defending
  },
  setDefense(state) {
    let selectedPlayer = state.player1.active ? state.player1 : state.player2
    selectedPlayer.defenseActive = true
  },
  removeDefense(state) {
    let selectedPlayer = state.player1.defenseActive ? state.player1 : state.player2
    selectedPlayer.defenseActive = false
  },
  addNen(state, nen) {
    let selectedPlayer = state.player1.active ? state.player1 : state.player2
    if (selectedPlayer.nenLevel > 70) {
      selectedPlayer.nenLevel += nen
    } else {
      selectedPlayer.nenLevel += 30
    }
  },
  removeNen(state) {
    let selectedPlayer = state.player1.active ? state.player1 : state.player2
    selectedPlayer.nenLevel -= 30
  },
  updateHealth(state, damage) {
    let attackedPlayer = !state.player1.active ? state.player1 : state.player2
    attackedPlayer.health -= damage
  }
}
