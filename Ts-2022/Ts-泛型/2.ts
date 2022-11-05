//泛型也是可以继承的
//泛型就是动态的传递数据类型

// {
//   如果不给T传递数据类型或者继承，<T>相当于type T={}
//   //下面我们要用到泛型的继承
//   function hds<T extends string>(name: T) {
//     return name.length; //继承之后T具有的所有string的属性
//   }
//   console.log(hds<string>("后盾人")); //3
//   console.log(hds(2)); //因为number类型没有length属性，所有有了下面的联合继承
// }

{
  //下面我们要用到泛型的联合继承
  function hds<T extends string | any[]>(name: T) {
    return name.length; //继承之后T具有的所有string的属性和数组的属性
  }
  console.log(hds("后盾人")); //3
  console.log(hds([1, 2, 3, "sd"])); //4
}

{
  //下面是继承自定义的对象
  function hds<T extends { length: number }>(name: T) {
    return name.length; //继承之后T具有的所有string的属性
  }
  console.log(hds("后盾人")); //3字符串有length属性
  // console.log(hds(2)); 报错，数值没有length属性
}

{
  // 泛型自行推断，
  function hds<T>(arg: T[]): number {
    return arg.length;
  }
  console.log(hds<string | number>([1, "ADS"])); //2
}
