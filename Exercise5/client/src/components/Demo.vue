<template>
  <div id="demo-container">
    <iframe v-if="!isLoading" src="http://localhost:3001/#/" id="demo-iframe" />
    <h1 v-if="isLoading">Loading</h1>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>
<style scoped>
#demo-iframe {
  width: 100%;
  border: none;
  height: 100%;
}
</style>
