//函数参数
// function xingajas(a: number, b: number) {
//   return a + b;
// }
// console.log(xingajas(1, 1)); //2

//如果参数是可选的，使用 ? 参数可以不传 ，不传时c值为undefined
function xingajas(a: number, b: number, c?: number) {
  return c;
}
console.log(xingajas(1, 1)); //undefined
