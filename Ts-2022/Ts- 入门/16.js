"use strict";
// 函数接收剩余参数
function vdf(...arg) {
    console.log(arg);
}
// vdf(1, 2, 34, "sd"); //报错，只能传递数值类型
function asdsss(arr, ...arg) {
    let fds = [];
    fds.push(...arr, ...arg);
    return fds;
}
let aarrr = ["后盾人"];
console.log(asdsss(aarrr, "sda", 1213, 12));
