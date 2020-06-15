<template>
  <div class="ul">
    <img src="../assets/images/paper.svg" alt @click="pickPaper" class="item paper" />
    <img src="../assets/images/scissors.svg" alt @click="pickScissors" class="item scissors" />
    <img src="../assets/images/rock.svg" alt @click="pickRock" class="item rock" />
  </div>
</template>

<script>
export default {
  name: "SelectionBoard",
  computed: {
    selectionItems() {
      return this.$store.state.Selection;
    }
  },
  methods: {
    pickPaper() {
      this.$store.dispatch("pickPaper");
      this.$router.push("/result");
    },
    pickScissors() {
      this.$store.dispatch("pickScissors");
      this.$router.push("/result");
    },
    pickRock() {
      this.$store.dispatch("pickRock");
      this.$router.push("/result");
    }
  }
};
</script>

<style lang="scss" scoped>
.ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  width: 26rem;
  min-height: 20rem;
  padding: 0rem 2rem;
  background-image: url("../assets/images/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
}
</style>