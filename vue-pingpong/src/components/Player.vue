<template>
  <div class="player">
    <h1></h1>
    <input class="playerName" type="text" />
    <div class="container">
      <span class="serveIndicator">SERVE</span>
      <div class="score">{{ player.score }}</div>
      <div class="btn-container">
        <button class="btn" @click="decPoint()">-</button>
        <button class="btn" @click="scorePoint()">+</button>
      </div>
      <div class="wins">wins: {{ wins }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Player",
  props: {
    playerNumber: {
      type: Number,
      required: true,
    },
    playerName: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getPlayer"]),
    player() {
      return this.getPlayer(this.playerNumber);
    },
    ...mapActions(["addPoint", "removePoint"]),
  },
  methods: {
    scorePoint() {
      this.$store.actions.addPoint(this.playerNumber);
    },
    decPoint() {
      this.$store.actions.removePoint(this.playerNumber);
    },
  },
};
</script>

<style scoped>
.player {
  width: 50%;
}

.playerName {
  font-size: 60px;
  text-align: center;
}

.container {
  background: blue;
}

.btn {
  width: 40%;
  font-size: 300px;
  border: none;
  background: none;
  cursor: pointer;
}

.score {
  font-size: 300px;
  color: black;
}

.btn-container {
  display: flex;
  justify-content: space-around;
}

.wins {
  background: white;
  font-size: 50px;
}

.serveIndicator {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
