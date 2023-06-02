"use strict";
//&交叉类型，必须是同类型才可交叉
{
    const userhd = {
        //const userhd: user & hd
        name: "asd",
        age: 134,
    };
}
// {
//   type hd = string;
//   type user = number;
//   const hda: hd & user; //const hda: never ,因为string和number不是相同的类型
// }
{
    const usermangage = {
        name: "后盾人",
        age: 12,
        quanxian: "mangage",
    };
}
{
    //属性重复时会报错
    const usermangage = {
        //只能通过pick工具将某一个类型的数据扔掉
        name: "后盾人",
        age: true,
        quanxian: "mangage",
    };
}
