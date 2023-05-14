//unknown与any的区别
//any 可以是任何类型
let axa: any = "12as";
let hdsaz: string = axa;
console.log(hdsaz); //12as
// unknown表示未知的类型，会进行 TS 的类型检查
let axaa: unknown = "12as";
console.log(axaa); //12as
// let hdsazz: string = axaa;
// console.log(hdsazz); //不能将类型“unknown”分配给类型“string”。ts

// as进行类型断言
let hdsazzz: string = axaa as string;
console.log(hdsazzz); //12as
//as断言例子2
let ajd: number = 12;
let asda: string = ajd as unknown as string;
console.log(asda); //12
