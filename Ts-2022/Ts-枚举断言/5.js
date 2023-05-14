"use strict";
// 解构中使用as const
//在函数调用时进行断言
function hdsw() {
    let a = "后盾人";
    let b = (a, b) => a + b;
    return [a, b];
}
let [n, m] = hdsw(); //此时n,m的数据类型是字符串或者函数都有可能
// m(1, 2); 出错，m如果是类型 "string" 没有调用功能。
console.log(m(1, 2)); //3 所以我们进行对结果断言
//以下是两种其他方法
// let [n, m] = hdsw() as [string, Function]; //也可以这样写
// console.log(m(1, 2)); //3
//也可以在返回结果断言
function hdsws() {
    let a = "后盾人";
    let b = (a, b) => a + b;
    return [a, b]; //或者这样写
}
let [r, g] = hdsws();
console.log(g(1, 22)); //23
