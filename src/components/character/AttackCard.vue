<template>
  <section class="attack-cards-container">
    <div :class="`attack-card ${player.name.toLowerCase()}`" v-for="(player, idx) in players" :key="idx">
      <div class="card-status">
        <p>Health: {{player.health}}</p>
        <p>Nen: {{player.nenLevel}}</p>
      </div>
      <div class="card-img">
        <img :src="getImgUrl(player.img)" :alt="player.name">
      </div>
      <div class="card-info">
        <h2>{{player.name}}</h2>
        <h3>{{player.nen}}</h3>
        <h4>Power: {{player.power}}</h4>
        <h4>Defense: {{player.defense}}</h4>
        <h4>Agility: {{player.agility}}</h4>
        <h4>Speed: {{player.speed}}</h4>
      </div>
      <div class="card-actions">
        <button @click="action('attack')">
          Attack
        </button>
        <button @click="action('defend')">
          Defend
        </button>
        <button @click="action('special')" :disabled="player.nenLevel < 30">
          Special
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AttackCard',
  computed: {
    ...mapState(['player1', 'player2']),
    players() {
      return this.$store.getters.getPlayers
    }
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets/images/'+img)
    },
    action(action) {
      this.$emit('action', action)
    },
    enemyAction() {
      let selectedAction = 'attack'
      console.log(`enemy turn, ${selectedAction}`)
      this.action(selectedAction)
    }
  },
  watch: {
    player2: {
      immediate: true,
      deep: true,
      handler() {
        if (this.player2.active) {
          return this.enemyAction()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.attack-cards-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;

  .attack-card {
    width: 25%;
    border: 1px solid black;
    margin: 0 1rem;

    .card-actions {
      display: flex;
      justify-content: space-around;
      margin-top: .4rem;
    }

    .card-status {
      display: flex;
      justify-content: space-between;
      margin: .5rem 0;
    }

    .card-info {
      h3 {
        margin: .25rem 0;
      }
    }

    button {
      padding: .5rem .75rem;
    }
  }

  img {
    width: 80%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
