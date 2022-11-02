"use strict";
//as断言，就是我说了算，我说是什么类型就是什么类型
let hdx;
// hdx = "asd"; //报错，结果只能为湘军或后盾人
function hds(a) {
    return "das";
}
let res = hds(12);
console.log(res); //das
// res = "ass";报错上面断言res只能是number类型
res = 32; //  在次赋值只能赋值数值类型
console.log(res); //32
