import Engine from "@/components/FishTemplate/engine2.js";

describe("Test engine2.js", () => {
  it("should render task correctly", () => {
    let template = `<div class="newslist">
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}</div>
      <div class="img">{{info.name}}</div>
    </div>`;
    const expectedDOM = `<div class="newslist">
      <div class="img"><img src="some img"/></div>
      <div class="img">aaa</div>
    </div>`;
    const engine = new Engine();
    let nodes = engine.render(template, {
      image: "some img",
      info: { showImage: true, showDate: false, name: "aaa" },
    });
    expect(nodes.replace(/>\s+</g, '><')).toEqual(expectedDOM.replace(/>\s+</g, '><'));
  });
});
