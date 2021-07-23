<template>
  <div>
    <div id="editor"></div>
    <demo />
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
        value: "<template></template>",
        // automaticLayout: true,
        // language: "javascript",
      });
      axios
        .post("http://localhost:3000/run", {
          content: this.content,
        })
        .then(function (response) {
          console.log(response);
          // document.getElementById("demo").contentWindow.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
      this.editor.onDidChangeModelContent(() => {
        this.content = this.editor.getValue();
        // const dom = document.querySelector("#demo");
        // while (dom.hasChildNodes()) {
        //   dom.removeChild(dom.firstChild);
        // }
        // dom.innerHTML = this.content;
        axios
          .post("http://localhost:3000/update", {
            content: this.content,
          })
          .then(function (response) {
            console.log(response);
            console.log("reload");
            document.getElementById("demo").contentWindow.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
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
  height: 300px;
  border: 3px solid black;
}
#demo-container {
  height: 300px;
  border: 3px solid black;
}
</style>
