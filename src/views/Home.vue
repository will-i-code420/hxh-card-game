<template>
  <section id="home">
    <h2>Pick Your Character</h2>
    <Character />
  </section>
</template>

<script>
import Character from '@/components/Character'

export default {
  name: 'Home',
  components: {
    Character
  }
}
</script>

<style lang="scss" scoped>

</style>
