<template>
  <SelectCard @select-char="setChar"/>
</template>

<script>
import SelectCard from './character/SelectCard'

export default {
  name: 'Character',
  data() {
    return {
      currentView: 'Select'
    }
  },
  components: {
    SelectCard
  },
  methods: {
    setChar(char) {
      console.log(char)
      //create function to set player1 and random opponent
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
