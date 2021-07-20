import Engine from "./engine2";
export default class TemplateV1 {
  constructor() {
    this.root = null;
    this.engine = new Engine();
  }

  render(template, data) {
    let dom = this.engine.render(template, data);
    this.root.appendChild(dom);
  }

  mounted(dom) {
    this.root = dom;
    return this;
  }
}
