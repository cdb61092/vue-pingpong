import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      player1: {
        score: 0,
        wins: 0,
      },
      player2: {
        score: 0,
        wins: 0,
      },
    };
  },
  mutations: {
    INCREMENT(state, playerNumber) {
      console.log(state[`player${playerNumber}`]);
      state[`player${playerNumber}`].score++;
      // state.player1.score++;
    },
    DECREMENT(state, playerNumber) {
      state[`player${playerNumber}`].score--;
    },
    NEWGAME(state) {
      state.player1.score = 0;
      state.player2.score = 0;
    },
    INCREMENTWIN(state, playerNumber) {
      state[`player${playerNumber}`].wins++;
    },
  },
  getters: {
    getPlayer(state) {
      return (playerNumber) => state[`player${playerNumber}`];
    },
  },
  actions: {
    checkForGameOver({ commit, state }) {
      if (
        (state.player1.score > 10 || state.player2.score > 10) &&
        Math.abs(state.player1.score - state.player2.score) > 1
      ) {
        const playerNumber = state.player1.score > state.player2.score ? 1 : 2;
        commit("INCREMENTWIN", playerNumber);
        commit("NEWGAME");
      }
    },
    addPoint({ commit, dispatch }, playerNumber) {
      commit("INCREMENT", playerNumber);
      dispatch("checkForGameOver");
    },

    removePoint({ commit, dispatch }, playerNumber) {
      commit("DECREMENT", playerNumber);
      dispatch("checkForGameOver");
    },
  },
});

const app = createApp(App);
const vuetify = createVuetify();
app.use(vuetify);
app.use(store);

app.mount("#app");
