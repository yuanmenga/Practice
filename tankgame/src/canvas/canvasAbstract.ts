import config from "../config";
import { image } from "../service/Image";
//定义抽象类 ，提升代码的可服用性
export default abstract class canvasAbstract {
  protected items = [];
  abstract render(): void;
  constructor(
    public app = document.querySelector<HTMLDivElement>("#app")!,
    public el = document.createElement("canvas"),
    public canvas = el.getContext("2d")!
  ) {
    this.loadCanvas(); //初始化画布
  }
  private loadCanvas() {
    this.app.insertAdjacentElement("afterbegin", this.el);
    this.el.style.width = config.canvas.width + "px";
    this.el.style.height = config.canvas.height + "px";
    this.canvas.fillStyle = "#444";
    this.canvas.fillRect(0, 0, config.canvas.width, config.canvas.height);
  }
  //受保护的子类可以调用
  protected drwaModels(num: number) {
    this.positionCollection(num).forEach((position) => {
      const instance = new model(this.canvas, position.x, position.y);
    });
    const position = this.position();
    this.canvas.drawImage(
      image.get("straw")!,
      position.x,
      position.y,
      config.model.width,
      config.model.height
    );
  }
  protected positionCollection(num: number) {
    const collection = [] as { x: number; y: number }[];
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();
      }
    }
  }
  protected position() {
    return {
      x: 10,
      y: 10,
    };
  }
}
