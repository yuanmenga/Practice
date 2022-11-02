"use strict";
// 函数的结构定义
// let hdd: Function;
// hdd = "dsa"; //报错，hdd只能时函数
//定义函数的结构
let ld;
//let 函数名：（变量类型）=>返回值类型
ld = function (a, b) {
    return 1;
};
console.log(ld(1, 2)); //1
//定义函数的结构例子2
let okd;
okd = function (user) {
    console.log("你好");
    return undefined;
};
okd({ name: "dsa", age: 12 }); //你好
//asds的参数和返回值必须和okds声明的参数相同
let asds = function (user) {
    console.log("你好");
    return true;
};
asds({ name: "dsa", age: 12 }); //你好
