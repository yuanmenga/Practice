"use strict";
//命名空间
var usera;
(function (usera) {
    usera.name = "asd";
    usera.hd = {};
})(usera || (usera = {}));
var hd;
(function (hd) {
    name: "asd";
})(hd || (hd = {}));
// console.log(hd.name);报错，读取命名空间的内容必须使用export导出
console.log(usera.name);
console.log(usera.hd);
