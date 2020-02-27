<template>
  <section id="char-selection">
    <div :class="`char-select-card ${character.name.toLowerCase()}`" v-for="character in characters" :key="character.name">
      <img :src="getImgUrl(character.img)" :alt="character.name"/>
      <h3>{{character.name}}</h3>
      <div class="char-select-stats">
        <p class="stat-name">Nen: <span class="stat">{{character.nen}}</span></p>
        <p class="stat-name">Health: <span class="stat">{{character.health}}</span></p>
        <p class="stat-name">Power: <span class="stat">{{character.power}}</span></p>
        <p class="stat-name">Defense: <span class="stat">{{character.defense}}</span></p>
        <p class="stat-name">Agility: <span class="stat">{{character.agility}}</span></p>
        <p class="stat-name">Speed: <span class="stat">{{character.speed}}</span></p>
      </div>
      <p class="char-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button @click="selectChar(character.name)">Select</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SelectionCard',
  computed: {
    characters() {
      return this.$store.state.characters
    }
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets/images/'+img)
    },
    selectChar(name) {
      this.$emit('select-char', name)
    }
  }
}
</script>

<style lang="scss" scoped>

#char-selection {
  display: grid;
  grid-template-columns: 5% 1fr 1fr 1fr 1fr 5%;
  grid-template-areas: ". gon killua kurapika leorio .";

  .char-select-card {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    border: 3px solid black;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      margin: .75rem;
    }

    h3 {
      margin: 1rem 0;
      font-size: 28px;
    }

    .char-select-stats {
      margin-bottom: .75rem;

      .stat-name {
        font-size: 18px;
      }

      .stat {

      }
    }

    .char-description {
      line-height: 1.4rem;
    }

    button {
      margin-top: .75rem;
      width: 100%;
      padding: .75rem 0;
      color: white;
      background-color: green;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .gon {
    grid-area: gon;
  }

  .killua {
    grid-area: killua;
  }

  .kurapika {
    grid-area: kurapika;
  }

  .leorio {
    grid-area: leorio;
  }

}

</style>
