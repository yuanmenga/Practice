"use strict";
//  type 对参数对象或者函数进行声明，通过这种复用的手段可以很好的优化代码
// 正常声明,对对象参数的声明过于繁琐，代码过多
function adduser(user) {
    console.log("添加");
}
adduser({ name: "as", age: 12 });
function updateuser(user) {
    console.log("修改");
}
updateuser({ name: "aas", age: 12 });
function addusers(user) {
    console.log("添加");
}
addusers({ name: "as", age: 12 });
function updateusers(user) {
    console.log("修改");
}
updateusers({ name: "aas", age: 12 });
