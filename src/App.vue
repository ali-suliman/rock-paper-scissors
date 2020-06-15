<template>
  <div id="app">
    <Scoreboard />
    <router-view />
    <Rules v-if="showRules" @hideRules="hideRules" />
    <button class="btn" @click="showRules = true">rules</button>
  </div>
</template>

<script>
import Scoreboard from "./components/Scoreboard.vue";
import Rules from "./components/Rules.vue";
export default {
  components: {
    Scoreboard,
    Rules
  },
  data: () => {
    return {
      showRules: true
    };
  },
  created() {
    setTimeout(() => {
      this.showRules = false;
    }, 4000);
  },
  methods: {
    hideRules: function() {
      this.showRules = false;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;600;700;800&display=swap");

* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  font-family: "Barlow Semi Condensed", sans-serif;
  outline: none;
}

#app {
  position: relative;
  background: #1a2749;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0rem 2rem 0rem;
  overflow: hidden;
}

.btn {
  background: transparent;
  border: solid 1.5px #fff9;
  border-radius: 10px;
  padding: 0.6rem 2.4rem;
  text-transform: uppercase;
  color: #fffc;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: all 0.4s ease;
}

.item {
  cursor: pointer;
  position: relative;
  background: #fff;
  padding: 1.4rem;
  height: 8rem;
  transform: scale(0.95);
  border-radius: 50%;
  margin: 0.4rem 1.6rem;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: #fff6 0px 0px 20px;
  }
}

.paper {
  border: solid 14px #4e6bf3;
}

.scissors {
  border: solid 14px #eaa318;
}

.rock {
  border: solid 14px #df405e;
}

@media only screen and(min-width: 400px) {
  .btn {
    &:hover {
      box-shadow: #0006 0px 6px 10px;
      transform: translateY(-6px);
    }
  }
}
</style>
