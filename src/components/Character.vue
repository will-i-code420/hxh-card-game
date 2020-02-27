<template>
  <SelectCard v-if="currentView === 'Select'" @select-char="setChar"/>
</template>

<script>
import SelectCard from './character/SelectCard'

export default {
  name: 'Character',
  data() {
    return {
      currentView: 'Select',
      enemySelect: false
    }
  },
  components: {
    SelectCard
  },
  methods: {
    setChar(char) {
      this.$store.dispatch('setPlayer1', char)
      this.enemySelect = true
      this.selectEnemy()
    },
    selectEnemy() {
      let characters = this.$store.state.characters
      let enemyIndex = Math.floor(Math.random() * characters.length)
      this.$store.dispatch('setPlayer2', enemyIndex)
      this.enemySelect = false
      this.currentView = 'Fight'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
