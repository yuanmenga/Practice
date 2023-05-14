//as断言
//就是我说了算，我说是什么类型就是什么类型

function hds(a: number): string {
  return "das";
}
let res = hds(12) as unknown as number;
console.log(res); //das
// res = "ass";报错，上面断言res只能是number类型
console.log(typeof res); //string

res = 32; //  在次赋值只能赋值数值类型
console.log(res); //32
