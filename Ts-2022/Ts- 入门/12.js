"use strict";
//函数参数
// function xingaja(a, b) {
//   return a + b;
// }
// console.log(xingaja(1, "aws")); //1aws 没有限定类型的函数定义，代码是不稳定的
// function xingajas(a: number, b: number) {
//   return a + b;
// }
// console.log(xingajas(1, 1)); //2
//如果参数是可选的，使用 ? 参数可以不传 ，不传时c值为undefined
function xingajas(a, b, c) {
    return c;
}
console.log(xingajas(1, 1)); //undefined
