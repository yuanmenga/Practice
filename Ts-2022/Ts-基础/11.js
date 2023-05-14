"use strict";
// 函数也可以当作数据类型
//注意类型要使用大写的Function 这与 string/number/boolean 是有区别
let hdl = () => "后盾人";
console.log(hdl()); //后盾人
// let jdf: string = hdl; 报错函数不能赋值给字符出串
//使用unknonw和as
let jdf = hdl; //没任何意义
//但是我们可以直接声明函数类型，注意要大写
let asdf = () => { };
asdf = hdl;
console.log(asdf()); //后盾人
