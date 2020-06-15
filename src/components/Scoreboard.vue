<template>
  <div class="scoreboard">
    <img src="../assets/images/logo.svg" alt="Rock, Paper, Scissors" />
    <article class="score">
      <p>score</p>
      <span id="score-val">{{ score }}</span>
    </article>
  </div>
</template>

<script>
export default {
  computed: {
    score() {
      return this.$store.state.score;
    }
  }
};
</script>

<style lang="scss" scoped>
.scoreboard {
  width: 90%;
  max-width: 40rem;
  min-height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-radius: 10px;
  border: solid 3px #fff4;

  img {
    width: 5.8rem;
  }
  .score {
    background: linear-gradient(#fff, #cfcfcf);
    box-shadow: #0004 0px 0px 16px;
    height: 5rem;
    width: 5.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 0.6rem;

    p {
      color: #1e34a1;
      opacity: 0.8;
      font-weight: 600;
    }

    span {
      color: #565368;
      font-size: 2.6rem;
      font-weight: 700;
    }
  }
}
</style>