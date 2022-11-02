//as断言，就是我说了算，我说是什么类型就是什么类型
let hdx: "湘军" | "后盾人";
// hdx = "asd"; //报错，结果只能为湘军或后盾人
function hds(a: number): number | string {
  return "das";
}
let res = hds(12) as number;
console.log(res); //das
// res = "ass";报错，上面断言res只能是number类型

res = 32; //  在次赋值只能赋值数值类型
console.log(res); //32
