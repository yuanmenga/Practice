"use strict";
//ts 对DOM事件的处理
let hdaa = document.querySelector("#hd");
hdaa.addEventListener("click", (event) => {
    event.preventDefault(); //阻止默认行为
    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", "你好，后盾人");
});
