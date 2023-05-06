/// <reference types="vite/client" />
//声明全局的类型
interface ModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel;
}
interface IModel {}
