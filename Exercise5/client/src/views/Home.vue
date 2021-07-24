<template>
  <div>
    <div class="head">0722课后作业</div>
    <editor />
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from "@/components/Editor.vue";

export default {
  name: "Home",
  components: {
    Editor,
  },
};
</script>

<style lang="less" scoped>
.head {
  background-color: #0097a7;
  color: #fff;
  font-size: 30px;
  height: 50px;
  line-height: 50px;
}
</style>
