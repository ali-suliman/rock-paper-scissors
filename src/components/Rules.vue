<template>
  <div class="container">
    <div class="inner-container">
      <section class="head">
        <h3>rules</h3>
        <span @click="hideRules">X</span>
      </section>
      <img src="../assets/images/image-rules.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
  methods: {
    hideRules: function() {
      this.$emit("hideRules");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #000a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .inner-container {
    background: #fff;
    padding: 1rem 2.6rem;
    border-radius: 10px;

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.4rem 0rem;
      margin: 1rem 0rem;

      h3 {
        text-transform: uppercase;
      }

      span {
        cursor: pointer;
      }
    }
  }
}

@media only screen and (max-width: 380px) {
  .container {
    background: #fff;

    .inner-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .head {
        width: 100%;
      }

      img {
        margin-bottom: 8rem;
      }
    }
  }
}
</style>