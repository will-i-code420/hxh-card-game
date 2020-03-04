<template>
  <SelectCard v-if="currentView === 'Select'" @select-char="setChar"/>
  <AttackCard v-else-if="currentView === 'Fight'" @action="charAction" />
</template>

<script>
import SelectCard from './character/SelectCard'
import AttackCard from './character/AttackCard'

export default {
  name: 'Character',
  data() {
    return {
      currentView: 'Select',
      enemySelect: false
    }
  },
  components: {
    SelectCard,
    AttackCard
  },
  methods: {
    async setChar(idx) {
      await this.$store.dispatch('setPlayer1', idx)
      this.enemySelect = true
      this.selectEnemy()
    },
    async selectEnemy() {
      let enemyIndex = await Math.floor(Math.random() * this.$store.state.characters.length)
      await this.$store.dispatch('setPlayer2', enemyIndex)
      await this.setTurn()
      this.enemySelect = false
      this.currentView = 'Fight'
    },
    setTurn() {
      if (this.$store.state.player1.speed >= this.$store.state.player2.speed) {
        this.$store.dispatch('setTurn', 1)
      } else {
        this.$store.dispatch('setTurn', 2)
      }
    },
    getImgUrl(img) {
      return require('@/assets/images/'+img)
    },
    charAction(action) {
      switch(action) {
        case 'attack':
          this.attack()
        break;
        case 'defend':
          this.defend()
        break;
        case 'special':
          this.special()
        break;
      }
    },
    attack() {
      let attackingPlayer = this.$store.state.player1.active ? this.$store.state.player1 : this.$store.state.player2
      let defendingPlayer = this.$store.state.player1.defending ? this.$store.state.player1 : this.$store.state.player2
      let damage = Math.floor((attackingPlayer.power * 2) / 10)
      let defense = 0
      if (defendingPlayer.defenseActive) {
        defense = Math.floor(defendingPlayer.defense / 2)
        this.$store.dispatch('removeDefense')
      }
      let totalDamage = damage - defense
      this.$store.dispatch('updateHealth', totalDamage)
      this.$store.dispatch('changeTurn')
    },
    defend() {
      let defendingPlayer = this.$store.state.player1.active ? this.$store.state.player1 : this.$store.state.player2
      this.$store.dispatch('setDefense')
      if (defendingPlayer.nenLevel > 70) {
        let nenAmount = 100 - defendingPlayer.nenLevel
        this.$store.dispatch('addNen', nenAmount)
      } else {
        this.$store.dispatch('addNen')
      }
      this.$store.dispatch('changeTurn')
    },
    special() {
      let specialAttacker = this.activePlayer === 1 ? this.$store.state.player1 : this.$store.state.player2
      let defendingPlayer = this.activePlayer === 1 ? this.$store.state.player2 : this.$store.state.player1
      /* create special attack and calc damage/defense */
      let damage = Math.floor((specialAttacker.power * 4) / 10)
      let defense = 0
      if (defendingPlayer.action === 'defense') {
        defense = Math.floor(defendingPlayer.defense / 2)
        this.$store.dispatch('removeDefense')
      }
      let totalDamage = damage - defense
      this.$store.dispatch('removeNen')
      this.$store.dispatch('updateHealth', totalDamage)
      this.$store.dispatch('changeTurn')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
