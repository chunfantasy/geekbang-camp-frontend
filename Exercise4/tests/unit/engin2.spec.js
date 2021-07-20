import Engine from "@/components/FishTemplate/engine2.js";

describe("Test engine2.js", () => {

  it("should render task correctly", () => {
    let template = `<div class="newslist">
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}</div>
      <div class="img">{{info.name}}</div>
    </div>`;
    const expectedDOM = `<div class="newslist">
      <div class="img"><img src="some img"></div>
      <div class="img">aaa</div>
    </div>`;
    const engine = new Engine();
    let nodes = engine.render(template, {
      image: "some img",
      info: { showImage: true, showDate: false, name: "aaa" },
    });
    const container = document.createElement('container');
    container.appendChild(nodes);
    expect(container.innerHTML).toEqual(expectedDOM.replace(/>\s+</g, '><'));
  });

  it("should render both true", () => {
    let template = `<div class="newslist">
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}</div>
      <div class="img">{{info.name}}</div>
    </div>`;
    const expectedDOM = `<div class="newslist">
      <div class="img"><img src="some img"></div>
      <div class="date">aaa</div>
      <div class="img">aaa</div>
    </div>`;
    const engine = new Engine();
    let nodes = engine.render(template, {
      image: "some img",
      info: { showImage: true, showDate: true, name: "aaa" },
    });
    const container = document.createElement('container');
    container.appendChild(nodes);
    expect(container.innerHTML).toEqual(expectedDOM.replace(/>\s+</g, '><'));
  });

  it("should render both false", () => {
    let template = `<div class="newslist">
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}</div>
      <div class="img">{{info.name}}</div>
    </div>`;
    const expectedDOM = `<div class="newslist">
      <div class="img">aaa</div>
    </div>`;
    const engine = new Engine();
    let nodes = engine.render(template, {
      image: "some img",
      info: { showImage: false, showDate: false, name: "aaa" },
    });
    const container = document.createElement('container');
    container.appendChild(nodes);
    expect(container.innerHTML).toEqual(expectedDOM.replace(/>\s+</g, '><'));
  });

  it("should render true and false", () => {
    let template = `<div class="newslist">
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}</div>
      <div class="img">{{info.name}}</div>
    </div>`;
    const expectedDOM = `<div class="newslist">
      <div class="img"><img src="some img"></div>
      <div class="img">aaa</div>
    </div>`;
    const engine = new Engine();
    let nodes = engine.render(template, {
      image: "some img",
      info: { showImage: true, showDate: false, name: "aaa" },
    });
    const container = document.createElement('container');
    container.appendChild(nodes);
    expect(container.innerHTML).toEqual(expectedDOM.replace(/>\s+</g, '><'));
  });

  it("should render false and true", () => {
    let template = `<div class="newslist">
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}</div>
      <div class="img">{{info.name}}</div>
    </div>`;
    const expectedDOM = `<div class="newslist">
      <div class="date">aaa</div>
      <div class="img">aaa</div>
    </div>`;
    const engine = new Engine();
    let nodes = engine.render(template, {
      image: "some img",
      info: { showImage: false, showDate: true, name: "aaa" },
    });
    const container = document.createElement('container');
    container.appendChild(nodes);
    expect(container.innerHTML).toEqual(expectedDOM.replace(/>\s+</g, '><'));
  });

  it("should render different order", () => {
    let template = `<div class="newslist">
      <div class="img">{{info.name}}</div>
      <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
      <div class="date" v-if="info.showDate">{{info.name}}</div>
    </div>`;
    const expectedDOM = `<div class="newslist">
      <div class="img">aaa</div>
      <div class="img"><img src="some img"></div>
      <div class="date">aaa</div>
    </div>`;
    const engine = new Engine();
    let nodes = engine.render(template, {
      image: "some img",
      info: { showImage: true, showDate: true, name: "aaa" },
    });
    const container = document.createElement('container');
    container.appendChild(nodes);
    expect(container.innerHTML).toEqual(expectedDOM.replace(/>\s+</g, '><'));
  });

});
