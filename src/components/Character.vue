<template>
  <SelectCard v-if="currentView === 'Select'" @select-char="setChar"/>
  <AttackCard v-else-if="currentView === 'Fight'" @action="charAction" :activePlayer="activePlayer" />
</template>

<script>
import SelectCard from './character/SelectCard'
import AttackCard from './character/AttackCard'

export default {
  name: 'Character',
  data() {
    return {
      currentView: 'Select',
      enemySelect: false,
      activePlayer: 1
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
      this.enemySelect = false
      if (this.$store.state.player1.speed >= this.$store.state.player2.speed) {
        this.activePlayer = 1
      } else {
        this.activePlayer = 2
      }
      this.currentView = 'Fight'
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
      let attackingPlayer = this.activePlayer === 1 ? this.$store.state.player1 : this.$store.state.player2
      let defendingPlayer = this.activePlayer === 1 ? this.$store.state.player2 : this.$store.state.player1
      let damage = Math.floor((attackingPlayer.power * 2) / 10)
      let defense = 0
      if (defendingPlayer.action === 'defense') {
        defense = Math.floor(defendingPlayer.defense / 2)
      }
      let totalDamage = damage - defense
      alert(`${defendingPlayer.name} blocked ${defense} of damage`)
      alert(`${attackingPlayer.name} did ${totalDamage}`)
      this.$store.dispatch('removeDefense', defendingPlayer.name)
      this.changeTurn()
      //this.$store.dispatch('updateHealth', damage, idx)
    },
    defend() {
      let defendingPlayer = this.activePlayer === 1 ? this.$store.state.player1 : this.$store.state.player2
      this.$store.dispatch('setDefense', this.activePlayer)
      this.$store.dispatch('addNen', this.activePlayer)
      alert(`${defendingPlayer.name} is defending next turn & gained 30 nen`)
      /* create checks for nenLevel for charging */
      this.changeTurn()
    },
    special() {
      let specialAttacker = this.activePlayer === 1 ? this.$store.state.player1 : this.$store.state.player2
      let defendingPlayer = this.activePlayer === 1 ? this.$store.state.player2 : this.$store.state.player1
      /* create special attack and calc damage/defense */
      alert(`${specialAttacker.name} special attack, player lost 30-50 nen`)
      this.$store.dispatch('removeNen', this.activePlayer)
      this.$store.dispatch('removeDefense', defendingPlayer.name)
      this.changeTurn()
    },
    changeTurn() {
      if (this.activePlayer === 1) {
        this.activePlayer = 2
      } else {
        this.activePlayer = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
