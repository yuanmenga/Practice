"use strict";
//ts对象推断
let hdss = { name: "asd", age: 13, hds: false, lessen: [{ totle: "qw" }] };
console.log(hdss);
// hdss.age = "qw";报错
hdss.age = 12;
// hdss.lessen.push({ title: "as" });报错
// hdss.agess = 12;报错
hdss.lessen.push({ totle: "as" });
