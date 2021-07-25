<template>
  <div id="board">
    <Player playerName="Chase" :playerNumber="1"></Player>
    <div class="divider"></div>
    <Player playerName="Amber" :playerNumber="2"></Player>
  </div>
</template>

<script>
import Player from "./components/Player.vue";
// import Board from './components/Board.vue'

export default {
  name: "App",
  components: {
    Player,
  },
};
</script>

<style>
#board {
  height: 100vh;
  width: 100%;
  display: flex;
  background: red;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.divider {
  background: black;
  height: 100vh;
  width: 5px;
}
</style>
