"use strict";
//void 和 nerve
// void 类型的值为 null 或 undefined，常用于对函数返回值类型定义
//void 类型的值可以是 null 或 undefined，但如果 TS 配置开启了 strict 或 strictNullChecks则不允许 void 为 null
function sums() {
    return;
}
console.log(sums()); //undefined
console.log(sums()); //undefined 没有返回值时默认为undefind
let lk;
// lk = "asd"; //报错
// nerve表示不包括任何类型，函数抛出异常或无限循环时用never,不能有返回值
function ij() {
    throw new Error("出错了");
}
ij();
