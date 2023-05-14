// 函数的结构定义

//定义函数的结构
let ld: (a: number, b: number) => number;
//let 函数名：（变量类型）=>返回值类型
ld = function (a: number, b: number): number {
  return 1;
};
console.log(ld(1, 2)); //1

//定义函数的结构,复杂
let okd: (user: { name: string; age: number }) => void;
okd = function (user: { name: string; age: number }): void {
  console.log("你好");
  return undefined;
};
okd({ name: "dsa", age: 12 }); //你好

//定义函数的结构,type优化后
//参数对象声明
type userTypes = { name: string; age: number };
//函数声明
type okds = (user: userTypes) => boolean;
//asds的参数和返回值必须和okds声明的参数相同
let asds: okds = function (user: userTypes): boolean {
  console.log("你好");
  return true;
};
asds({ name: "dsa", age: 12 }); //你好
