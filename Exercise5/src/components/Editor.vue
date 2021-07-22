<template>
  <div>
    <div id="editor"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  data() {
    return {
      editor: {},
    };
  },
  mounted() {
    this.initMonaco();
  },
  destroyed() {
    this.destroyEditor();
  },
  methods: {
    initMonaco() {
      this.editor = monaco.editor.create(document.getElementById("monaco"), {
        value: "Hello world",
        automaticLayout: true,
        language: "javascript",
      });
    },

    destroyEditor() {
      this.editor.dispose();
    },
  },
};
</script>

<style scoped>
#editor {
  height: 500px;
  border: 1px solid wheat;
}
</style>
