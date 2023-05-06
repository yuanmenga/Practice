import "./style.scss";
import config from "./config";
import { promise } from "./service/Image";
import straw from "./canvas/straw";
let apps = document.querySelector<HTMLDivElement>("#app")!;
apps.style.width = config.canvas.width + "px";
apps.style.height = config.canvas.height + "px";
async function bootstrap() {
  await Promise.all(promise);
  straw.render();
}
bootstrap();
