import config from "../config";
import canvasAbstract from "./canvasAbstract";

class straw extends canvasAbstract {
  render(): void {
    super.drwaModels(config.straw.number); //super调用父类的方法
  }
}
export default new straw();
