"use strict";
//返回值类型
function qwe(a, b) {
    return a + b;
}
console.log(qwe(1, 2)); //3
function qwes(a, b) {
    return `结果是${a + b}`;
}
console.log(qwes(1, 2)); //结果是3
let asdsa = qwes(1, 2);
console.log(asdsa); //结果是3
let asdsas = qwe(1, 2);
console.log(asdsas); //3
//使用箭头函数
let asdasvf = (a, b) => a + b;
console.log(asdasvf(2, 3)); //5
//当函数没有明确返回值时，使用 void 类型。TS 会自动推断，建议明确声明 void 类型
//这样能够让我们直观的看出函数的作用以及他的返回值，不需要阅读代码就可以
let hdasas = () => {
    console.log("后盾人");
};
hdasas();
