"use strict";
//泛型 generics
//可以动态的设置类型
//下面我们先看一下之前是如何设置类型的
{
    function hd(a) {
        return a;
    }
    let hds = hd("后盾人");
    console.log(hds); //后盾人
    //上面这种情况如果我们想要输入其他类型的数据是不可以的,我们要再次声明一个函数
    //泛型,很好的解决了这个问题，实现了函数的复用
    function hdsx(a) {
        return a;
    }
    let jiu = hdsx("你好");
    console.log(jiu); //你好
    let huasd = hdsx(true); //此处省略<boolean>,因为有些类型Ts会自动推断
    console.log(huasd); //true
}
