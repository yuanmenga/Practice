//对象数据类型设置
{
  let obj: [] = [];
  console.log(obj); //[]//数组也是对象类型
  let objs: {} = {};
  console.log(objs); //{}
  //给对象设置属性
  let hdssss: { name: string; age: number; url?: string }; //?代表该属性可加可不加
  // hdssss = {
  //   name: 12,
  // };报错，name为字符串
  hdssss = {
    name: "asd",
    age: 13,
  };
  console.log(hdssss);
}
