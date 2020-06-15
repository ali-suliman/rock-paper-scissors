import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Selection: [
      { name: 'rock', bdColor: '#DE3753', src: '../assets/images/rock.svg' },
      { name: 'paper', bdColor: '#546FF4', src: '../assets/images/paper.svg' },
      {
        name: 'scissors',
        bdColor: '#ECA71E',
        src: '../assets/images/scissors.svg'
      }
    ],
    cpuSelectionList: ['rock', 'paper', 'scissors'],
    userSelection: '',
    score: 0
  },
  mutations: {
    choosePaper(state) {
      state.userSelection = 'paper'
    },
    chooseScissors(state) {
      state.userSelection = 'scissors'
    },
    chooseRock(state) {
      state.userSelection = 'rock'
    },
    incrementScore(state) {
      state.score += 1
    },
    decrementScore(state) {
      if (state.score > 0) {
        state.score -= 1
      }
    }
  },
  actions: {
    pickPaper(ctx) {
      ctx.commit('choosePaper')
    },
    pickScissors(ctx) {
      ctx.commit('chooseScissors')
    },
    pickRock(ctx) {
      ctx.commit('chooseRock')
    },
    userScores(ctx) {
      ctx.commit('incrementScore')
    },
    cpuScores(ctx) {
      ctx.commit('decrementScore')
    }
  },
  modules: {}
})
