//ts 对DOM事件的处理
let hdaa: HTMLDivElement = document.querySelector("#hd") as HTMLDivElement;
hdaa.addEventListener("click", (event: Event) => {
  event.preventDefault(); //阻止默认行为
  const body: HTMLBodyElement = document.querySelector(
    "body"
  ) as HTMLBodyElement;
  body.insertAdjacentHTML("beforeend", "你好，后盾人");
});
