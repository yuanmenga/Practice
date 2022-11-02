// null和undefind也是数据类型
let kjd: null = null;
let kjds: undefined = undefined;
console.log(kjd); //null
console.log(kjds); //undefined
//可做函数返回值使用
function kfd(): null | string | undefined {
  //   return "后盾";
  return null;
}
console.log(kfd()); //null
//正常情况下null和undefined可以赋值给string
//当配置项启用 strictNullChecks 时，null 与 undefined 只能赋值给 void、null、undefined 类型
// let sasd: string = null; //不能将类型“null”分配给类型“string”
// let hd: string = undefined; //配置strictNullChecks=true 时将报错
