"use strict";
//typeof
// {
//   let hd = "sd";
//   type user = typeof hd;
//   const usea: user = "ads"; //const usea: string
// }
{
    let hd = {
        name: "As",
        age: 12,
    };
    //   type user = {  在ts内typeof会获取对象的属性
    //     name: string;
    //     age: number;
    // }
    const asd = {
        name: "as",
        age: 12,
    };
}
{
    function hds(obj, key) {
        return obj[key];
    }
    hds({ name: "as", age: 12 }, "name");
}
