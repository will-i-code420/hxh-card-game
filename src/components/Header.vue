<template>
  <header>
    <img src="../assets/images/logo.png" alt="Hunter X Hunter Logo">
    <h1>Nen Battles</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  background-color: rgb(173, 173, 173);
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
  }

  h1 {
    padding-left: 1.5rem;
  }
}
</style>
