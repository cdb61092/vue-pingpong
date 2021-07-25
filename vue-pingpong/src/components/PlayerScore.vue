<template>
  <div class="container">
    <span class="serveIndicator">SERVE</span>
    <div class="score">{{ score }}</div>
    <div class="btn-container">
      <button class="btn" @click="score--">-</button>
      <button class="btn" @click="score++">+</button>
    </div>
    <div class="wins">wins: {{ wins }}</div>
  </div>
</template>

<script>
import "vue-awesome/icons/flag";
import { mapActions } from "vuex";

export default {
  name: "PlayerScore",
  props: {
    playerNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      score: 0,
      wins: 0,
    };
  },
  // methods: {
  //   ...mapActions(),
  //   increment() {
  //     // if (this.score < 11 &&
  //   },
  //   decrement() {
  //     this.score--;
  //   },
  // },
};
</script>

<style scoped>
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
