"use strict";
// interface 结合enum 与array
{
    //枚举
    let Typeuser;
    (function (Typeuser) {
        Typeuser[Typeuser["Boy"] = 0] = "Boy";
        Typeuser[Typeuser["Girl"] = 1] = "Girl";
    })(Typeuser || (Typeuser = {}));
    let hd = {
        name: "后盾人",
        age: 12,
        sex: Typeuser.Boy,
    };
    let hds = {
        name: "袁猛",
        age: 13,
        sex: Typeuser.Girl,
    };
    const arr = [hd, hds];
    //   const arr: User[] = [hd, hds, 3];  报错，不能有3
    console.log(arr); //[ { name: '后盾人', age: 12, sex: 0 }, { name: '
    //袁猛', age: 13, sex: 1 } ]
}
