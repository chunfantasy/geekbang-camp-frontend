<template>
  <div>
    <div id="editor"></div>
    <demo v-bind:isLoading="isDemoLoading" />
    <button @click="run">Run</button>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import axios from "axios";
import Demo from "@/components/Demo.vue";

export default {
  components: {
    Demo,
  },
  data() {
    return {
      editor: {},
      content: "<template><div>This is a demo.</div></template>",
      isDemoLoading: true,
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
        value: this.content,
        automaticLayout: true,
        language: "javascript",
      });
      this.isDemoLoading = true;
      axios
        .post("http://localhost:3000/run", {
          content: this.content,
        })
        .then((response) => {
          console.log(response);
          this.isDemoLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
      this.editor.onDidChangeModelContent(() => {
        this.content = this.editor.getValue();
      });
    },

    destroyEditor() {
      this.editor.dispose();
    },

    run() {
      this.isDemoLoading = true;
      axios
        .post("http://localhost:3000/update", {
          content: this.content,
        })
        .then((response) => {
          console.log(response);
          console.log("reload");
          this.isDemoLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#editor {
  height: 300px;
  border: 3px solid black;
  text-align: left;
}
</style>
