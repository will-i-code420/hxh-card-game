<template>
  <SelectCard v-if="currentView === 'Select'" @select-char="setChar"/>
  <AttackCard v-else-if="currentView === 'Fight'" @action="charAction" :players="players"/>
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
      player1: {},
      player2: {},
      players: []
    }
  },
  components: {
    SelectCard,
    AttackCard
  },
  methods: {
    async setChar(idx) {
      await this.$store.dispatch('setPlayer1', idx)
      this.players.push(this.$store.getters.getPlayer1)
      this.enemySelect = true
      this.selectEnemy()
    },
    async selectEnemy() {
      let characters = await this.$store.state.characters
      let enemyIndex = Math.floor(Math.random() * characters.length)
      await this.$store.dispatch('setPlayer2', enemyIndex)
      this.players.push(this.$store.getters.getPlayer2)
      this.enemySelect = false
      this.currentView = 'Fight'
    },
    getImgUrl(img) {
      return require('@/assets/images/'+img)
    },
    charAction(action) {
      console.log(action)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
