//js的超集，js就相当于你的爱人是150斤，但是ts就变成了100斤，而且具备琴棋书画的能力，属于锦上添花
//ts是强类型检查，编辑器提示的非常准确，完全支持js的所有新特性，自己还有特性，就是挺好
//1.设置变量的类型，和返回值的类型
function sum(a: number, b: number): string {
  return "返回值是" + (a + b);
}
console.log(sum(2, 2));
//2.ts推断
// let hd = "das";
// hd = 12; // ts会自动推断类型，不可以修改成其他类型

//3.数组自动推断类型
let arr = ["aas", 12];
arr.push("asd", 1212);
console.log(arr);

//数组的类型手动设置
let arrr: (string | number)[] = [1, 2];
