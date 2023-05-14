//返回值类型
function qwe(a: number, b: number): number {
  return a + b;
}
console.log(qwe(1, 2)); //3

function qwes(a: number, b: number): string {
  return `结果是${a + b}`;
}
console.log(qwes(1, 2)); //结果是3

let asdsa: string = qwes(1, 2);
console.log(asdsa); //结果是3

let asdsas: string = qwe(1, 2) as unknown as string;
console.log(asdsas); //3

//使用箭头函数
let asdasvf = (a: number, b: number): number => a + b;
console.log(asdasvf(2, 3)); //5

//当函数没有明确返回值时，使用 void 类型。TS 会自动推断，建议明确声明 void 类型
//这样能够让我们直观的看出函数的作用以及他的返回值，不需要阅读代码就可以
let hdasas = (): void => {
  console.log("后盾人");
};
hdasas();
