<template>
  <div class="result">
    <section class="selection">
      <section class="user-selection">
        <img
          v-if="selection === 'paper'"
          src="../assets/images/paper.svg"
          alt
          class="item paper"
          v-bind:class="{winner: userWins}"
        />
        <img
          v-if="selection === 'scissors'"
          src="../assets/images/scissors.svg"
          alt
          class="item scissors"
          v-bind:class="{winner: userWins}"
        />
        <img
          v-if="selection === 'rock'"
          src="../assets/images/rock.svg"
          alt
          class="item rock"
          v-bind:class="{winner: userWins}"
        />
        <p>you picked</p>
      </section>

      <section class="cpu-selection">
        <img
          v-if="cpuSelection === 'paper'"
          src="../assets/images/paper.svg"
          alt
          class="item paper"
        />
        <img
          v-if="cpuSelection === 'scissors'"
          src="../assets/images/scissors.svg"
          alt
          class="item scissors"
        />
        <img v-if="cpuSelection === 'rock'" src="../assets/images/rock.svg" alt class="item rock" />
        <p>the house picked</p>
      </section>
    </section>

    <section class="final-result">
      <p class="result-txt">{{ resTxt }}</p>
      <button class="cta" v-if="showCta" @click="playAgain">play again</button>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    selection() {
      return this.$store.state.userSelection;
    }
  },
  data: () => {
    return {
      cpuSelection: "",
      resTxt: "",
      showCta: false,
      userWins: true
    };
  },
  created() {
    setTimeout(() => {
      this.getSelection();
      this.processResult();
    }, 1000);
  },
  methods: {
    getSelection: function() {
      const list = this.$store.state.cpuSelectionList;
      let randomNum = Math.round(Math.random() * 2);
      this.cpuSelection = list[randomNum];
    },
    processResult: function() {
      console.log(this.selection, this.cpuSelection);

      // if user selects paper

      if (this.selection === "paper" && this.cpuSelection === "paper") {
        this.resTxt = "it's a tie";
      } else if (this.selection === "paper" && this.cpuSelection === "rock") {
        this.$store.dispatch("userScores");
        this.resTxt = "you win";
      } else if (
        this.selection === "paper" &&
        this.cpuSelection === "scissors"
      ) {
        this.$store.dispatch("cpuScores");
        this.resTxt = "you lose";
      } else if (
        this.selection === "scissors" &&
        this.cpuSelection === "paper"
      ) {
        this.$store.dispatch("userScores");
        this.resTxt = "you win";
      } else if (
        this.selection === "scissors" &&
        this.cpuSelection === "rock"
      ) {
        this.$store.dispatch("cpuScores");
        this.resTxt = "you lose";
      } else if (
        this.selection === "scissors" &&
        this.cpuSelection === "scissors"
      ) {
        this.resTxt = "it's a tie";
      } else if (this.selection === "rock" && this.cpuSelection === "paper") {
        this.$store.dispatch("cpuScores");
        this.resTxt = "you lose";
      } else if (this.selection === "rock" && this.cpuSelection === "rock") {
        this.resTxt = "it's a tie";
      } else if (
        this.selection === "rock" &&
        this.cpuSelection === "scissors"
      ) {
        this.$store.dispatch("userScores");
        this.resTxt = "you win";
      }

      this.showCta = true;
    },
    playAgain() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin flex() {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.result {
  text-align: center;
  width: 100%;
  max-width: 30rem;
  height: 60%;
  @include flex();

  .selection {
    width: 100%;
    height: 12rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    section {
      width: 50%;
      @include flex();
      justify-content: flex-end;
      p {
        text-transform: uppercase;
        color: #fffc;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
        margin-top: 1.4rem;
      }
    }
  }

  .final-result {
    text-transform: uppercase;

    .result-txt {
      color: #fff;
      font-size: 4rem;
      font-weight: 700;
      margin: 2rem 0rem;
    }
    .cta {
      font-size: 1.2rem;
      padding: 1rem 4rem;
      background: #fff;
      color: #1a2749d4;
      border: none;
      border-radius: 10px;
      letter-spacing: 0.2rem;
      font-weight: 700;
      text-transform: uppercase;
      box-shadow: #0006 2px 2px 10px;
      cursor: pointer;
      transition: all 0.4s ease;

      &:hover {
        box-shadow: #0006 0px 6px 10px;
        transform: translateY(-6px);
      }
    }
  }

  .winner::after {
    content: "asdasd";
    background: #fff;
    width: 120rem;
    height: 120rem;
    position: absolute;
  }
}
</style>