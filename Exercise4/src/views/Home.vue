<template>
  <div>
    <div class="head">0717课后作业</div>
    <fish-template />
  </div>
</template>

<script>
// @ is an alias to /src
import FishTemplate from "./FishTemplate.vue";

export default {
  name: "Home",
  components: {
    FishTemplate,
  },
};
</script>

<style lang="less" scoped>
.head {
  background-color: #5666f3;
  color: #fff;
  font-size: 30px;
  height: 50px;
  line-height: 50px;
}

.menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    display: flex;
    border: 1px #e0e0e0 solid;
    background: #f0f0f0;
    width: 200px;
    height: 100px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 6px;
  }
}
</style>
