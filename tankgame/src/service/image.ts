//图片预加载封装
import config from "../config";
type mapKey = keyof typeof config.images;
export const image = new Map<mapKey, HTMLImageElement>();
export const promise = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = value;
    img.onload = () => {
      image.set(key as mapKey, img);
      resolve(img);
    };
  });
});
