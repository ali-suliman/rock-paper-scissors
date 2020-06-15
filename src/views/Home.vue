<template>
  <div class="home">
    <SelectionBoard />
  </div>
</template>

<script>
import SelectionBoard from "../components/SelectionMenu.vue";
export default {
  name: "Home",
  components: {
    SelectionBoard
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 30rem;
  background: #1a2749;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>