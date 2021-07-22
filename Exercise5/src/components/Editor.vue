<template>
  <div>
    <div id="editor"></div>
    <div id="demo"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  data() {
    return {
      editor: {},
      content: "",
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
      this.editor = monaco.editor.create(document.getElementById("editor"), {
        value: "Hello world",
        // automaticLayout: true,
        // language: "javascript",
      });
      this.editor.onDidChangeModelContent(() => {
        this.content = this.editor.getValue();
        console.log(this.content);
        const dom = document.querySelector("#demo");
        while (dom.hasChildNodes()) {
          dom.removeChild(dom.firstChild);
        }
        dom.innerHTML = this.content;
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
