<template>
  <div></div>
</template>

<script>
// @ is an alias to /src
import { V2 } from "@/components/FishTemplate";

export default {
  name: "fishTemplate",
  async mounted() {
    let tmpl = `<div class="newslist">
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}/></div>
      <div class="img">{{info.name}}</div>
    </div>`;

    const v2 = new V2().mounted(this.$el);
    v2.render(tmpl, {
      image: "some img",
      info: { showImage: true, showDate: false, name: "aaa" },
    });
  },
};
</script>
