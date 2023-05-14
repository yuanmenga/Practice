//any类型，和原生写js没什么区别
let asd: any;
asd = [];
asd = 12;
asd = "qw";
//任何类型都可
let dad: any[] = [];
dad.push("a", 12, false);
console.log(dad); //可以放任何类型
// function sum(a, b) {
//   return a + b;
// } //不写类型时默认为any,但是可以在配置文件中，修改属性noImplicitAny=true,就必须数据类型才可
// console.log(sum(1, 2));
