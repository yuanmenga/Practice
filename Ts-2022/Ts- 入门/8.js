"use strict";
//unknown与any的区别
//any 可以是任何类型
let axa = "12as";
let hdsaz = axa;
console.log(hdsaz); //12as
// unknown表示未知的类型，会进行 TS 的类型检查
let axaa = "12as";
console.log(axaa);
// let hdsazz: string = axaa;
// console.log(hdsazz); //不能将类型“unknown”分配给类型“string”。ts
//但是可以使用as进行类型断言
let axaaa = "12as";
let hdsazzz = axaaa;
console.log(hdsazzz); //12as
//as断言例子2
let ajd = 12;
let asda = ajd;
console.log(asda); //12
