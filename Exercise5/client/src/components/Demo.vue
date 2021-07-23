<template>
  <div id="demo-container">
    <iframe v-if="!isLoading" src="http://localhost:3001/#/" id="demo" />
    <h1 v-if="isLoading">Loading</h1>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>
<style scoped>
#demo {
  width: 100%;
  height: 300px;
  border: 3px solid black;
}
</style>
