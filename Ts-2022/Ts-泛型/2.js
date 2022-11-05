"use strict";
//泛型也是可以继承的
//泛型就是动态的传递数据类型
// {
//   //使用普通函数的时候我们可以传递任何的数据类型，当然这不是我们想要的
//   function hds(a: any) {
//     return a;
//   }
//   console.log(hds("后盾人")); //后盾人
//   console.log(hds(9)); //9
// }
// {
//   //接下来我们可以使用泛型来动态的接收数据类型
//   //   <T>就相当于  type T = {}; 没有任何的属性和类型规范，所有会报错
//   function hds<T>(name: T) {
//     return name.length; //
//   }
//   console.log(hds<string>("后盾人")); //3
// }
// {
//   //所有下面我们要用到泛型的继承
//   function hds<T extends string>(name: T) {
//     return name.length; //继承之后T具有的所有string的属性
//   }
//   console.log(hds<string>("后盾人")); //3
//   console.log(hds(2)); //因为number类型没有length属性，所有有了下面的联合继承
// }
{
    //所有下面我们要用到泛型的继承
    function hds(name) {
        return name.length; //继承之后T具有的所有string的属性和数组的属性
    }
    console.log(hds("后盾人")); //3
    console.log(hds([1, 2, 3, "sd"]));
}
{
    //下面是自定义的对象
    function hds(name) {
        return name.length; //继承之后T具有的所有string的属性
    }
    console.log(hds("后盾人")); //3
}
{
    // 泛型自行推断，
    function hds(arg) {
        return arg.length;
    }
    console.log(hds([1, "ADS"])); //2
}
